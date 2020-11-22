// con inyeccion de dependencias
// handlers no es un objeto si no una funcion
// axios viene inyecyado como un parametro
// axios estara disponible para todo el objeto

const handlesrs = ({ axios }) => ({
  get: async (req, res) => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    // 200 OK
    res.status(200).send(data);
  },
  post: async (req, res) => {
    const { body } = req;
    const { data } = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      body
    );
    // res.sendStatus(200);
    // en req.body se encuentra toda la info
    // 201 creado
    res.status(200).send(data);
  },
  put: async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    console.log(body);
    await axios
      .put(`https://jsonplaceholder.typicode.com/users${id}`, body)
      .catch(() => {});
    // 204 sin contenido
    // res.status(204).send(data);
    res.sendStatus(204);
  },
  delete: async (req, res) => {
    const { id } = req.params;
    await axios
      .delete(`https://jsonplaceholder.typicode.com/users${id}`)
      .catch(() => {});

    // 204 sin contenido
    res.sendStatus(204);
  },
});

// ESTA ES LA FIORMA NORMAL DE USARSE
// const axios = require("axios");

// const handlesrs = {
//   get: async (req, res) => {
//     const { data } = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     // 200 OK
//     res.status(200).send(data);
//   },
//   post: () => {},
//   put: () => {},
//   delete: () => {},
// };

module.exports = handlesrs;
