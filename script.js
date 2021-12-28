console.log("Hello AR!");

const defaultParams = {
  flipHorizontal: false,
  outputStride: 16,
  imageScaleFactor: 1,
  maxNumBoxes: 20,
  iouThreshold: 0.2,
  scoreThreshold: 0.6,
  modelType: "ssd320fpnlite",
  modelSize: "large",
  bboxLineWidth: "2",
  fontSize: 17,
};

window.addEventListener("arjs-video-loaded", () => {
  console.log("arjs video loaded");
  const video = document.getElementById("arjs-video");
  const canvas = document.querySelector(".a-canvas");
  //const context = canvas.getContext("2d");

  let model;

  handTrack.load(defaultParams).then((loadedModel) => {
    model = loadedModel;
  });

  handTrack.startVideo(video).then((status) => {
    if (status) {
      navigator.mediaDevices.getUserMedia({ video: true });
      console.log(status);
      //runDetection();
      setInterval(() => {
        runDetection();
      }, 1000);
    }
  });

  const runDetection = () => {
    model.detect(video).then((predictions) => {
      console.log(predictions);
      //model.renderPredictions(predictions, canvas, context, video);
      //window.requestAnimationFrame(runDetection);
    });
  };
});

/* ******************************************************************************************* */

window.addEventListener("load", () => {
  const box = document.getElementById("box");
  const border = document.getElementById("border");

  const scene = document.getElementById("scene");
  const camera = document.getElementById("camera");
  const marker = document.getElementById("marker");

  let check;

  marker.addEventListener("markerFound", () => {
    console.log("marker found");
    let cameraPosition = camera.object3D.position;
    let markerPosition = marker.object3D.position;
    let distance = cameraPosition.distanceTo(markerPosition);

    check = setInterval(() => {
      cameraPosition = camera.object3D.position;
      markerPosition = marker.object3D.position;
      distance = cameraPosition.distanceTo(markerPosition);

      // do what you want with the distance:
      console.log(distance);
    }, 1000);
  });

  marker.addEventListener("markerLost", () => {
    clearInterval(check);
  });

  box.addEventListener("collide", function (evt) {
    console.log("This A-Frame entity collided with another entity!");
  });

  setTimeout(() => {
    box.setAttribute(
      "animation__2",
      "property: color; to: #006ff9; dur: 2000; easing: linear; loop:false"
    );
  }, 10000);
});

/* ******************************************************************************************* */
