let fs = require("fs");
let puppeteer = require("puppeteer");

function shouldBuildCv(files) {
  return files.includes("documents/bruno-roque-cv.html");
}

async function buildCv() {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  let html = fs.readFileSync("./documents/bruno-roque-cv.html", "utf8");
  await page.setContent(html, { waitUntil: "domcontentloaded" });

  if (!fs.existsSync("./dist")) {
    fs.mkdirSync("./dist");
  }

  await page.pdf({
    format: "A4",
    path: "./dist/bruno-roque-cv.pdf",
    printBackground: true,
  });
  await browser.close();
}

module.exports = {
  shouldBuildCv,
  buildCv,
};
