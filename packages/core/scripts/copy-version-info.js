const fs = require('fs');
const path = require('path');
const packageJson = require('../package.json');



const changelog = fs.readFileSync(path.resolve(__dirname, '../CHANGELOG.md'), 'utf8');

const changelogUpdated = changelog.slice(changelog.indexOf(""))

const versionInfo = {
  currentVersion: packageJson.version,
  releaseDate: new Date().toISOString(),
  changelog: changelog
};

const outputDir = path.resolve(__dirname, '../../docs/static');
// if (!fs.existsSync(outputDir)) {
//   fs.mkdirSync(outputDir, { recursive: true });
// }

fs.writeFileSync(
  path.resolve(outputDir, 'version-info.json'), 
  JSON.stringify(versionInfo, null, 2)
);
