# Objetos

Un objeto de JavaScript tiene propiedades asociadas a él. Una propiedad de un objeto se puede explicar como una variable adjunta al objeto. Las propiedades de un objeto básicamente son lo mismo que las variables comunes de JavaScript, excepto por el nexo con el objeto.

### Operaciones comúnes:

- ********************************Crear un Objeto********************************
    
    ```jsx
    var newObject = new object();
    
    newObject.name = "Leonardo";
    newObject.lastName = "Avila";
    newObject.years = 24;
    
    // Otra forma de crear un objeto sería de la siguiente forma:
    
    var newObject = {
    	name: "Leonardo",
    	lastName: "Avila",
    	years: 24
    }
    ```
    
- ************Acceder a valores************
    
    ```jsx
    /*
    Para acceder a valores de una propiedad de un objeto lo hacemos un '.' y el nombre
    de la propiedad que quieres acceder.
    */
    
    newObject.name // "Leonardo"
    newObject.lastName // "Avila"
    
    // Otra forma de acceder es usar la notacion de corchetes, ejemplo:
    
    newObject['years'] // 24
    
    ```
    
- ************************************************************Agregar un propiedad y asignar/cambiar valores.************************************************************
    
    ```jsx
    /* 
    Para crear un propiedad que no existe en un objeto se puede hacer de la siguientes
    maneras
    */
    
    newObject.country = "Argentina";
    // O de la siguiente forma
    newObject['country'] = "Argentina";
    
    /* 
    Para cambiar el valor de una propiedad, seria con las mismas notaciones
    accediendo a la propiedad que queremos cambiar... Ejemplo:
    */
    
    newObject.years = 25;
    newObject['country'] = "ARG/MDZ";
    ```
    

Más informacion sobre objetos y propiedades:

[Trabajando con objetos - JavaScript | MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects#objetos_y_propiedades)