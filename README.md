# TESTS UNITARIOS

Spy, stub y mock (sinon)

## Mock
Es una funcion a la que podemos consultarlecuantas veces se llamo y con que argumentos se llamo (un espia es para sabber como fue llamada esta funcion)

## stub
Es lo mimo que el spy pero podemos definir el comportamiento que queremos que tenga

## mock
Implementa los dos anteriores pero antes de ejecutar la funcion yo le puedo decir que quiero que el mock se ejecute de esta manera

## patron modulo
La lógica la vamos a llevar a un modulo

## inyección de dependencias
Vamos a inyectarle un mock a la libreria de axios (es una frase bonita para decirle a una funcion que le voy a pasar un argumento)

Por medio de inyección de dependencias podemos insertar servicios como axios

# TESTS DE INTEGRACIÓN

Vamos a llamar al API o URL

Esperamos que nos devuelva datos acorde


## scripts

Creamos el script en el package.json

```js
	"scripts": {
		"test": "jest"
	}
```

Lo corremos con:

```bash
yarn test
```

Escuchamos los cambios con:

```bash
yarn test --watchAll
yarn test --watchAll
```

Escuchamos los cambios en un solo archivo:

```bash
yarn test --watch - src\endpoints\users\index.spec.js
```






Use the package manager [pip](https://pip.pypa.io/en/stable/) to install foobar.

```bash
pip install foobar
```

## Usage

```python
import foobar

foobar.pluralize('word') # returns 'words'
foobar.pluralize('goose') # returns 'geese'
foobar.singularize('phenomena') # returns 'phenomenon'
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)