/*jshint esversion: 6*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8888;

app.use(require('body-parser').json());
app.use(require('method-override')('_method'));

app.use('/api', require('./api'));

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});