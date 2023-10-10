const {
    arrayDuplicados,
    nombresPersonas,
    masImpuestos,
    NombresLargos,
    filtaradoPorCategoria,
    examenIngreso,
    nombreContiene
} = require('../09.Metodos/Ejercicios09.js');

describe('arrayDuplicados', () =>{
    it('Deberia devolver otro array con los valores duplicados', () =>{
        expect(arrayDuplicados([1,2,3,4,5,6])).toStrictEqual([2,4,6,8,10,12])
        expect(arrayDuplicados([4,6,8,10,12,14])).toStrictEqual([8,12,16,20,24,28])
        expect(arrayDuplicados([99,87,97,79,58,65])).toStrictEqual([198,174,194,158,116,130])
    })
})


describe('nombresPersonas', () => {
    let personas = [
        { name: 'Juan', edad: 20 },
        { name: 'María', edad: 18 },
        { name: 'Pedro', edad: 22 }
        ]
    let personas2 =[
        { name: 'Ana', edad: 16 },
        { name: 'Luisa', edad: 25 },
        { name: 'Carlos', edad: 17 }
      ];
    let personas3 = [
        { name: 'Ana', edad: 18 },
        { name: 'Luisa', edad: 15 },
        { name: 'Pedro', edad: 17 }
    ]
    it('Deberia devolver otro array con los nombres de las personas', ()=> {
        expect(nombresPersonas(personas)).toStrictEqual(['Juan', 'María', 'Pedro'])
        expect(nombresPersonas(personas2)).toStrictEqual(['Ana','Luisa','Carlos'])
        expect(nombresPersonas(personas3)).toStrictEqual(['Ana','Luisa','Pedro'])
    })
})

describe('masImpuestos', () => {
    const productos = [
        {
            producto: "Zapatillas Converse Chuck Taylor",
            nSerie: "11111",
            precio: 59.99
          },
          {
            producto: "Zapatillas Vans Old Skool",
            nSerie: "22222",
            precio: 69.99
          },
          {
            producto: "Zapatillas New Balance 574",
            nSerie: "33333",
            precio: 79.99
          },
          {
            producto: "Zapatillas Skechers Memory Foam",
            nSerie: "44444",
            precio: 89.99
          }
      ];
      const productos2 = [
        {
            producto: 'Zapatillas Converse Chuck Taylor',
            nSerie: '11111',
            precio: 59.99,
            impuestos: 5
          },
          {
            producto: 'Zapatillas Vans Old Skool',
            nSerie: '22222',
            precio: 69.99,
            impuestos: 6
          },
          {
            producto: 'Zapatillas New Balance 574',
            nSerie: '33333',
            precio: 79.99,
            impuestos: 7
          },
          {
            producto: 'Zapatillas Skechers Memory Foam',
            nSerie: '44444',
            precio: 89.99,
            impuestos: 8
          }
      ];
    it('Deberia devolver el array de objetos con la propiedad impuestos agregada', ()=> {
        expect(masImpuestos(productos)).toStrictEqual(productos2)
        // expect(masImpuestos(productos2)).toStrictEqual([8,12,16,20,24,28])
    })
})

describe('NombresLargos', () => {
    const nombres = [
        "Juan",
        "María",
        "Pedro",
        "Ana",
        "Luisa",
        "Carlos",
        "Sofía",
        "Alejandro",
        "Lucía"
      ];
    it('Deberia devolver un array con los nombres de 5 o mayor de longitud', ()=> {
        expect(NombresLargos(nombres)).toStrictEqual([ 'María', 'Pedro', 'Luisa', 'Carlos', 'Sofía', 'Alejandro', 'Lucía' ])
        // expect(nombresPersonas(personas2)).toStrictEqual(['Ana','Luisa','Carlos'])
        // expect(nombresPersonas(personas3)).toStrictEqual(['Ana','Luisa','Pedro'])
    })
})

describe('filtaradoPorCategoria', () => {
    const peliculas = [
        {
          titulo: "Inception",
          estreno: 2010,
          categoria: "Ciencia ficción"
        },
        {
          titulo: "The Shawshank Redemption",
          estreno: 1994,
          categoria: "Drama"
        },
        {
          titulo: "The Dark Knight",
          estreno: 2008,
          categoria: "Acción"
        },
        {
          titulo: "Pulp Fiction",
          estreno: 1994,
          categoria: "Crimen"
        },
        {
          titulo: "Interstellar",
          estreno: 2014,
          categoria: "Ciencia ficción"
        },
        {
          titulo: "Fight Club",
          estreno: 1999,
          categoria: "Drama"
        },
        { titulo: 'Spiderman', estreno: 2021, categoria: 'Acción' },
        { titulo: 'The Avengers', estreno: 2012, categoria: 'Acción' },
        { titulo: 'Titanic', estreno: 1997, categoria: 'Romance' },
        { titulo: 'The Lion King', estreno: 1994, categoria: 'Animación' },
        { titulo: 'Inception', estreno: 2010, categoria: 'Ciencia ficción' }
      ];
    it('Deberia filtrar por categoria', ()=> {
        expect(filtaradoPorCategoria(peliculas,'Acción')).toStrictEqual(["The Dark Knight",'Spiderman','The Avengers'])
        expect(filtaradoPorCategoria(peliculas,'Drama')).toStrictEqual(["The Shawshank Redemption","Fight Club"])
        expect(filtaradoPorCategoria(peliculas,'Ciencia ficción')).toStrictEqual(["Inception","Interstellar",'Inception'])
    })
})

describe('examenIngreso', () => {
    const alumnos = [
        {
            nombre: "Juan",
            apellido: "Pérez",
            nota: 85,
            inscripcion: true
          },
          {
            nombre: "María",
            apellido: "González",
            nota: 92,
            inscripcion: true
          },
          {
            nombre: "Pedro",
            apellido: "López",
            nota: 78,
            inscripcion: false
          },
          {
            nombre: "Ana",
            apellido: "Martínez",
            nota: 95,
            inscripcion: true
          },
          {
            nombre: "Lucía",
            apellido: "Sánchez",
            nota: 60,
            inscripcion: true
          },
          {
            nombre: "Carlos",
            apellido: "Ramírez",
            nota: 68,
            inscripcion: true
          }
        ];
    it('Deberia el array de objetos de los alumnos que cumplen las condiciones', ()=> {
        expect(examenIngreso(alumnos)).toStrictEqual([
            { nombre: 'Juan', apellido: 'Pérez', nota: 85, inscripcion: true },
            { nombre: 'María', apellido: 'González', nota: 92, inscripcion: true},
            { nombre: 'Ana', apellido: 'Martínez', nota: 95, inscripcion: true }])
    })
})

describe('nombreContiene', () =>{
    it('Deberia devolver filtar por busqueda', () =>{
        expect(nombreContiene(['Leo','Agustina','Martina','Pedro','Manuel', 'Cristina'], 'tina')).toStrictEqual(['Agustina','Martina','Cristina'])
    })
})