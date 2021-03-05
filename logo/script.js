function fontLogo() {
  const size = 512;
  const fontSize = size * 0.7;

  const canvas = document.getElementById("font-logo");
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

  ctx.fillText("λ", size / 2, size / 2 + fontSize * 0.1);

  png.src = canvas.toDataURL("image/png");

  png.onload = downscaleUpscale;
}

function downscaleUpscale() {
  const logo = document.getElementById("font-logo");

  var width = logo.width;
  var height = logo.height;

  const canvas = document.getElementById("font-logo-downscale-upscale");
  canvas.width = width;
  canvas.height = height;

  canvas.style.cssText =
    "image-rendering: -moz-crisp-edges;" + // FireFox
    "image-rendering: -webkit-crisp-edges;" + // Chrome
    "image-rendering: crisp-edges;" + // Chrome
    "image-rendering: -webkit-optimize-contrast;" + // Safari
    "image-rendering: pixelated; "; // Future browsers

  var context = canvas.getContext("2d");

  context.webkitImageSmoothingEnabled = false;
  context.mozImageSmoothingEnabled = false;
  context.msImageSmoothingEnabled = false;
  context.imageSmoothingEnabled = false;

  var percent = 0.06;

  var scaledWidth = width * percent;
  var scaledHeight = height * percent;

  context.drawImage(logo, 0, 0, scaledWidth, scaledHeight);

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
}

function plotLogo(elementId, size) {
  const canvas = document.getElementById(elementId);
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

  const center = Math.floor(size / 2);
  const p = Math.floor(size / 22);
  const x0 = center - (8 / 2 + 2) * p;
  const y0 = center - (17 / 2) * p;

  ctx.rect(x0, y0, p * 5, p);
  ctx.rect(x0, y0 + p, p * 6, p);
  ctx.rect(x0, y0 + p * 2, p * 6, p);

  ctx.rect(x0 + p * 3, y0 + p * 3, p * 4, p);
  ctx.rect(x0 + p * 4, y0 + p * 4, p * 3, p);

  ctx.rect(x0 + p * 3, y0 + p * 5, p * 5, p * 2);

  ctx.rect(x0 + p * 2, y0 + p * 7, p * 7, p);

  ctx.rect(x0 + p * 2, y0 + p * 8, p * 3, p);
  ctx.rect(x0 + p * 6, y0 + p * 8, p * 3, p);

  ctx.rect(x0 + p, y0 + p * 9, p * 3, p * 2);
  ctx.rect(x0 + p * 7, y0 + p * 9, p * 3, p * 2);

  ctx.rect(x0, y0 + p * 11, p * 3, p * 2);
  ctx.rect(x0 + p * 8, y0 + p * 11, p * 3, p * 2);

  ctx.rect(x0 - p, y0 + p * 13, p * 3, p * 2);
  ctx.rect(x0 + p * 9, y0 + p * 13, p * 3, p);
  ctx.rect(x0 + p * 9, y0 + p * 14, p * 5, p);

  ctx.rect(x0 - p * 2, y0 + p * 15, p * 3, p * 2);
  ctx.rect(x0 + p * 10, y0 + p * 15, p * 4, p * 2);

  ctx.fill();
}

const png = document.createElement("img");

fontLogo();
plotLogo("manual-logo-192", 192);
plotLogo("manual-logo-512", 512);
