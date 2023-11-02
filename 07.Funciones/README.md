# Funciones

Las funciones son uno de los bloques de construcción fundamentales en JavaScript. Una función en JavaScript es similar a un procedimiento (un conjunto de instrucciones que realiza una tarea), pero para que un procedimiento califique como función, debe tomar alguna entrada y devolver una salida

### ****************************************Operaciones Comúnes:****************************************

- ************************************Crear una función************************************
    
    ```jsx
    // Hay tres formas de crear una función.
    function myfunction() {};
    
    const myfunction = function () {};
    
    const myFunction = () => {};
    ```
    
- ******************Definir una función******************
    
    ```jsx
    // Creamos una función de la primera forma.. un funcíon simple que sumará dos numeros.
    
    function suma(a , b) {
    	result = a + b;
    	return result // 'return' devuelve el valor obtenido en result.
    } 
    // 'a' y 'b' son los parametros que se les pasan a la funcion, que se lo pasará
    // cuando se llame a la función
    ```
    
- **********************Llamar una función**********************
    
    ```jsx
    /* a la hora de llamar una función se hace de la siguiente forma y pasando 
     los argumentos */
    
    suma(2, 3); // result = 5;
    
    // los argumentos serían 2 y 3 ... que 2 seria 'a' y 3 'b'
    ```
    
    otro ejemplo de funcion seria:
    
    ```jsx
    var bienvenida = (name, surname) => {
    	console.log("Bienvenido " + name + " " + surname)
    }
    
    bienvenida("Leonardo", "Avila");
    
    // imprime en consola 'Bienvenido Leonardo Avila'
    ```
    
    Más info de funciones aquí:
    
    [Funciones - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions#llamar_funciones)