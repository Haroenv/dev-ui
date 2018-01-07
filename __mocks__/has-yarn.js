let hasYarn = false;

module.exports = () => hasYarn;
module.exports.__setHasYarn = value => (hasYarn = !!value);
