const {
  alumnos,
    eliminarPropiedad,
    datosObj,
    cambiandoPropiedades,
    contieneEmail,
    verificarPassword,
    permisosDeEntrada,
    libro,
    mostrarInformacionLibro
} = require('../06.Objetos/ejercicios06')

describe('examenIngreso', ()=>{
  it('Almunos deberia contener sus respectivas propiedades y valores', () =>{
      expect(typeof alumnos.nombre).toBe('string')
      expect(typeof alumnos.apellido).toBe('string')
      expect(typeof alumnos.edad).toBe('number')
      expect(typeof alumnos.examen).toBe('boolean')
  });
});

describe('eliminarPropiedad', () => {
    it('Deberia eliminar la propiedad pasada por parametro', () => {
      const objectOne = { name: 'lenardo', surname: 'avila', age: 25, extra: false} 
      const objectTwo = { name: 'lucas', surname: 'zarandon', age: 24 , extra: false}
      const changeObjectOne = { name: 'lenardo', surname: 'avila', age: 25} 
      const changeObjectTwo = { name: 'lucas', surname: 'zarandon', age: 24}
      expect(eliminarPropiedad(objectOne, 'extra')).toEqual(changeObjectOne);
      expect(eliminarPropiedad(objectTwo, 'extra')).toEqual(changeObjectTwo);
    });
});

describe('datosObj', () =>{
  it('Deberia retornar bienvenida con datos del obj', () =>{
      expect(datosObj({nombre: 'Leonardo', apellido: 'Avila'})).toBe('Bienvenido Leonardo Avila')
      expect(datosObj({nombre: 'Pablo', apellido: 'Perez'})).toEqual('Bienvenido Pablo Perez')
      expect(datosObj({nombre: 'David', apellido: 'Cortez'})).toEqual('Bienvenido David Cortez')
  });
});

describe('cambiandoPropiedades', () =>{
  it('Deberia retornar los cambios en el obj', () =>{
      expect(cambiandoPropiedades({nombre: 'Leonardo', apellido: 'Avila'})).toEqual({nombre: 'Leonardo', apellido: 'Avila', nacionalidad: 'Argentina'})
      expect(cambiandoPropiedades({nombre: 'Pablo', apellido: 'Perez'})).toEqual({nombre: 'Pablo', apellido: 'Perez', nacionalidad: 'Argentina'})
      expect(cambiandoPropiedades({nombre: 'David', apellido: 'Cortez'})).toEqual({nombre: 'David', apellido: 'Cortez', nacionalidad: 'Argentina'})
  });
});

describe('contieneEmail', () => {
  it('Deberia verificar si contiene la propiedad email', () => {
    const objectOne = { name: 'lenardo', surname: 'avila', age: 25, extra: false , email: 'leoavila123@gmail.com'} 
    const objectTwo = { name: 'lucas', surname: 'zarandon', age: 24 , extra: false}
    expect(contieneEmail(objectOne)).toEqual(true);
    expect(contieneEmail(objectTwo)).toEqual(false);
  });
});

describe('verificarPassword', () => {
  it('Deberia verificar la longitud de password', () => {
    const objectOne = { usuario: 'Avleo', password: "no se que poner :(", email: 'leoavila123@gmail.com'} 
    const objectTwo = { usuario: 'Avleo', password: 'hola', email: 'leoavila123@gmail.com'} 
    expect(verificarPassword(objectOne)).toEqual(true);
    expect(verificarPassword(objectTwo)).toEqual('Porfavor, pon una contraseña más segura');
  });
});

describe('permisosDeEntrada', () => {
  it('Deberia devolver un array de las personas que cumplen', () => {
    const personas = [
      {nombre:'Leonardo', apellido: 'Avila', edad: 25, entrada: true},
      {nombre:'Pablo', apellido: 'Perez', edad: 18, entrada: false},
      {nombre:'Enzo', apellido: 'Perez', edad: 17, entrada: true},
      {nombre:'Diego', apellido: 'Avila', edad: 22, entrada: true},
      {nombre:'Martin', apellido: 'Avila', edad: 25, entrada: true},
      {nombre:'Franco', apellido: 'Avila', edad: 16, entrada: false}
    ]
    const personas2 = [
      {nombre:'Leonardo', apellido: 'Avila', edad: 25, entrada: false},
      {nombre:'Pablo', apellido: 'Perez', edad: 18, entrada: true},
      {nombre:'Enzo', apellido: 'Perez', edad: 17, entrada: true},
      {nombre:'Diego', apellido: 'Avila', edad: 22, entrada: false},
      {nombre:'Martin', apellido: 'Avila', edad: 25, entrada: true},
      {nombre:'Franco', apellido: 'Avila', edad: 18, entrada: true}
    ]
    expect(permisosDeEntrada(personas)).toEqual(['Leonardo','Diego','Martin']);
    expect(permisosDeEntrada(personas2)).toEqual(['Pablo','Martin','Franco']);
  });
});

describe('mostrarInformacionLibro', () => {
  it('Deberia devolver la informacion de libro!', () => {
    const libro1 = {
      título: "1984",
      autor: "George Orwell",
      añoPublicación: 1949
    };
    
    const libro2 = {
      título: "Cien años de soledad",
      autor: "Gabriel García Márquez",
      añoPublicación: 1967
    };
    
    const libro3 = {
      título: "El código Da Vinci",
      autor: "Dan Brown",
      añoPublicación: 2003
    };
    expect(mostrarInformacionLibro(libro)).toEqual(`El libro ${libro.título}, escrito por ${libro.autor} , fue publicado en ${libro.añoPublicación}.`);
    expect(mostrarInformacionLibro(libro1)).toEqual(`El libro ${libro1.título}, escrito por ${libro1.autor} , fue publicado en ${libro1.añoPublicación}.`);
    expect(mostrarInformacionLibro(libro2)).toEqual(`El libro ${libro2.título}, escrito por ${libro2.autor} , fue publicado en ${libro2.añoPublicación}.`);
    expect(mostrarInformacionLibro(libro3)).toEqual(`El libro ${libro3.título}, escrito por ${libro3.autor} , fue publicado en ${libro3.añoPublicación}.`);
  });
});