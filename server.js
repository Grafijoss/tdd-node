const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
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

app.get("/", async (req, res) => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  // 200 OK
  res.status(200).send(data);
});

// POST
app.post("/", async (req, res) => {
  const { body } = req;
  const { data } = await axios.post(
    "https://jsonplaceholder.typicode.com/users",
    body
  );
  // res.sendStatus(200);
  // en req.body se encuentra toda la info
  // 201 creado
  res.status(200).send(data);
});

// PUT
app.put("/:id", async (req, res) => {
  const { body } = req;
  const { id } = req.params;
  console.log(body);
  await axios
    .put(`https://jsonplaceholder.typicode.com/users${id}`, body)
    .catch(() => {});
  // 204 sin contenido
  // res.status(204).send(data);
  res.sendStatus(204);
});

// DELETE
app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await axios
    .delete(`https://jsonplaceholder.typicode.com/users${id}`)
    .catch(() => {});

  // 204 sin contenido
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
