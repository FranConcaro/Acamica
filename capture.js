const startButton=document.getElementById("start");
const videoContainer=document.getElementsByClassName("video-container")[0];
const instWindow=document.getElementById("instructions-window")

startButton.addEventListener("click",()=>{

instWindow.style.display="none";

videoContainer.style.display="block";









})




//*Video-capture

const video = document.getElementById("video");

function getStreamAndRecord() {
  navigator.mediaDevices
    .getUserMedia({
      audio: false,

      video: {
        height: { max: 480 }
      }
    })

    .then(stream => {
      video.srcObject = stream;

      video.play();
    });
}

window.addEventListener("load", getStreamAndRecord, false);
