const {
  getDependencies,
  getMonoRepoDependencies,
} = require('../../src/packageUtils.js');

module.exports = async () => {
  const [dependencies, monorepo] = await Promise.all([
    getDependencies(),
    getMonoRepoDependencies(),
  ]);
  return { root: dependencies, monorepo };
};
