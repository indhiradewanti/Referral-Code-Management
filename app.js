const express = require('express');
const app = express();
const port = 3000;

const route = require('./routes');

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));

app.use(route);

app.listen(port, (err, res) => {
  console.log(`Listening to port: ${port}`);
})