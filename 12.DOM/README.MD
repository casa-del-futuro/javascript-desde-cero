# DOM (Document Object Model)

El documento HTML está estructurado como un objeto JavaScript. Cada elemento HTML tiene diferentes propiedades que pueden ayudar a manipularlo. Es posible obtener, crear, añadir o eliminar elementos HTML mediante JavaScript.

## Obtención de elementos:

Podemos acceder al elemento o elementos ya creados mediante JavaScript. Para acceder u obtener elementos utilizamos diferentes métodos. 

El siguiente código tiene cuatro elementos *h1*. Veamos los diferentes métodos para acceder a los elementos *h1*.

```jsx
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document Object Model - (Modelo de objeto de documento)</title>
  </head>
  <body>
    <h1 class="title" id="first-title">First Title</h1>
    <h1 class="title" id="second-title">Second Title</h1>
    <h1 class="title" id="third-title">Third Title</h1>
    <h1></h1>
  </body>
</html>
```

### obetner elementos por nombre de etiqueta:

***getElementsByTagName()***:

toma un nombre de etiqueta como parámetro de cadena y este método devuelve un objeto HTMLCollection. Una HTMLCollection es un objeto tipo array de elementos HTML.

******************Sintaxis:******************

```jsx
document.getElementsByTagName("tagname");
```

```jsx
const allTitles = document.getElementsByTagName("h1");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // imprime cada uno de los elementos de la HTMLCollection
}
```

### Obtener elemento por nombre de clase:

***getElementsByClassName():***

Devuelve un objeto HTMLCollection. quiere decir que toda aquella etiqueta que obtenga el mismo nombre de clase, lo obtendrá.

******************Sintaxis:******************

```jsx
document.getElementsByClassName("classname");
```

```jsx
const allTitles = document.getElementsByClassName("title");

console.log(allTitles); //HTMLCollections
console.log(allTitles.length); // 4

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i]); // imprime cada uno de los elementos de la HTMLCollection
}
```

### **Obtener un elemento por id:**

***getElementsById():***

tiene como objetivo un único elemento HTML. Pasamos el id sin # como argumento.

******************Sintaxis:******************

```jsx
document.getElementById("id");
```

```jsx
let firstTitle = document.getElementById("first-title");
console.log(firstTitle); // <h1>First Title</h1>
```

### **Obtener elementos mediante métodos querySelector:**

El método *document.querySelector* puede seleccionar un HTML o elementos HTML por nombre de etiqueta, por id o por nombre de clase.

***querySelector***: se puede utilizar para seleccionar elementos HTML por su nombre de etiqueta, id o clase. Si se utiliza el nombre de la etiqueta, sólo se selecciona el primer elemento.

```jsx
let firstTitle = document.querySelector("h1"); // seleccionar el primer elemento h1 disponible
let firstTitle = document.querySelector("#first-title"); // selecciona el id con first-title
let firstTitle = document.querySelector(".title"); // seleccionar el primer elemento disponible con clase title
```

***querySelectorAll***: 

se puede utilizar para seleccionar elementos html por su nombre de etiqueta o clase. Devuelve un nodeList que es un objeto tipo array que soporta métodos de array. Podemos utilizar ***bucle for***  o ***forEach*** para recorrer cada elemento de nodeList.

```jsx
const allTitles = document.querySelectorAll('h1') # selects all the available h1 elements in the page

console.log(allTitles.length) // 4
for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i])
}

allTitles.forEach(title => console.log(title))
const allTitles = document.querySelectorAll('.title') // lo mismo ocurre con la selección mediante la clase
```

## Añadir Atributo

En la etiqueta de apertura de HTML se añade un atributo que proporciona información adicional sobre el elemento. Atributos HTML comunes: id, class, src, style, href, disabled, title, alt. Añadamos id y class para el cuarto título.

```jsx
const titles = document.querySelectorAll("h1");
titles[3].className = "title";
titles[3].id = "fourth-title";
```

### **Añadir un atributo con setAttribute**

***setAttribute():***

establece cualquier atributo html. Toma dos parámetros: el tipo de atributo y el nombre del atributo. Agreguemos la clase y el atributo id para el cuarto título.

```jsx
const titles = document.querySelectorAll("h1");
titles[3].setAttribute("class", "title");
titles[3].setAttribute("id", "fourth-title");
```

**Añadir atributo sin setAttribute:**

Podemos utilizar el método normal de configuración de objetos para establecer un atributo, pero esto no puede funcionar para todos los elementos. Algunos atributos son propiedades de los objetos del DOM y se pueden establecer directamente. Por ejemplo, id y class

```jsx
titles[3].className = "title";
titles[3].id = "fourth-title";
```

### **Añadir una clase mediante classList**

El método classList es un buen método para añadir clases adicionales. No anula la clase original si existe una clase, sino que añade una clase adicional para el elemento.

```jsx
titles[3].classList.add("title", "header-title");
```

### **Eliminación de la clase mediante remove**

De forma similar a la adición, también podemos eliminar la clase de un elemento. Podemos eliminar una clase específica de un elemento.

```jsx
titles[3].classList.remove("title", "header-title");
```

### **Añadir texto a un elemento HTML**

Un HTML es un bloque compuesto por una etiqueta de apertura, una etiqueta de cierre y un contenido de texto. Podemos añadir un contenido de texto utilizando la propiedad *textContent* o *innerHTML.

**Añadir contenido de texto usando textContent**

```jsx
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";
```

****Añadir contenido de texto usando innerHTML****

La mayoría de la gente se confunde entre *textContent* y *innerHTML*. *textContent* está pensado para añadir texto a un elemento HTML, sin embargo innerHTML puede añadir un elemento o elementos de texto o HTML como hijo.

**textContent**

Asignamos la propiedad del objeto HTML *textContent* a un texto

```jsx
const titles = document.querySelectorAll("h1");
titles[3].textContent = "Fourth Title";
```

******************InnerHTML******************

Usamos la propiedad innerHTML cuando queremos reemplazar o un contenido hijo completamente nuevo a un elemento padre. El valor que asignemos será una cadena de elementos HTML.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript para todos:DOM</title>
  </head>
  <body>
    <div class="wrapper">
      <h1>JavaScript - 3 meses - 2023</h1>
      <ul></ul>
    </div>
    <script>
      const lists = `
				    <li>JavaScript</li>
            <li>3 meses</li>
            <li>2023</li>`;
      const ul = document.querySelector("ul");
      ul.innerHTML = lists;
    </script>
  </body>
</html>
```

### Manipulacion del DOM
[DOM Manipulation](./hw/README.md)