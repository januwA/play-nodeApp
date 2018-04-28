const http = require('http');
const url = require('url');
const {
  parse
} = require('querystring')
const PORT = 8888;

function run(handle, route) {

  const serverContent = (req, res) => {
    // res.writeHead(200, {
    //   "Content-Type": 'text/html; charset=utf8'
    // });

    
    const pathname = url.parse(req.url).pathname;
    const query = url.parse(req.url, true).query;

    // const method = Object.is(typeof req.method, 'string') ? req.method.toUpperCase() : req.method;
    // let body = '';
    // if (Object.is(pathname, 'POST')) {
    //   req.on('data', chunk => body += chunk);
    //   req.on('end', () => route(handle, pathname, res, parse(body)))
    // } else {
    // }

    route(handle, pathname, req, res)

    // res.write( route(handle, pathname) + '<br />');
    // res.write(`你访问的参数是：${JSON.stringify(query)}`);
    // res.end();
  }

  http.createServer(serverContent).listen(PORT, res => {
    console.log(`server start port=${PORT}`);
  });

}

exports.run = run;