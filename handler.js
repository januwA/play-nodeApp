const {
  parse
} = require('querystring')

function Home(req, res) {
  res.writeHead(200, {
    "Content-Type": 'text/html; charset=utf8'
  });

  const htmlPage = `
    <h3>hello welcome Home.</h3>
  `;

  res.write(htmlPage)
  res.end();
}

function Users(req, res) {
  res.writeHead(200, {
    "Content-Type": 'text/html; charset=utf8'
  });
  const htmlPage = `
    <h2>users table</h2>
    <ul>
      <li>1: ajanuw</li>
      <li>2: boo</li>
      <li>3: coo</li>
    </ul>
  `;
  res.write(htmlPage)
  res.end();
}

function Add(req, res) {
  res.writeHead(200, {
    "Content-Type": 'text/html; charset=utf8'
  });
  const htmlPage = `
    <form action="/addUser" method="POST">
    <input type="text" name='username' placeholder='add username'/>
    <input type="submit" value='添加'/>
    </form>
  `;
  res.write(htmlPage)
  res.end();
}

function AddUser(req, res) {
  res.writeHead(200, {
    "Content-Type": 'text/html; charset=utf8'
  });
  const method = Object.is(typeof req.method, 'string') ? req.method.toUpperCase() : req.method;
  let body = '';
  if (Object.is(method, 'POST')) {
    req.on('data', chunk => body += chunk);

    req.on('end', () => {
      body = parse(body);
      const {
        username
      } = body;

      const resBody = `
      添加username: ${ username }, OK.
      `;

      res.write(resBody);
      res.end();
    })
  }

}

module.exports = {
  Home: Home,
  Users: Users,
  Add: Add,
  AddUser: AddUser
}