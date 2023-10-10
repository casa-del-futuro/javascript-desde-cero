# Variables y tipos de datos

## Conceptos básicos:

JavaScript distingue entre mayúsculas y minúsculas (es **case-sensitive**) y utiliza el conjunto de caracteres **Unicode**. Por ejemplo: la palabra «Früh» (que significa "temprano" en Alemán) se podría usar como el nombre de una variable.

```jsx
let Früh = "foobar"
```

Pero, la variable `früh`no es la misma que `Früh`porque JavaScript distingue entre mayúsculas y minúsculas.

En JavaScript, las instrucciones se denominan [declaraciones](https://developer.mozilla.org/es/docs/Glossary/Statement) y están separadas por punto y coma (;).

No es necesario un punto y coma después de una declaración si está escrita en su propia línea. Pero si se deseas más de una declaración en una línea, entonces *debes* separarlas con punto y coma.

Sin embargo, se considera una buena práctica escribir siempre un punto y coma después de una declaración, incluso cuando no sea estrictamente necesario. Esta práctica reduce las posibilidades de que se introduzcan errores en el código.

## Variables y tipos de Declaraciones

Una variable puede tener el nombre que quieras, pero por una buena practica es mejor siempre usar un nombre simbólico a su uso. esto nos ayudará a tener un orden, saber que hace ese código y también ayuda en caso que algún otro desarrollador vea el código lo pueda entender.

JavaScript tiene tres tipos de declaraciones de variables, las cuales son:

**`var`:** Declara una variable, opcionalmente la inicia a un valor.

**`let`:** Declara una variable local con ámbito de bloque, opcionalmente la inicia a un valor.

**`const`:** Declara un nombre de constante de solo lectura y ámbito de bloque.

**En caso de que no hayas notado las diferencias, aquí están:**

- Las declaraciones **`var`** tienen un ámbito global o un ámbito función/local, mientras que ***`let`*** y `**const**` tienen un ámbito de bloque.

- Las variables **`var`** pueden ser modificadas y re-declaradas dentro de su ámbito; las variables **`let`** pueden ser modificadas, pero no re-declaradas; las variables **`const`** no pueden ser modificadas ni re-declaradas.

- Todas ellas se elevan a la parte superior de su ámbito. Pero mientras que las variables **`var`** se inicializan con **`undefined`**, **`let`** y **`const`** no se inicializan.

- Mientras que **`var`** y **`let`** pueden ser declaradas sin ser inicializadas, **`const`** debe ser inicializada durante la declaración.

## Tipos de datos

Todos los tipos, excepto los objetos, definen valores inmutables (es decir, valores que no se pueden cambiar). Por ejemplo (y a diferencia de C), las cadenas son inmutables. Nos referimos a los valores de estos tipos como "*valores primitivos*".

****************************************************Tipos de datos primitivos:****************************************************

1. **Números: enteros, flotantes**
2. **Cadenas: cualquier dato entre comillas simples, comillas dobles o comillas invertidas**
3. **Booleanos: valor verdadero o falso**
4. **Nulo - valor vacío o sin valor**
5. **Indefinido - una variable declarada sin un valor**

**Tipo Numbers/Números:**

- Enteros: Números enteros (negativos, cero y positivos) Ejemplo: ... -3, -2, -1, 0, 1, 2, 3 ...
- Float: Números decimales Ejemplo ... -3.5, -2.25, -1.0, 0.0, 1.1, 2.2, 3.5

************************Tipo String/Cadena:************************

Una colección de uno o más caracteres entre comillas. **Ejemplo:** `“Hola Mundo”`

************************Tipo Boolean:************************

`Boolean` representa una entidad lógica y puede tener dos valores: `true` y `false`.

******************Tipo Undefined/Indefinido:******************

En JavaScript, si no asignamos un valor a una variable, el valor es indefinido. Además, si una función no devuelve nada, devuelve undefined.

**************Tipo Null/Nulo:**************

Null en JavaScript significa un valor vacío/nulo.

## Métodos

### **Objeto matemático**

El Objeto matemático proporciona muchos métodos con los cuales podemos trabajar con números. Estos son algunos de los más usados:

```jsx
console.log(Math.round(PI)); // 3 para redondear valores al número más cercano

console.log(Math.round(9.81)); // 10

console.log(Math.floor(PI)); // 3 redondeando hacia abajo

console.log(Math.min(-5, 3, 20, 4, 5, 10)); // -5, devuelve el valor mínimo

console.log(Math.max(-5, 3, 20, 4, 5, 10)); // 20, devuelve el valor máximo

const randNum = Math.random(); // crea un número aleatorio entre 0 y 0,999999

// Vamos a crear un número aleatorio entre 0 y 10

const num = Math.floor(Math.random() * 11); // crea un número aleatorio entre 0 y 10
console.log(num);

//Raíz cuadrada
console.log(Math.sqrt(100)); // 10

// Potencia
console.log(Math.pow(3, 2)); // 9
```

Más info de métodos math aquí: 

[Math - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math)

### Métodos de cadena

El objeto de cadena tiene muchos métodos de cadena. Existen diferentes métodos de cadenas que nos pueden ayudar a trabajar con cadenas. A continuación algunos de los métodos más utilizados

```jsx
// Creamos una variable con la cual podamos trabajar
var js = "JavaScript";

// Aquí debajo todos los metodos de cadenas
console.log(js.length) // Entrega la longitud de la cadena en este caso: 10
console.log(js.toUpperCase) // Pasa la cadena a mayúscula: JAVASCRIPT
console.log(js.toLowerCase) // Pasa la cadena a minúscula: javascript 

// .split() -> Divide una cadena en un lugar específico. 
var arg = "Mendoza, San Juan, Cordoba, La Rioja"
console.log(arg.split(", ")) // -> ["Mendoza" , "San Juan", "Cordoba", "La Rioja"]

// includes(): Toma un argumento de subcadena y verifica si existe un argumento 
// de subcadena en la cadena. includes() devuelve un valor booleano.

var string = "Casa del Futuro";

console.log(string.includes("Futuro")); // True
console.log(string.includes("futuro")); // False: ¡se distingue entre mayúsculas y minúsculas!

// charAt(): Toma índice y devuelve el valor en ese índice

console.log(string.charAt(9)) // 'F'

// indexOf(): Toma una subcadena y si la subcadena existe en una cadena, devuelve la primera posición de la subcadena; si no existe, devuelve -1

console.log(string.indexOf("F")) // 9
console.log(string.indexOf("del")) // 5
console.log(string.indexOf("Del")) // -1

```

Más info de métodos de cadenas aquí:

[String - Cadena de caracteres - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String)

# Ejercicios:

### Como descargar el repositorio →

[JavaScript-desde-cero/01.VariablesyTiposdeDatos at main · AvLeo/JavaScript-desde-cero](https://github.com/AvLeo/JavaScript-desde-cero/tree/main/01.VariablesyTiposdeDatos)

### Como correr los test →