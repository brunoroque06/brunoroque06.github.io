module.exports = function (config) {
  config.addPassthroughCopy("documents");
  config.addPassthroughCopy("images");
  config.addPassthroughCopy("manifest.json");
  config.addPassthroughCopy("service-worker.js");

  return {};
};
