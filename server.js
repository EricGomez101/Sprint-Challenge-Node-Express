const express = require('express');
const server = express();
const port = 5000;
const cors = require('cors');
const helmet = require('helmet');

const actionRoute = require('./RouteHandler/actionRoute');
const projectRoute = require('./RouteHandler/projectRoute');

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/projects', projectRoute);

server.use('/api/actions', actionRoute);

server.listen(port, () => {
  console.dir(`server now listening on port ${port}`);
})
