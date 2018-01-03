const readPkgUp = require('read-pkg-up');

async function extract(keys) {
  const {pkg} = await readPkgUp();

  return keys.reduce((prev, p) => {
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
}

module.exports = {
  getScripts: () => extract(['scripts']),
  getDependencies: () => extract(['dependencies', 'devDependencies']),
  getComplete: () => readPkgUp().then(p => p.pkg),
};
