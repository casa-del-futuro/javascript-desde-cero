# Bucles

# Bucles:

La mayoría de las actividades que hacemos en la vida están llenas de repeticiones. Imagina que tienes que imprimir de 0 a 100 usando console.log(). Para implementar esta simple tarea, puede tomar de 2 a 5 minutos, este tipo de tarea tediosa y repetitiva se puede llevar a cabo usando un bucle.

En los lenguajes de programación para realizar tareas repetitivas utilizamos diferentes tipos de bucles. Los siguientes ejemplos son los bucles de uso común en JavaScript y otros lenguajes de programación.

## Bucle ‘for’:

******************Sintaxis:******************

```jsx
for(inicialización, condición, incremento/decremento){
  // el código va aquí
}
```

Ejemplos:

```jsx
// Ejemplo Simple con incremento de un numero
for (let i = 0; i <= 5; i++) {
  console.log(i);
}
// 0 1 2 3 4 5

// Ejemplo recorriendo un array 
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]
```

## Bucle ‘while’:

************Sintaxis:************

```jsx
while(condición){
// código a ejecutar
}
```

Ejemplos:

```jsx
// Ejemplo Simple con incremento de un numero
let i = 0;
while (i <= 5) {
  console.log(i);
  i++;
}
// 0 1 2 3 4 5
```

## **Bucle ‘do while’ :**

El bucle do while es prácticamente igual al while, solo que a diferencia de este, **el código se ejecuta al menos una vez**

S****************intaxis:****************

```jsx
do{
//código a ejecutar
} while(condición)
```

Ejemplo:

```jsx
let i = 0;
do {
  console.log(i);
  i++;
} while (i <= 5);

// 0 1 2 3 4 5
```

## Bucle ‘for of’:

Usamos el bucle for of para arrays. Es una forma muy práctica de iterar a través de un array, si no estamos interesados en el index de cada elemento del array.

**Sintaxis:**

```jsx
for (const element of arr) {
  // el código va aquí
}
```

Ejemplo:

```jsx
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

// 1 2 3 4 5
```

## Extra:

### Break:

Break se utiliza para interrumpir un bucle. Ejemplo:

```jsx
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2
```

# Ejercicios:

→ En proceso ← (Posible uso de node.js para realizar auto tests)