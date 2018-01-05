const url = require('url');
const fs = require('fs');
const { send } = require('micro');
const mime = require('mime');

// https://github.com/zeit/serve/issues/267

module.exports = (prefix = __dirname) => async (req, res) => {
  const parseUrl = url.parse(req.url);
  let file = `${prefix}${parseUrl.pathname}`;

  fs.exists(file, exist => {
    if (!exist) {
      send(res, 404);
      return;
    }

    if (fs.statSync(file).isDirectory()) {
      file += '/index.html';
    }

    fs.readFile(file, (err, data) => {
      if (err) {
        send(res, 500);
      } else {
        res.setHeader('Content-type', mime.getType(file));
        send(res, 200, data);
      }
    });
  });
};
