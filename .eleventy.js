let tools = require("./tools.js");
let sass = require("sass");

module.exports = function(config) {
  config.on("eleventy.before", async () => {
    await tools.buildCv();
    await tools.buildFavicons();
  });

  config.on("eleventy.beforeWatch", async (files) => {
    if (tools.shouldBuildCv(files)) {
      await tools.buildCv();
    }
  });

  config.addFilter("scss2css", function(content) {
    return sass.compileString(content, {
      sourceMap: false,
      style: "compressed"
    }).css;
  });

  config.addPassthroughCopy("docs");
  config.addPassthroughCopy("imgs");
  config.addPassthroughCopy("manifest.json");
  config.addPassthroughCopy("service-worker.js");

  config.addPassthroughCopy(tools.pass());

  return {};
};
