const bodyParser = require('body-parser');
const express = require('express');
const allowCors = require('./cors');
const queryParser = require('express-query-int');
const consign = require('consign');
require('./mongoose');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(allowCors);
app.use(queryParser());

app.env = require('./.env');

consign({cwd: 'app'})
  .include('database')
  .then('modelo')
  .then('api')
  .then('rota')
  .into(app);


app.listen(port, function() {
  console.log(`BACKEND is running on port ${port}.`);
})

module.exports = app;
