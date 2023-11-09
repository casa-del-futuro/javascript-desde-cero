# Metodos Strings & Arrays

## Métodos de Strings:

- **`indexOf`**: Devuelve la posición de la primera aparición de un valor específico en una cadena.
    
    ```jsx
    const mensaje = "Hola, mundo!";
    console.log(mensaje.indexOf("mundo")); // Output: 6
    ```
    

- **`slice`**: Devuelve una subcadena de una cadena, especificando el índice de inicio y fin (opcional).
    
    ```jsx
    const mensaje = "Hola, mundo!";
    console.log(mensaje.slice(5, 10)); // Output: "mundo"
    ```
    

- **`trim`**: Elimina los espacios en blanco al inicio y al final de una cadena.
    
    ```jsx
    const mensaje = "   Hola, mundo!   ";
    console.log(mensaje.trim()); // Output: "Hola, mundo!"
    ```
    

- **`split`**: Divide una cadena en un array de subcadenas según un separador.
    
    ```jsx
    const mensaje = "Hola, mundo!";
    const subcadenas = mensaje.split(", ");
    console.log(subcadenas); // Output: ["Hola", "mundo!"]
    ```
    

- **`replace`**: Reemplaza una parte de una cadena con otra.
    
    ```jsx
    const mensaje = "Hola, mundo!";
    const nuevoMensaje = mensaje.replace("mundo", "amigo");
    console.log(nuevoMensaje); // Output: "Hola, amigo!"
    ```
    
    **Estos son ejemplos prácticos de cómo puedes utilizar estos métodos en JavaScript para manipular y trabajar con cadenas de texto.**
    

## Métodos de Arrays:

- **`join`**: Une todos los elementos de un array en una cadena, utilizando un separador opcional.
    
    ```jsx
    const elementos = ["manzana", "plátano", "naranja"];
    const cadena = elementos.join(", ");
    console.log(cadena); // Output: "manzana, plátano, naranja"
    ```
    
- **`indexOf`**: Devuelve la posición de la primera aparición de un valor específico en un array.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    console.log(numeros.indexOf(3)); // Output: 2
    ```
    
- **`lastIndexOf`**: Devuelve la posición de la última aparición de un valor específico en un array.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 3, 5];
    console.log(numeros.lastIndexOf(3)); // Output: 4
    ```
    
- **`includes`**: Verifica si un array contiene un valor específico y devuelve un valor booleano.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    console.log(numeros.includes(3)); // Output: true
    console.log(numeros.includes(6)); // Output: false
    ```
    
- **`map`**: Crea un nuevo array con los resultados de aplicar una función a cada elemento del array.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    const duplicados = numeros.map(function(numero) {
      return numero * 2;
    });
    console.log(duplicados); // Output: [2, 4, 6, 8, 10]
    ```
    
- **`find`**: Devuelve el primer elemento que cumpla con una condición dada en una función.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    const encontrado = numeros.find(function(numero) {
      return numero > 3;
    });
    console.log(encontrado); // Output: 4
    ```
    
- **`forEach`**: Ejecuta una función para cada elemento del array.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    numeros.forEach(function(numero) {
      console.log(numero * 2);
    });
    // Output:
    // 2
    // 4
    // 6
    // 8
    // 10
    ```
    
- **`filter`**: Crea un nuevo array con todos los elementos que cumplan con una condición dada en una función.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    const pares = numeros.filter(function(numero) {
      return numero % 2 === 0;
    });
    console.log(pares); // Output: [2, 4]
    ```
    
- **`reduce`**: Aplica una función a un acumulador y a cada elemento del array (de izquierda a derecha) para reducirlo a un único valor.
    
    ```jsx
    const numeros = [1, 2, 3, 4, 5];
    const suma = numeros.reduce(function(acumulador, numero) {
      return acumulador + numero;
    }, 0);
    console.log(suma); // Output: 15
    ```