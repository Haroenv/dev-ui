# npm UI

## Some guidelines

* it should be usable in as many situations as possible
  * npm
  * yarn
  * monorepos
  * other package managers on demand
* there should not be a need for _heavy_ browser wrappers
  * keep it in a browser tab
  * something like PWA on windows, React XP or RN macOS can be considered
* everyone is welcome

## Technically

There's a node server (`/routes`) made with `micro` to get data from package.json (or multiple of them in case of a monorepo).
Other development is done frontend in a (modern) website which requests data and streams from the backend. It's made to run in modern browsers.

## Questions

[Open an issue](https://github.com/Haroenv/npm-ui/issues/new) :raised_hands:
