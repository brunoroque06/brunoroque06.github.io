let { shouldBuildCv, buildCv } = require("./util.js");
let sass = require("sass");

module.exports = function (config) {
  config.on("eleventy.before", async () => {
    await buildCv();
  });

  config.on("eleventy.beforeWatch", async (files) => {
    if (shouldBuildCv(files)) {
      await buildCv();
    }
  });

  config.addFilter("scss2css", function (content) {
    return sass.compileString(content, {
      sourceMap: false,
      style: "compressed",
    }).css;
  });

  config.addPassthroughCopy("documents");
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("manifest.json");
  config.addPassthroughCopy("service-worker.js");

  config.addPassthroughCopy({ dist: "documents" });

  return {};
};
