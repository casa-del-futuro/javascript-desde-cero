# Un día de HTML

# HTML

HTML (HyperText Markup Language) es un lenguaje de marcado utilizado para crear la estructura y el contenido de las páginas web. Consiste en una serie de elementos `(etiquetas)` que se utilizan para dar formato, organizar y presentar información en un documento web. Los navegadores web interpretan estas etiquetas y muestran el contenido en la pantalla de los usuarios.

- **Etiquetas:** Los elementos de HTML se definen mediante etiquetas, que son palabras clave rodeadas de corchetes angulares ("<" y ">"). Cada etiqueta indica una acción o estructura específica en la página web. Por ejemplo, la etiqueta **`<p>`** se utiliza para crear un párrafo y **`<h1>`** para encabezados principales.

- **Atributos:** Los elementos pueden tener atributos, que proporcionan información adicional sobre el elemento. Los atributos se especifican dentro de la etiqueta de apertura y generalmente tienen un nombre y un valor. Por ejemplo, el atributo **`href`** se usa en la etiqueta **`<a>`** para definir la URL de un enlace.

- **Anidación:** Los elementos de HTML pueden anidarse unos dentro de otros, lo que significa que un elemento puede contener otros elementos. Es importante cerrar las etiquetas en el orden correcto para evitar errores en la estructura del documento. Ejemplo:
    
    ```html
    <body>
    
        <h1>Lista de Compras</h1>
    
        <ul> <!-- Lista no ordenada -->
            <li>Frutas</li> <!-- Elemento de lista -->
            <ul> <!-- Lista anidada dentro del elemento anterior -->
                <li>Manzanas</li> <!-- Elemento anidado -->
                <li>Plátanos</li> <!-- Elemento anidado -->
                <li>Naranjas</li> <!-- Elemento anidado -->
            </ul>
            <li>Verduras</li> <!-- Elemento de lista -->
            <ul> <!-- Otra lista anidada dentro del elemento anterior -->
                <li>Zanahorias</li> <!-- Elemento anidado -->
                <li>Tomates</li> <!-- Elemento anidado -->
                <li>Espinacas</li> <!-- Elemento anidado -->
            </ul>
            <li>Pan</li> <!-- Elemento de lista -->
        </ul>
    
    </body>
    ```
    

- **Estructura básica:** Todo documento HTML comienza con una declaración que especifica la versión de HTML que se está utilizando. Luego, la estructura básica de un documento HTML se compone de las siguientes etiquetas: **`<html>`**, **`<head>`** (contiene información sobre el documento), y **`<body>`** (contiene el contenido visible en la página).
    
    
    ```html
    <!DOCTYPE html> <!-- Declaración del tipo de documento (DOCTYPE) que indica que estamos utilizando HTML5 -->
    
    <html> <!-- Elemento raíz del documento HTML, contiene todo el contenido visible en la página -->
    
    <head> <!-- Encabezado del documento, contiene información sobre el documento, como metadatos y enlaces a recursos externos -->
    
        <meta charset="UTF-8"> <!-- Especifica el juego de caracteres utilizado en el documento (UTF-8 es ampliamente recomendado) -->
    
        <title>Título de la página</title> <!-- Define el título de la página, que se muestra en la pestaña del navegador -->
    
        <!-- Aquí puedes agregar enlaces a hojas de estilo CSS o scripts JavaScript externos -->
        <!-- Por ejemplo:
        <link rel="stylesheet" href="styles.css"> para enlazar un archivo CSS externo -->
        <!-- O:
        <script src="script.js"></script> para enlazar un archivo JavaScript externo -->
    
    </head>
    
    <body> <!-- Cuerpo del documento, contiene el contenido visible de la página -->
    
        <!-- Aquí puedes agregar todo el contenido que deseas mostrar en la página -->
    
        <h1>Este es un encabezado principal</h1> <!-- Encabezado principal, el más importante en la página -->
    
        <p>Este es un párrafo de ejemplo.</p> <!-- Párrafo de texto -->
    
        <!-- Puedes agregar más elementos, como imágenes, enlaces, listas, etc. -->
    
    </body>
    
    </html>
    ```
    

## Etiquetas

[body](body.md)

[Ejercicios](Ejercicios.md)