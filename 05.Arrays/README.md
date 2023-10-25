# Array / Arreglo

## Array

Los *arrays* son objetos similares a una lista cuyo prototipo proporciona métodos para efectuar operaciones de recorrido y de mutación. Tanto la longitud como el tipo de los elementos de un *array* son variables.

### Operaciones comúnes:

- **Crear un Array**.
    
    ```jsx
    var nameArray = ["HOLA", "Mundo", "!"];  
    		//Índice ->     0  ,    1   ,  2  
    ```
    
- **Acceder a un elemento de Array mediante su índice**
    
    ```jsx
    console.log(nameArray[0]); // "HOLA"
    console.log(nameArray[1]); // "Mundo"
    console.log(nameArray[2]); // "!"
    ```
    
- **Añadir un elemento al final de un Array**
    
    ```jsx
    nameArray.push("Hello") // Añade 'Hello' al final del Array
    
    console.log(nameArray) // ["HOLA", "Mundo", "!", "Hello"]
    ```
    
- **Eliminar el último elemento de un Array**
    
    ```jsx
    nameArray.pop() // Elimina "Hello" ya que es el ultimo elemento del array
    
    console.log(nameArray) // ["HOLA", "Mundo", "!"]
    ```
    
- **Añadir un elemento al principio de un Array**
    
    ```jsx
    nameArray.unshift("¡") // Agrega '¡' al principio del array
    
    console.log(nameArray) // ["¡" ,"HOLA", "Mundo", "!"]
    ```
    
- **Eliminar el primer elemento de un Array**
    
    ```jsx
    nameArray.shift() // Elimina "¡" ya que es el primer elemento del array
    
    console.log(nameArray) // ["HOLA", "Mundo", "!"]
    ```
    
    Así como estos existe muchas otras propiedades que se pueden usar sobre un **********Array.**********
    
    puedes averiguar aquí los demas:
    
    [Array - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array#propiedades_est%C3%A1ticas)