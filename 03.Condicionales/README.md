# Condicionales

Las declaraciones condicionales se utilizan para tomar decisiones basadas en diferentes condiciones. De forma predeterminada, las declaraciones en el script de JavaScript se ejecutan secuencialmente de arriba a abajo. Si la lógica de procesamiento lo requiere, el flujo secuencial de ejecución se puede alterar de dos formas:

- Ejecución condicional: se ejecutará un bloque de una o más sentencias si cierta expresión es true
- Ejecución repetitiva: un bloque de una o más sentencias se ejecutará de forma repetitiva siempre que cierta expresión sea verdadera. En esta sección, cubriremos las declaraciones *if*, *else* y *else if*. Los operadores lógicos y de comparación que aprendimos en las secciones anteriores serán útiles aquí.

Las condiciones se pueden implementar de las siguientes maneras:

- if
- if else
- if else if else
- switch
- operador ternario

## IF :

La palabra clave *if* se usa para verificar si una condición es true y ejecutar el bloque de código. Para crear una condición if, necesitamos la palabra clave *if*, la condición va dentro de paréntesis y el bloque de código va dentro de llaves ({}).

************Sintaxis************

```jsx
if (condition) {
  //esta parte del código se ejecuta cuando es true
}
```

Ejemplo:

```jsx
let num = 3;
if (num > 0) {
  console.log(`${num} es un número positivo`); //  3 es un número positivo
}
```

## **If Else:**

Si la condición es true, se ejecutará el primer bloque, si no, se ejecutará la condición else.

************Sintaxis************

```jsx
if (condition) {
  // esta parte del código se ejecuta para la condición de verdad
} else {
  // esta parte del código se ejecuta para una condición falsa
}
```

Ejemplo:

```jsx
let num = 3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
}
//  3 es un número positivo

num = -3;
if (num > 0) {
  console.log(`${num} es un número positivo`);
} else {
  console.log(`${num} es un número negativo`);
}
//  -3 es un número negativo
```

## IF - ELSE - IF ELSE:

tomamos decisiones no comprobando una o dos condiciones, sino que tomamos decisiones basadas en múltiples condiciones. Al igual que nuestra vida diaria, la programación también está llena de condiciones. Usamos *else if* cuando tenemos múltiples condiciones.

******************Sintaxis:******************

```jsx
if (condition) {
  // código
} else if (condition) {
  // código
} else {
  //  código
}
```

Ejemplo:

```jsx
let a = 0;
if (a > 0) {
  console.log(`${a} es un número positivo`);
} else if (a < 0) {
  console.log(`${a} es un número negativo`);
} else if (a == 0) {
  console.log(`${a} es cero`);
} else {
  console.log(`${a} no es un número`);
}
```

## Switch

Switch es una alternativa para **if else if else else**. La instrucción switch comienza con una palabra clave *switch* seguida de un paréntesis y un bloque de código. Dentro del bloque de código tendremos diferentes casos. El bloque de casos se ejecuta si el valor en el paréntesis de la declaración de cambio coincide con el valor del caso. La declaración de break es para terminar la ejecución.

******************Sintaxis:******************

```jsx
switch (caseValue) {
  case 1:
    // código
    break;
  case 2:
    // código
    break;
  case 3:
    // código
    break;
  default:
  // código
}
```

Ejemplo:

```jsx
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("Necesitas un impermeable.");
    break;
  case "cloudy":
    console.log("Puede que haga frío, necesitas una chaqueta.");
    break;
  case "sunny":
    console.log("Sal tranquilo.");
    break;
  default:
    console.log("No hay necesidad de un impermeable.");
}
```

# Ejercicios

→ En proceso ← (Posible uso de node.js para realizar auto tests)