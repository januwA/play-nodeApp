const server = require('./server');
const router = require('./router');
const {
  Home,
  Users,
  Add,
  AddUser
} = require('./handler')
const handle = {};


handle['/'] = Home;
handle['/home'] = Home;
handle['/users'] = Users;
handle['/add'] = Add;
handle['/addUser'] = AddUser;

server.run(handle, router.route);