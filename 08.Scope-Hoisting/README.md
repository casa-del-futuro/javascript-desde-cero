# Scope

El *scope* en JavaScript se refiere al alcance o ámbito de visibilidad de una variable dentro de un programa. Define las partes del programa donde la variable es accesible y se puede utilizar. En JavaScript, existen dos tipos principales de scope: scope global y scope local.

El *`scope`* global se refiere al ámbito que abarca todo el programa. Las variables declaradas fuera de cualquier función tienen un alcance global y se pueden acceder desde cualquier parte del programa.

Por otro lado, el *`scope`* local se refiere al ámbito de una variable dentro de una función. Las variables declaradas dentro de una función solo son accesibles dentro de esa función y no pueden ser accedidas desde fuera.

Un ejemplo práctico para entender el concepto de scope:

```jsx
// Scope global
var globalVariable = 'Soy global';

function myFunction() {
  // Scope local
  var localVariable = 'Soy local';
  console.log(localVariable);  // Imprime 'Soy local'
  console.log(globalVariable); // Imprime 'Soy global'
}

console.log(localVariable);    // Error: localVariable is not defined
console.log(globalVariable);   // Imprime 'Soy global'

myFunction();

```
En este ejemplo, globalVariable es una variable *global* que se puede acceder tanto dentro como fuera de la función myFunction. Por otro lado, localVariable es una variable *local* y solo puede ser accedida dentro de myFunction.


# Hoisting

Ahora, hablemos sobre *`hoisting`* en JavaScript. El `hoisting` es un comportamiento en JavaScript donde las declaraciones de variables y funciones se mueven al inicio de su scope antes de que se ejecute el código. Esto significa que puedes utilizar variables y funciones antes de declararlas explícitamente en el código.

Aquí tienes un ejemplo práctico para entender el concepto de `hoisting`:

```jsx
function myFunction() {
  console.log(myVariable); // Imprime 'undefined'
  var myVariable = 'Hola';
  console.log(myVariable); // Imprime 'Hola'
}

myFunction();

```
En este ejemplo, la variable myVariable se declara y se inicializa después de que se haya intentado acceder a ella dentro de myFunction. A pesar de esto, no se produce un error y se imprime *`'undefined'`* en la primera línea de console.log. Esto se debe al hoisting, que mueve la declaración de myVariable al principio de la función, pero no la inicialización.

Espero que estos conceptos y ejemplos te ayuden a comprender mejor el scope y el hoisting en JavaScript. Si tienes alguna otra pregunta, ¡no dudes en preguntar!


# *`Hora de la practica de conceptos`*
 
 
### *`Alcance de variables`*

```jsx
var globalVariable = 'Soy global';

function myFunction() {
  var localVariable = 'Soy local';
  console.log(localVariable);  // ¿Qué imprime? ¿Por qué?
  console.log(globalVariable); // ¿Qué imprime? ¿Por qué?
}

console.log(localVariable);    // ¿Qué imprime? ¿Por qué?
console.log(globalVariable);   // ¿Qué imprime? ¿Por qué?

myFunction();
```

```jsx

// Respuesta

```

### *`Hoisting de variables`*

```jsx
function myFunction() {
  console.log(myVariable); // ¿Qué imprime? ¿Por qué?
  var myVariable = 'Hola';
  console.log(myVariable); // ¿Qué imprime? ¿Por qué?
}

myFunction();
```

```jsx

// Respuesta

```

### *`Hoisting de funciones`*

```jsx
myFunction(); // ¿Qué sucede al llamar a la función antes de su declaración?

function myFunction() {
  console.log('Hola desde myFunction');
}
```

```jsx

// Respuesta

```

### *`Anidamiento de funciones y scope`*

*`CASO 1:`*

```jsx
function outerFunction() {
  var outerVariable = 'Exterior';

  function innerFunction() {
    var innerVariable = 'Interior';
    console.log(outerVariable); // ¿Qué imprime? ¿Por qué?
    console.log(innerVariable); // ¿Qué imprime? ¿Por qué?
  }

  innerFunction();
}

outerFunction();
```
*`CASO 2:`*


```jsx
function outerFunction() {
  var outerVariable = 'Exterior';

  function innerFunction() {
    var innerVariable = 'Interior';
    console.log(outerVariable); // ¿Qué imprime? ¿Por qué?
    console.log(innerVariable); // ¿Qué imprime? ¿Por qué?
  }

}

innerFunction();
outerFunction();
```

```jsx

// Respuesta CASO 1:

// Respuesta CASO 2:

```