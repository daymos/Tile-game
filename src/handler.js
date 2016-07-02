const fs = require('fs');

function handler(req, res) {
  const url = req.url;
  if (url === '/') {
    fs.readFile(`${__dirname}/../public/index.html`, (err, data) => {
      res.writeHead(200, { 'Content-type': 'text/html' });
      res.end(data);
    });
  } else if (url.includes('public')) {
    const ext = url.split('.')[1];
    fs.readFile(`${__dirname}/..${url}`, (err, data) => {
      res.writeHead(200, { 'Content-type': `text/${ext}` });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('<h1>404 -- Page requested cannot be found</h1>');
  }
}

module.exports = handler;
