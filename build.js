let fs = require("fs");

(async () => {
  let dist = "dist";
  let files = ["index.html", "favicon.svg", "bruno-roque-resume.pdf"];

  fs.rmSync(dist, { force: true, recursive: true });
  fs.mkdirSync(dist);

  for (let f of files) fs.copyFileSync(f, `${dist}/${f}`);
})();
