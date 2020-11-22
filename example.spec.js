// DESCRIBE
// describe recibe dos argumentos
// que es lo que va a testear es un string
// el segundo argumento es una funcion
// esta funcion se va a ejecutar
// puede contener mas describes
// tambien puede contener los test

describe("Prueba", () => {
  describe("suma", () => {
    // DESCRIBE
    // describe recibe dos argumentos
    // que es lo que va a testear es un string
    // el segundo argumento es una funcion
    it("suma 2 numeros", () => {
      const suma = (a, b) => a + b;
      // tambien podemos usar la palabra expect
      // EXPECT
      // va a tomar el valor del primer argumento
      // no entrega una combinación de metodos
      // los metodos pueden ser encadenados
      // toEqual
      // verifica el valor recibido
      // el valor corresponde con lo que esperamos

      expect(suma(1, 2)).toEqual(3);
    });
  });
});
