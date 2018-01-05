const {
  getPackage,
  getMonoRepoPackages,
} = require('../../src/packageUtils.js');

module.exports = async () => {
  const [root, monorepo] = await Promise.all([
    getPackage(),
    getMonoRepoPackages(),
  ]);
  return {
    root,
    monorepo: monorepo.map(pkg => pkg.name),
  };
};
