let puppeteer = require("puppeteer");
let fs = require("fs");

(async () => {
  let browser = await puppeteer.launch({ headless: true });
  let page = await browser.newPage();
  let html = fs.readFileSync("./documents/bruno-roque-cv.html", "utf8");
  await page.setContent(html, { waitUntil: "domcontentloaded" });
  await page.pdf({
    format: "A4",
    path: "./documents/bruno-roque-cv.pdf",
    printBackground: true,
  });
  await browser.close();
})();
