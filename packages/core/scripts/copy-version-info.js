const fs = require("fs");
const path = require("path");
const packageJson = require("../package.json");

// Grab changelog
const changelog = fs.readFileSync(
  path.resolve(__dirname, "../CHANGELOG.md"),
  "utf8"
);

//Create version obj (take out changelog header)
const versionInfo = {
  currentVersion: packageJson.version,
  releaseDate: new Date().toISOString(),
  changelog: changelog.slice(13),
};

const outputDir = path.resolve(__dirname, "../../docs/static");
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(
  path.resolve(outputDir, "version-info.json"),
  JSON.stringify(versionInfo, null, 2)
);
