const request = require("supertest");
const app = require("../../../server");

describe("Server", () => {
  describe("Endpoints", () => {
    describe("Post POST", () => {
      it("creates a new post", async () => {
        // le pasamos la aplicación de express la cual queremos testear
        // la respuesta que va a devolver app
        const response = await request(app)
          // vamos a hacer un post
          .post("/")
          // le indicamos que datos vamos a enviar
          .send({ userId: 5 })
          // decoradores, cabeceras o headers
          .set("user_id", 1)
          .set("Content-Type", "application/json");
        // console.log(response);
        expect(response.statusCode).toEqual(201);
        expect(response.body.userId).toEqual(5);
        expect(response.body).toHaveProperty("id");
      });
      it("does not creates a new post", async () => {
        // le pasamos la aplicación de express la cual queremos testear
        // la respuesta que va a devolver app
        const response = await request(app)
          // vamos a hacer un post
          .post("/")
          // le indicamos que datos vamos a enviar
          .send({ userId: 100 })
          // decoradores, cabeceras o headers
          .set("user_id", 1)
          .set("Content-Type", "application/json");
        // console.log(response);
        expect(response.statusCode).toEqual(400);
      });
    });
  });
});
