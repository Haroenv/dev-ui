const { send } = require('micro');
const { getMonoRepoPackages } = require('../../../src/packageUtils.js');

module.exports = async (req, res) => {
  const { params: { package: packageName } } = req;
  const all = await getMonoRepoPackages();
  const pkg = all.find(({ name }) => name === packageName);
  pkg ? send(res, 200, pkg) : send(res, 404, { error: 'package not found' });
};

module.exports.path = '/packages/monorepo/:package';
