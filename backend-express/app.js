const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

// require('./routes/')(app, {});

// server.js
const port = 8000;
app.listen(port, () => {
  console.log('We are live on ' + port);
});