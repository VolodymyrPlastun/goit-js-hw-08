import throttle from "lodash.throttle";

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    feedback: document.querySelector('.feedback-form textarea')
}
const formData = {};
const STORAGE_KEY = "feedback-form-state";
userData();

refs.form.addEventListener('input', throttle(onInputChange, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onInputChange(evt) {
           formData[evt.target.name] = evt.target.value;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(formData))
}

function onFormSubmit(evt) {
    evt.preventDefault();
 if (refs.email.value === "" || refs.feedback.value === "") {

  return alert("Пожалуйста, заполните все поля формы!");
    }
        evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
    console.log(formData);
}

function userData() {
    const savedUserData = localStorage.getItem(STORAGE_KEY, formData);
    const parsedUserData = JSON.parse(savedUserData);
    if (savedUserData) {
   refs.email.value = parsedUserData.email || "";
        refs.feedback.value = parsedUserData.message || "";
    }

}












