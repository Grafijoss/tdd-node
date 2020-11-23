const handlers = require("./index");

describe("Enpoints", () => {
  describe("Users", () => {
    describe("get", () => {
      it("return to user json", async () => {
        // creamos un mock de axios
        // jest es una variable global
        // le podemos indicar que dependiendo
        // el metodo al cual este llamando
        // quiero que retorne una promesa
        const axios = {
          // Útil para simular funciones asíncronas
          // en pruebas asíncronas
          get: jest.fn().mockReturnValue({ data: 1 }),
        };
        // creamos el mosck de res
        const res = {
          // retorna el objeto que estamos llamando
          // el objeto es get
          status: jest.fn().mockReturnThis(),
          // solo queremos espiarlo
          // no vamos a hacer nada con send
          send: jest.fn(),
        };

        // le pasamos un objeto vacio
        // por que  no estamos usando req
        // get: async (req, res)
        // podrimos pasar undefined
        // res seria la respuesta de axios
        await handlers({ axios }).get({}, res);

        // podemos ver con que valorees se llamo
        // calls es un arreglo
        // con los argumentos que se llamo la funcion
        // tenemos que esperar que se resuelva la promesa
        // deberia retornar el status de get
        // res.status(200).send(data);
        // status es de  expres
        // solo recibe un argumento
        // console.log(res.status.mock.calls);

        expect(res.status.mock.calls).toEqual([[200]]);
        expect(res.send.mock.calls).toEqual([[1]]);
      });
    });

    describe("post", () => {
      it("creates a resource", async () => {
        // creamos el mosck para post
        // con mockResolveValue
        const axios = {
          post: jest.fn().mockResolvedValue({ data: 1 }),
        };
        const res = {
          status: jest.fn().mockReturnThis(),
          send: jest.fn(),
        };

        const req = {
          body: "request body",
        };

        await handlers({ axios }).post(req, res);

        // 201 creado
        expect(res.status.mock.calls).toEqual([[201]]);
        expect(res.send.mock.calls).toEqual([[1]]);
        expect(axios.post.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users", "request body"],
        ]);
      });
    });

    describe("put", () => {
      it("updates resource", async () => {
        // creamos el mosck para put
        // con mockResolveValue
        const axios = {
          put: jest.fn().mockResolvedValue({ data: 1 }),
        };
        const req = {
          body: "request body",
          params: {
            id: 12,
          },
        };
        const res = {
          // no devuelve nada
          // dejamos solo jest.fn()
          sendStatus: jest.fn(),
        };

        await handlers({ axios }).put(req, res);

        // en los expect no debemos usar variables
        // usamos strings o numeros
        expect(axios.put.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/12", "request body"],
        ]);
        // 204 sin contenido
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });

    describe("delete", () => {
      it("updates delete", async () => {
        // creamos el mosck para delete
        // con mockResolveValue
        const axios = {
          delete: jest.fn().mockResolvedValue({ data: 1 }),
        };
        const req = {
          params: {
            id: 54,
          },
        };
        const res = {
          // no devuelve nada
          // dejamos solo jest.fn()
          sendStatus: jest.fn(),
        };

        await handlers({ axios }).delete(req, res);

        // en los expect no debemos usar variables
        // usamos strings o numeros
        expect(axios.delete.mock.calls).toEqual([
          ["https://jsonplaceholder.typicode.com/users/54"],
        ]);
        // 204 sin contenido
        expect(res.sendStatus.mock.calls).toEqual([[204]]);
      });
    });
  });
});

// metodos jest fn()
// getMockImplementation: [Function],
// mock: [Getter/Setter],
// mockClear: [Function],
// mockReset: [Function],
// mockRestore: [Function],
// mockReturnValueOnce: [Function],
// mockResolvedValueOnce: [Function],
// mockRejectedValueOnce: [Function],

// va a resolver una promesa
// con un valor particular que le vamos a entregar
// no es bnecesario que sea asuncrono
// mockReturnValue: [Function],

// va a resolver una promesa
// con un valor particular que le vamos a entragar
// Útil para simular funciones asíncronas
// en pruebas asíncronas
// mockResolvedValue: [Function],

// mockRejectedValue: [Function],
// mockImplementationOnce: [Function],
// mockImplementation: [Function],

// retorna el objeto que estamos llamando
// mockReturnThis: [Function],

// mockName: [Function],
// getMockName: [Function]
