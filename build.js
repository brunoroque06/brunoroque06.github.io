let fs = require("fs");
let sharp = require("sharp");

(async () => {
  const fav = "favicon.png";

  async function buildFavicons() {
    let svg = sharp("logo.svg");
    await svg.resize(192).png().toFile(fav);
  }

  await buildFavicons();

  let dist = "dist";
  let files = ["index.html", fav, "bruno-roque-resume.pdf"];

  fs.rmSync(dist, { force: true, recursive: true });
  fs.mkdirSync(dist);

  for (let f of files) fs.copyFileSync(f, `${dist}/${f}`);
})();
