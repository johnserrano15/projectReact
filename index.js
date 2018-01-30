'use strict'
// Example -> https://github.com/babel/example-node-server
import express from 'express';
import path from 'path';
import engine from 'react-engine';
const app = express();
require('dotenv').config();

/* Mas info de la config https://medium.com/@sergiodxa/renderizando-react-js-en-el-server-con-express-js-y-react-engine-903de08c3df6 
  CON REACT-ROUTER
*/
// definimos el engine para archivos jsx
app.engine('.jsx', engine.server.create());
// configuramos la ruta a las vistas
app.set('views', path.resolve(__dirname, 'views'));
// indicamos que el engine a usar es el de archivos jsx
app.set('view engine', 'jsx');
// le indicamos que use react-engine como engine de nuestras vistas
app.set('view', engine.expressView);

app.use(express.static('dist'));// Files css, js etc

app.get('/', (req, res) => {
  res.render('home');
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`La app esta corriendo en el puerto -> ${PORT}`)
  // console.log(`Api Rest corriendo en http://localhost:${port}`)
});
