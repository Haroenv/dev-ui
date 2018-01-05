const { send } = require('micro');
const { getMonoRepoPackages } = require('../../../src/packageUtils.js');

module.exports = async (req, res) => {
  const { params: { package: packageName } } = req;
  const all = await getMonoRepoPackages();
  const pkg = all.find(({ name }) => name === packageName);
  send(res, 200, pkg);
};

module.exports.path = '/packages/monorepo/:package';
