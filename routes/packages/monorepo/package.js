const { getMonoRepoPackages } = require('../../../src/packageUtils.js');

module.exports = async req => {
  const { params: { package: packageName } } = req;
  const all = await getMonoRepoPackages();
  return all.find(name => name === packageName);
};

module.exports.path = '/packages/monrepo/:package';
