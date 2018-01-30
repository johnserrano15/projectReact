'use strict'

const express = require('express');
const hbs = require('express-handlebars');
const app = express();
require('dotenv').config();

app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}));

app.set('view engine', '.hbs');

app.use(express.static('dist'));// Files css, js etc

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`La app esta corriendo en el puerto -> ${PORT}`)
  // console.log(`Api Rest corriendo en http://localhost:${port}`)
});
