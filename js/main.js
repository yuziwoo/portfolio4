window.addEventListener("DOMContentLoaded", (e) => {
  let video = document.getElementById("main_video");

  video.addEventListener("loadeddata", () => {
    video.pause();
    setTimeout(() => {
      video.play();
    }, 500);
  })

 
});
