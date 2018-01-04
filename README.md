# npm-ui

I very quickly tried to make scaffolding for a UI on top of npm/yarn, like [Sunil Pai](https://twitter.com/threepointone/status/948559739826376704) suggested.

## How to use

Right now it's not published, so it'll work in this same repository. What you can already try is:

* `yarn develop` and open localhost:3000
* `/scripts` and `/dependencies` to list those
* `/scripts/run/:name` (but it will output in the node terminal instead of the socket)
* `/dependencies/add/:name` (but it will output in the node terminal instead of the socket)
* `/dependencies/remove/:name` (but it will output in the node terminal instead of the socket)

There's no UI yet, because I was a bit confused on how to add both this server and some web app without a bunch of workarounds.

## Todo

* [ ] stream output correctly
* [x] get possible scripts (/scripts)
* [x] run script (/scripts/run/:script)
* [x] get installed dependencies (/dependencies)
* [x] install dependency
* [x] remove dependency
* [x] search for dependency (https://github.com/algolia/npm-search)
* [ ] UI
