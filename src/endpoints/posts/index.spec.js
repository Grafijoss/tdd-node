const postHandlers = require("./index");
describe("Endpoinmts", () => {
  describe("posts", () => {
    // it.skip salta este test
    // it.only solo ejecuta este test
    it("should create", async () => {
      const mockUsers = [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];
      const post = {
        userId: 1,
        id: 1,
        title: "titulo",
        body: "cuerpo del post",
      };

      const req = {
        body: post,
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };
      // mockReturnThis return this = res
      const axios = {
        get: jest.fn().mockResolvedValue({
          data: mockUsers,
        }),
        post: jest.fn().mockResolvedValue({
          data: { id: 1000 },
        }),
      };
      // camos a testear que el id del usuario existe
      // vamos a testear que el id es 1
      await postHandlers({ axios }).post(req, res);

      expect(res.status.mock.calls).toEqual([[201]]);

      expect(res.send.mock.calls).toEqual([[{ id: 1000 }]]);

      expect(axios.get.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/users"],
      ]);

      expect(axios.post.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/posts", post],
      ]);
    });

    it("should not create if userId does not exist", async () => {
      const mockUsers = [
        {
          id: 1,
        },
        {
          id: 2,
        },
      ];
      // vamos a enviar un id que no existe en el listado de users
      const post = {
        userId: 3,
        id: 1,
        title: "titulo",
        body: "cuerpo del post",
      };

      const req = {
        body: post,
      };

      const res = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
        // no va a reornar send solo un status de error
        sendStatus: jest.fn(),
      };
      // mockReturnThis return this = res
      const axios = {
        get: jest.fn().mockResolvedValue({
          data: mockUsers,
        }),
        post: jest.fn().mockResolvedValue({
          data: { id: 1000 },
        }),
      };

      await postHandlers({ axios }).post(req, res);
      // quiere decir que no se ha llamado
      expect(axios.post.mock.calls).toEqual([]);
      // res va a retornar un error generico 500
      expect(res.sendStatus.mock.calls).toEqual([[500]]);
    });
  });
});
