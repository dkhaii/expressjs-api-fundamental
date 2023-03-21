const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/index.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use('/', routes);

app.listen(port, () => {
  console.log(`app listening in port ${port}`);
});
