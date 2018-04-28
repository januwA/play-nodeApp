function route(handel, pathname, req, res) {

  if (Object.is(typeof handel[pathname], 'function')) {
    handel[pathname](req, res);
  } else {
    res.writeHead(404, {
      "Content-Type": 'text/html; charset=utf8'
    });
    const htmlPage = `
      <h2>page not found 404.</h2>
    `;
    res.write(htmlPage)
  }
}

exports.route = route;