// https://miguelmota.com/blog/pixelate-images-with-canvas/
function plotLogo() {
  const sides = [192, 512];
  const size = 192;
  const fontSize = size * 0.8;

  const canvas = document.getElementById("logo");
  canvas.name = "logo";
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(44, 61, 81, 1)";
  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fill();

  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.font = `bold ${fontSize}pt SF Mono`;
  // ctx.font = `120pt Georgia`;

  ctx.fillText("λ", size / 2, size / 2 + fontSize * 0.1);
  // ctx.fillText("B", size / 2, size / 2);

  // function lowPass(data) {
  //   for (var i = 0; i < data.length; i += 4) {
  //     if (data[i] != 44 || data[i + 1] != 61 || data[i + 2] != 81) {
  //       if (data[i] != 255 || data[i + 1] != 255 || data[i + 2] != 255) {
  //         data[i] = data[i + 1] = data[i + 2] = 255;
  //         // data[i] = 44;
  //         // data[i + 1] = 61;
  //         // data[i + 2] = 81;
  //       }
  //     }
  //   }
  // }
  // const ctxData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  // lowPass(ctxData.data);
  // ctx.putImageData(ctxData, 0, 0);

  png.src = canvas.toDataURL("image/png");

  // png.onload = plotLogo192;
  png.onload = imageLoaded;
}

// Image loaded callback.
function imageLoaded() {
  const logo = document.getElementById("logo");

  // Get the dimensions of loaded image.
  var width = logo.width;
  var height = logo.height;

  // Create canvas element.
  const canvas = document.getElementById("logo-192");
  canvas.width = width;
  canvas.height = height;

  // This is what gives us that blocky pixel styling, rather than a blend between pixels.
  canvas.style.cssText =
    "image-rendering: optimizeSpeed;" + // FireFox < 6.0
    "image-rendering: -moz-crisp-edges;" + // FireFox
    "image-rendering: -o-crisp-edges;" + // Opera
    "image-rendering: -webkit-crisp-edges;" + // Chrome
    "image-rendering: crisp-edges;" + // Chrome
    "image-rendering: -webkit-optimize-contrast;" + // Safari
    "image-rendering: pixelated; " + // Future browsers
    "-ms-interpolation-mode: nearest-neighbor;"; // IE

  // Grab the drawing context object. It's what lets us draw on the canvas.
  var context = canvas.getContext("2d");

  // Use nearest-neighbor scaling when images are resized instead of the resizing algorithm to create blur.
  context.webkitImageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;

  // We'll be pixelating the image by 80% (20% of original size).
  var percent = 0.15;

  // Calculate the scaled dimensions.
  var scaledWidth = width * percent;
  var scaledHeight = height * percent;

  // Render image smaller.
  context.drawImage(logo, 0, 0, scaledWidth, scaledHeight);

  // Stretch the smaller image onto larger context.
  context.drawImage(
    canvas,
    0,
    0,
    scaledWidth,
    scaledHeight,
    0,
    0,
    width,
    height
  );

  // Here are what the above parameters mean:
  // canvasElement, canvasXOffsetForImage, canvasYOffsetForImage, imageWidth, imageHeight, imageXOffset, imageYOffset, destinationImageWidth, destinationImageHeight

  // Append canvas to body.
  // document.body.appendChild(canvas);
}

function plotLogo192() {
  const size = 192;

  const canvas = document.getElementById("logo-192");
  canvas.name = "logo-" + size;
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(png, 0, 0, size, size);
}

function pixel() {
  const size = 192;
  const fontSize = size * 0.8;

  const canvas = document.getElementById("pixel");
  canvas.name = "logo";
  canvas.width = size;
  canvas.height = size;

  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgba(44, 61, 81, 1)";
  ctx.beginPath();
  ctx.rect(0, 0, size, size);
  ctx.fill();

  ctx.fillStyle = "rgba(255, 255, 255, 1)";
  ctx.beginPath();

  ctx.rect(30, 30, 25, 5);
  ctx.rect(30, 35, 30, 5);
  ctx.rect(30, 40, 30, 5);

  ctx.rect(45, 45, 20, 5);
  ctx.rect(50, 50, 15, 5);

  ctx.rect(45, 55, 25, 10);

  ctx.rect(40, 65, 35, 5);

  ctx.rect(40, 70, 15, 5);
  ctx.rect(60, 70, 15, 5);

  ctx.rect(35, 75, 15, 10);
  ctx.rect(65, 75, 15, 10);

  ctx.rect(30, 85, 15, 10);
  ctx.rect(70, 85, 15, 10);

  ctx.rect(25, 95, 15, 10);
  ctx.rect(75, 95, 15, 5);
  ctx.rect(75, 100, 25, 5);

  ctx.rect(20, 105, 15, 10);
  ctx.rect(80, 105, 20, 10);

  // Best
  // ctx.rect(28, 30, 24, 15);
  // for (let i = 0; i < 8; i++) {
  //   ctx.rect(30 + i * 6, 30 + i * 15, 24, 15);
  // }
  // for (let i = 0; i < 5; i++) {
  //   ctx.rect(24 + i * 6, 135 - i * 15, 24, 15);
  // }
  // ctx.rect(78, 135, 24, 15);

  // ctx.rect(27, 30, 24, 8);
  // for (let i = 0; i < 16; i++) {
  //   ctx.rect(30 + i * 3, 30 + i * 8, 24, 8);
  // }
  // for (let i = 0; i < 5; i++) {
  //   ctx.rect(24 + i * 6, 135 - i * 15, 24, 15);
  // }
  // ctx.rect(78, 135, 24, 15);

  // Best!
  // for (let i = 0; i < 8; i++) {
  //   ctx.rect(30 + i * 5, 30 + i * 10, 15, 10);
  // }
  // for (let i = 0; i < 5; i++) {
  //   ctx.rect(20 + i * 5, 100 - i * 10, 15, 10);
  // }

  // ctx.rect(30, 30, 20, 20);
  // ctx.rect(50, 30, 20, 20);
  // ctx.rect(70, 50, 20, 20);
  // ctx.rect(90, 70, 20, 20);
  // ctx.rect(110, 90, 20, 20);
  // ctx.rect(130, 110, 40, 20);
  // ctx.rect(70, 90, 20, 20);
  // ctx.rect(50, 110, 20, 20);

  // ctx.rect(50, 50, 20, 10);
  // ctx.rect(70, 60, 10, 10);
  // ctx.rect(80, 70, 10, 10);
  // ctx.rect(90, 80, 10, 10);
  // ctx.rect(100, 90, 10, 10);
  // ctx.rect(110, 100, 10, 10);
  // ctx.rect(120, 110, 20, 10);
  // ctx.rect(70, 80, 10, 10);
  // ctx.rect(60, 90, 10, 10);
  // ctx.rect(50, 100, 10, 10);
  // ctx.rect(40, 110, 10, 10);

  // ctx.rect(30, 30, 40, 20);
  // ctx.rect(60, 50, 20, 20);
  // ctx.rect(70, 70, 20, 20);
  // ctx.rect(80, 90, 20, 20);
  // ctx.rect(90, 110, 40, 20);
  // ctx.rect(60, 90, 20, 20);
  // ctx.rect(40, 110, 20, 20);

  ctx.fill();
}

const png = document.createElement("img");

plotLogo();
pixel();
