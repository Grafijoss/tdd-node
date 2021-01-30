const postHandlers = require("./index");
describe("Endpoinmts", () => {
  describe("posts", () => {
    // it.skip salta este test
    // it.only solo ejecuta este test
    it("should create", async () => {
      const mosckUsers = [
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
        status: jest.fn(),
        send: jest.fn(),
      };
      const axios = {
        get: jest.fn().mockResolvedValue({
          data: mosckUsers,
        }),
        post: jest.fn().mockResolvedValue({
          data: { id: 1000 },
        }),
      };
      // camos a testear que el id del usuario existe
      // vamos a testear que el id es 1
      await postHandlers({ axios }).post(req, res);

      expect(res.status.mock.calls).toEqual([[201]]);

      expect(res.send.mocks.calls).toEqual([[{ id: 1000 }]]);

      expect(axios.get.mock.calls).toEqual([
        ["https://jsonplaceholder.typicode.com/users"],
      ]);

      expect(axios.post.mock.call).toEqual([
        ["https://jsonplaceholder.typicode.com/posts", post],
      ]);
    });
  });
});
