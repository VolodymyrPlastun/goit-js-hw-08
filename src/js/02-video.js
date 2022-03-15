import throttle from "lodash.throttle";
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
    
const onPlay = function(data) {
        localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));


const videoTime = localStorage.getItem("videoplayer-current-time");
// console.log(videoTime); 
if (videoTime) {
      player.setCurrentTime(videoTime);  
}
