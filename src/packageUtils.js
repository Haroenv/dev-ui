const readPkgUp = require('read-pkg-up');
const getPackages = require('get-monorepo-packages');

async function readPkg() {
  const { pkg } = await readPkgUp();
  return pkg;
}

const extract = keys => pkg =>
  keys.reduce((prev, p) => {
    if (Array.isArray(p)) {
      prev[p[0]] = extract(pkg[p[0]], p[1]);
    } else if (
      pkg !== undefined &&
      pkg !== null &&
      Object.prototype.hasOwnProperty.call(pkg, p)
    ) {
      prev[p] = pkg[p];
    }
    return prev;
  }, {});

module.exports = {
  getPackage: () =>
    readPkg().then(
      extract(['name', 'scripts', 'dependencies', 'devDependencies']),
    ),
  getMonoRepoPackages: () =>
    getPackages(process.cwd())
      .map(pkg => pkg.package)
      .map(extract(['name', 'scripts', 'dependencies', 'devDependencies'])),
};
