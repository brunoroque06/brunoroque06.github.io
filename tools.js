let fs = require("fs");
let puppeteer = require("puppeteer");
let sharp = require("sharp");

const docs = "dist/docs";
const imgs = "dist/imgs";

function setup() {
  [docs, imgs].forEach(dir => {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
  });
}

function shouldBuildCv(files) {
  return files.includes("docs/bruno-roque-cv.html");
}

async function buildCv() {
  setup();

  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  let html = fs.readFileSync("docs/bruno-roque-cv.html", "utf8");
  await page.setContent(html, { waitUntil: "domcontentloaded" });

  await page.pdf({
    format: "A4",
    path: docs + "/bruno-roque-cv.pdf",
    printBackground: true
  });
  await browser.close();
}

async function buildFavicons() {
  setup();

  let svg = sharp("imgs/logo.svg");

  await svg
    .resize(192)
    .png()
    .toFile(imgs + "/favicon-192.png");

  for (const s of [180, 192, 512]) {
    await svg
      .resize(s)
      .flatten({ background: { r: 255, g: 255, b: 255 } })
      .png()
      .toFile(imgs + "/favicon-" + s + "-bg.png");
  }
}

function pass() {
  let p = {};
  p[docs] = "docs";
  p[imgs] = "imgs";
  return p;
}

module.exports = {
  shouldBuildCv,
  buildCv,
  buildFavicons,
  pass
};
