# Operadores

# Operadores

## Operadores de Comparación y Lógicos:

En programación comparamos valores, usamos operadores de comparación para comparar dos valores. Comprobamos si un valor es mayor, menor o igual a otro valor.

![operadores-logicos-javascrippt.png](img/operadores-logicos-javascrippt.png)

### Ejemplos de operadores de comparación:

```jsx
console.log(3 > 2); // true, porque 3 es mayor que 2
console.log(3 >= 2); // true, porque 3 es mayor que 2
console.log(3 < 2); // false,  porque 3 es mayor que 2
console.log(2 <= 3); // true, porque 2 es menor que 3
console.log(3 == 2); // false, porque 3 no es igual a 2
console.log(3 != 2); // true, porque 3 no es igual a 2
console.log(3 == "3"); // true, compara solamente el valor
console.log(3 === "3"); // false, compara tanto el valor como el tipo de dato

// con strings

console.log("mango".length == "avocado".length); // false
console.log("naranja" === "naranja") // true
console.log("manzana" !== "naranja") // true
```

### Operadores lógicos:

Los siguientes símbolos son los operadores lógicos más comunes: &&(ampersand) , ||(pipe) and !(negation). 

- El operador && se vuelve verdadero sólo si los dos operandos son verdaderos.
- El operador || se vuelve verdadero cualquiera de los operandos es verdadero.
- El operador ! niega true a false y false a true.
    
    ```jsx
    // && ejemplo de operador ampersand
    
    const check = 4 > 3 && 10 > 5; // true && true -> true
    const check = 4 > 3 && 10 < 5; // true && false -> false
    const check = 4 < 3 && 10 < 5; // false && false -> false
    
    // || ejemplo de operador or
    
    const check = 4 > 3 || 10 > 5; // true  || true -> true
    const check = 4 > 3 || 10 < 5; // true  || false -> true
    const check = 4 < 3 || 10 < 5; // false || false -> false
    
    //! ejemplos de negación
    
    let check = 4 > 3; // true
    let check = !(4 > 3); //  false
    ```
    

### **Operadores de Incremento y Decremento:**

En JavaScript usamos el operador de incremento para aumentar un valor almacenado en una variable y  el operador decremento para disminuir un valor almacenado en una variable.

Esto puede ser de dos maneras:

```jsx
//INCREMENTO

// Pre-incremento
var num = 0;
console.log(num++); // 1
console.log(num); // 1

// Post-incremento
var num = 0;
console.log(num); // 0
console.log(num++); // 1

// DECREMENTO

//Pre-decremento
var num = 1;
console.log(num--); // 0
console.log(num); // 0

// Post-incremento
var num = 1;
console.log(num); // 1
console.log(num--); // 0
```

## Objeto Date

El tiempo es una cosa importante. Nos gusta saber la hora de una determinada actividad o evento. En JavaScript, la hora y la fecha actuales se crean utilizando el objeto Date de JavaScript. El objeto que creamos usando el objeto Date proporciona muchos métodos para trabajar con fecha y hora. 

Los metodos son los siguientes:

![date_time_object.png](img/date_time_object.png)

### Creamos un objeto date

```jsx
const now = new Date();
console.log(now);//Sun Jan 22 2023 01:25:25 GMT-0300 (hora estándar de Argentina)

// Obtenemos el año
console.log(now.getFullYear()); // 2023

// Obtener el mes
console.log(now.getMonth()); // 0, porque el mes es enero, meses(0-11)

// Obtener la fecha
console.log(now.getDate()); // 22, porque estamos a 22 de enero

// Obtener el día 
console.log(now.getDay()); // 0, porque es Domingo
													// El domingo es 0, el lunes es 1 y el sábado es 6

// Obtener horas
const now = new Date();
console.log(now.getHours()); // 1, porque el tiempo es 01:25:25

// Obtener minutos
const now = new Date();
console.log(now.getMinutes()) // 25, porque el tiempo es 01:25:25

// Obtner segundos
const now = new Date();
console.log(now.getSeconds()); // 25, porque el tiempo es 01:25:25
```