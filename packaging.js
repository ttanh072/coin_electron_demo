const packager = require('@electron/packager');
const { rebuild } = require('@electron/rebuild');

packager({
  dir: __dirname,
  platform: ["darwin"],
  icon: "assets/icons/icon.icns",
  prune: true,
  ignore: "\.git(ignore|modules)|out|assets",
  overwrite: true,
  out: "out",
  afterCopy: [(buildPath, electronVersion, platform, arch, callback) => {
    rebuild({ buildPath, electronVersion, arch })
      .then(() => callback())
      .catch((error) => callback(error));
  }],
});