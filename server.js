const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { posts } = require("./src/endpoints");
const { authenticate } = require("./src/middlewares");
const app = express();
const port = 3000;

// vamos a usar
// https://jsonplaceholder.typicode.com/
// http://expressjs.com/en/resources/middleware/body-parser.html

// parse application/x-www-form-urlencoded
// inyecta el request en el body
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// inyección de dependencias
// le pasamos los servicios
// es una fora elegante de decir que vamos a pasar un argumento
// vamos a inyectar axios a users
// vamos a ejecutar a users
// dentro de un objeto le pasamos axios a users
// asi no tenemos que hacer un require de las dependencias

// de esta forma podemos cuando hagamos pruebas
// vamos ainyectar axios y no tenemos que hacer un llamado real

const postsHandlers = posts({ axios });

// cada ruta tiene este handler
// handler o controller

// POST
// vamos a necesitar un middleware
// que se encargue de verificar que es para administradores (authenticate)
// authenticate tmbien va a recibir un objeto de request
// va a recibir un objeto de response
// va a recibir como tercer argumento una funcion
// cuando ejecutemos la funcion se ejecutara el siguiente middleware (postsHandlers.post)

app.post("/", authenticate, postsHandlers.post);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
