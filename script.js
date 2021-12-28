console.log("Hello AR!");

const box = document.getElementById("box");

/*
const defaultParams = {
  flipHorizontal: true,
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
  const ctx = canvas.getContext("2d");

  let model;

  handTrack.load(defaultParams).then((loadedModel) => {
    model = loadedModel;
  });

  handTrack.startVideo(video).then((status) => {
    if (status) {
      navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
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
      //model.renderPredictions(predictions, canvas, ctx, video);
      //window.requestAnimationFrame(runDetection);
      if (predictions != "") {
        console.log(predictions[0].label); // bbox[x, y, width, height]
        if (predictions[0].label == "open") {
          box.setAttribute("color", "#ff0000");
        } else if (predictions[0].label == "closed") {
          box.setAttribute("color", "#00ff00");
        }
      }
    });
  };
});

*/

/* ******************************************************************************************* */

window.addEventListener("load", () => {
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

  /*
  setTimeout(() => {
    box.setAttribute(
      "animation__2",
      "property: color; to: #006ff9; dur: 2000; easing: linear; loop:false"
    );
  }, 10000);
  */
});

/* ******************************************************************************************* */
