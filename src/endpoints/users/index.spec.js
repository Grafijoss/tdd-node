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

// va a resolver una promnesa
// con un valor particular que le vamos a entragar
// mockReturnValue: [Function],

// mockResolvedValue: [Function],
// mockRejectedValue: [Function],
// mockImplementationOnce: [Function],
// mockImplementation: [Function],

// retorna el objeto que estamos llamando
// mockReturnThis: [Function],

// mockName: [Function],
// getMockName: [Function]
