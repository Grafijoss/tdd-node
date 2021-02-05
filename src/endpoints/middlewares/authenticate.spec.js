const authenticate = require("./authenticate");

describe("Middlewares", () => {
  describe("authenticate", () => {
    // it.skip salta este test
    // it.only solo ejecuta este test
    it("should have id 1", () => {
      // implementamos el objeto request solo con el metodo header
      // el caso exitodo es que responda con 1
      const req = {
        header: jest.fn().mockReturnValue(1),
      };
      // implementamos el objeto response con el metodo senEstatus
      // senStatus es un espia
      const res = {
        sendStatus: jest.fn(),
      };
      // implementamos el espia de next
      const next = jest.fn();

      authenticate(req, res, next);

      // verificamos que headers se llamo y con qu e valor se llamo
      expect(req.header.mock.calls).toEqual([["user_id"]]);
      // no quiero que se llame send status continua con el siguiente middlware
      expect(res.sendStatus.mock.calls).toEqual([]);
      // se llama una vez sin con un arreglo sin ningun argumento
      expect(next.mock.calls).toEqual([[]]);
    });

    it("it shouls fail if user is not the one with id 1", () => {
      const req = {
        header: jest.fn().mockReturnValue(2),
      };
      const res = {
        sendStatus: jest.fn(),
      };
      const next = jest.fn();
      authenticate(req, res, next);

      // verificamos que headers se llamo y con qu e valor se llamo
      expect(req.header.mock.calls).toEqual([["user_id"]]);
      // lo llamamos con codigo 403
      expect(res.sendStatus.mock.calls).toEqual([[403]]);
      // no debe ser llamado
      expect(next.mock.calls).toEqual([]);
    });
  });
});
