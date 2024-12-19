let video = document.querySelector('.video_video');
const playlist = ['video1', 'video2']
let number = 0;


function videoPlay() {
    video.play();
}

function videoPause() {
    video.pause();
}

function videoPrev() {
    number--;
    video.src = `video/${playlist[number]}.mp4`;
}

function videoNext() {
    number++;
    video.src = `video/${playlist[number]}.mp4`;
}

function videoMute() {
    video.muted = true;
}

function videoUnmute() {
    video.muted = false;
}