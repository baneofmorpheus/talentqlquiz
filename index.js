const express = require('express');
const app = express();
const routes = require('./routes');

const bodyParser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api', routes);

app.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});
process.on('uncaughtException', (err) => {
  console.log(`Uncaught Exception: ${err.message}`);
  // process.exit(1);
  process.kill(process.pid, 'SIGTERM');
});
