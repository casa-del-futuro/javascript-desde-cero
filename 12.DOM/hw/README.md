# Manipulando DOM

# Crear un elemento HTML

Para crear un elemento HTML utilizamos el nombre de la etiqueta. La creación de un elemento HTML mediante JavaScript es muy sencilla y directa. Utilizamos el método *document.createElement()*. El método toma un nombre de etiqueta de elemento HTML como parámetro de cadena

```jsx
// sintaxis
document.createElement("tagname");
```

```jsx
<!DOCTYPE html>
<html>
  <head>
    <title>Manipulando DOM</title>
  </head>

  <body>
    <script>
      let title = document.createElement("h1");
      title.className = "title";
      title.style.fontSize = "24px";
      title.textContent = "Creando elemento HTML";

      console.log(title);
    </script>
  </body>
</html>
```

### Multiples Elementos:

Para crear múltiples elementos debemos utilizar el bucle. Usando el bucle podemos crear tantos elementos HTML como queramos. Después de crear el elemento podemos asignar valor a las diferentes propiedades del objeto HTML.

```jsx
<!DOCTYPE html>
<html>
  <head>
    <title>Manipulando DOM</title>
  </head>

  <body>
    <script>
      let title;
      for (let i = 0; i < 3; i++) {
        title = document.createElement("h1");
        title.className = "title";
        title.style.fontSize = "24px";
        title.textContent = i;
        console.log(title);
      }
    </script>
  </body>
</html>
```

### **Añadir un hijo a un elemento padre:**

Para ver un elemento creado en el documento HTML debemos añadirlo al padre como elemento hijo. Podemos acceder al cuerpo del documento HTML utilizando *document.body*. El *document.body* soporta el método *appendChild()*. Vea el ejemplo siguiente.

```jsx
<!DOCTYPE html>
<html>
  <head>
    <title>Manipulando DOM</title>
  </head>

  <body>
    <script>
      // creación de múltiples elementos y anexión al elemento padre
      let title;
      for (let i = 0; i < 3; i++) {
        title = document.createElement("h1");
        title.className = "title";
        title.style.fontSize = "24px";
        title.textContent = i;
        document.body.appendChild(title);
      }
    </script>
  </body>
</html>
```

### **Eliminar un elemento hijo de un nodo padre:**

Después de crear un HTML, es posible que queramos eliminar uno o varios elementos y podemos utilizar el método *removeChild()*.

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Manipulando DOM</title>
</head>

<body>
    <h1>Eliminando elemento hijo de un nodo padre</h1>
    <ul>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
    </ul>

    <script>
        const ul = document.querySelector('ul')
        const lists = document.querySelectorAll('li')
        for (const list of lists) {
            ul.removeChild(list)

        }
    </script>
</body>

</html>
```

Como hemos visto en la sección anterior hay una forma mejor de eliminar todos los elementos HTML internos o hijos de un elemento padre utilizando el método *innerHTML.*

```jsx
<!DOCTYPE html>
<html>

<head>
    <title>Manipulando DOM</title>
</head>

<body>
		<h1>Eliminando elemento hijo de un nodo padre</h1>
    <ul>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
        <li>elemento hijo</li>
    </ul>
    <script>
        const ul = document.querySelector('ul')
        ul.innerHTML = ''
    </script>
</body>

</html>
```

# Ejercicio

[HW](./Homework.md)