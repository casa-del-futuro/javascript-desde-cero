# Body

Las etiquetas que se utilizan dentro del elemento **`<body>`** en HTML son las que definen el contenido visible y la estructura del cuerpo de la página web. Algunas de las etiquetas más comunes que se utilizan dentro de **`<body>`**:

- **`<h1>`**, **`<h2>`**, ..., **`<h6>`**: Estas etiquetas se utilizan para crear encabezados de distintos niveles. **`<h1>`** representa el encabezado más importante, mientras que **`<h6>`** es el menos importante.

- **`<p>`**: Esta etiqueta se usa para definir un párrafo de texto. Cada vez que se usa esta etiqueta, se crea un nuevo párrafo en la página.

- **`<a>`**: Esta etiqueta se utiliza para crear enlaces (hipervínculos) a otras páginas o recursos. Se puede establecer el destino del enlace utilizando el atributo **`href`**, Ejemplo:
    
    ```html
    **<a href="https://www.ejemplo.com">Enlace de ejemplo</a>**.
    ```
    

- **`<img>`**: Esta etiqueta se utiliza para insertar imágenes en la página. Debes especificar la URL de la imagen utilizando el atributo **`src`**, por ejemplo:
    
    ```html
    **<img src="imagen.jpg" alt="Descripción de la imagen">**
    ```
    

- **`<ul>`** y **`<li>`**: Estas etiquetas se utilizan para crear listas no ordenadas. **`<ul>`** representa la lista en sí, mientras que **`<li>`** define cada elemento de la lista. Por ejemplo:
    
    ```html
    <ul>
        <li>Elemento 1</li>
        <li>Elemento 2</li>
        <li>Elemento 3</li>
    </ul>
    ```
    

- **`<ol>`** y **`<li>`**: Estas etiquetas se utilizan para crear listas ordenadas. Funcionan de manera similar a las listas no ordenadas, pero con un orden numérico o alfabético. Por ejemplo:
    
    ```html
    <ol>
        <li>Primer elemento</li>
        <li>Segundo elemento</li>
        <li>Tercer elemento</li>
    </ol>
    ```
    

- **`<div>`** y **`<span>`**: Estas etiquetas se utilizan como contenedores de bloques o de texto en línea, respectivamente. Son útiles para aplicar estilos y manipular el contenido con CSS o JavaScript. **`<div>`** se utiliza para agrupar contenido en bloques, mientras que **`<span>`** se utiliza para aplicar estilos a porciones de texto dentro de un párrafo.

- **`<table>`**, **`<tr>`**, **`<td>`**, **`<th>`**: Estas etiquetas se utilizan para crear tablas en una página web. **`<table>`** define la tabla en sí, **`<tr>`** define una fila dentro de la tabla, **`<td>`** define una celda de datos regular y **`<th>`** define una celda de encabezado.
    
    ```html
    <table border="1"> <!-- La tabla con el atributo border para mostrar bordes visuales -->
            <!-- Encabezado de la tabla -->
    			<thead>   
    		     <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Curso</th>
            </tr>
    			</thead>
    			<tbody>
            <!-- Filas de datos -->
            <tr>
                <td>María</td>
                <td>25</td>
                <td>Matemáticas</td>
            </tr>
            <tr>
                <td>Juan</td>
                <td>22</td>
                <td>Ciencias</td>
            </tr>
            <tr>
                <td>Pedro</td>
                <td>20</td>
                <td>Historia</td>
            </tr>
    			</tbody>
    </table>
    ```
    

- **`<form>`** y elementos de formulario: Estas etiquetas se utilizan para crear formularios interactivos que permiten a los usuarios enviar datos al servidor. Algunos elementos de formulario comunes incluyen **`<input>`**, **`<textarea>`**, **`<select>`**, **`<button>`**, etc.
    
    ```html
    <body>
    
        <h1>Formulario de Contacto</h1>
    
        <form action="/procesar_formulario" method="post"> <!-- La etiqueta <form> para crear el formulario -->
            <!-- El atributo "action" especifica la URL a la que se enviarán los datos del formulario -->
            <!-- El atributo "method" define el método de envío del formulario, en este caso, "post" -->
    
            <!-- Campo de entrada para el nombre -->
            <label for="nombre">Nombre:</label> <!-- Etiqueta para identificar el campo -->
            <input type="text" id="nombre" name="nombre" required> <!-- Campo de entrada de texto -->
            <!-- El atributo "id" es utilizado para vincular la etiqueta <label> con el campo de entrada -->
            <!-- El atributo "name" es el nombre del campo que se utilizará al enviar el formulario -->
            <!-- El atributo "required" indica que el campo es obligatorio -->
    
            <!-- Campo de entrada para el correo electrónico -->
            <label for="email">Correo electrónico:</label>
            <input type="email" id="email" name="email" required>
    
            <!-- Campo de entrada para el mensaje -->
            <label for="mensaje">Mensaje:</label>
            <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            <!-- <textarea> se utiliza para campos de texto de varias líneas -->
            <!-- El atributo "rows" define el número de filas visibles del campo -->
    
            <!-- Botón de envío del formulario -->
            <input type="submit" value="Enviar">
        </form>
    
    </body>
    ```