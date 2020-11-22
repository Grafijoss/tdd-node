const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const { users } = require("./src/endpoints");
const app = express();
const port = 3000;

// vamos a usar
// https://jsonplaceholder.typicode.com/
// http://expressjs.com/en/resources/middleware/body-parser.html

// parse application/x-www-form-urlencoded
// inyecta ek request en el body
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

const usersHandlers = users({ axios });

// cada ruta tiene este handler
// handler o controller

// GET
app.get("/", usersHandlers.get);
// POST
app.post("/", usersHandlers.post);
// PUT
app.put("/:id", usersHandlers.put);
// DELETE
app.delete("/:id", usersHandlers.delete);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
