const { 
    bienvenida,
    calc,
    temp,
    arrayDeStrings,
    stringInverso,
    personaMásJoven,
    contadorDeLetras,
    sueldoMasAlto,
    aprobados
    
} = require('../07.Funciones/ejercicios07.js')

describe('Bienvenida', () =>{
    it('La función creada debe retornar el saludo de bienvenida', () =>{
        expect(bienvenida("Leonardo", 'Avila')).toBe("Bienvenido Leonardo Avila")
        expect(bienvenida("Pablo", 'Perez')).toBe("Bienvenido Pablo Perez")
        expect(bienvenida("Lucas", 'Zarandon')).toBe("Bienvenido Lucas Zarandon")
    })
})

describe('Calc', () =>{
    it('La funcion creada deberia actuar como calculadora', () =>{
        expect(calc(1, "+", 2)).toEqual(3)
        expect(calc(2, "-", 1)).toEqual(1)
        expect(calc(2, "*", 2)).toEqual(4)
        expect(calc(2, "/", 2)).toEqual(1)
    })
})

describe('temp', () =>{
    it('deberia devolver la recomendacion correspondiente', () =>{
        expect(temp(23,18,60)).toBe('El día está lindo, recomendable un paraguas')
        expect(temp(13,3,30)).toBe('Es recomendable salir con abrigo')
        expect(temp(13,1,80)).toBe('Es recomendable salir con abrigo, recomendable un paraguas')
    })
})

describe('arrayDeStrings', () =>{
    let palabras = [
        'manzana',
        'pera',
        'plátano',
        'uva',
        'sandía',
        'kiwi'
      ];
    let palabras2 = [
        'elefante',
        'gato',
        'oso',
        'perro',
        'ratón',
        'jirafa'
      ];
    let palabras3 = [
        'bicicleta',
        'sol',
        'casa',
        'auto',
        'luna',
        'mar'
      ];
      
    it('Deberia devolver un nuevo array con los string correspondientes', () =>{
        expect(arrayDeStrings(palabras)).toStrictEqual(["manzana", "plátano", "sandía"])
        expect(arrayDeStrings(palabras2)).toStrictEqual(["elefante", "perro", "ratón", "jirafa"])
        expect(arrayDeStrings(palabras3)).toStrictEqual(["bicicleta"])
    })
})

describe('stringInverso', () =>{
    it('Deberia devolver el string pasado a la inversa', () =>{
        expect(stringInverso('Hola')).toBe('aloH')
        expect(stringInverso('Buenos dias')).toBe("said soneuB")
        expect(stringInverso('Casa del futuro')).toBe("orutuf led asaC")
    })
})

describe('personaMásJoven', () =>{
    let personas = [
        { nombre: 'Juan', edad: 20 },
        { nombre: 'María', edad: 18 },
        { nombre: 'Pedro', edad: 22 }
        ]
    let personas2 =[
        { nombre: 'Ana', edad: 16 },
        { nombre: 'Luisa', edad: 25 },
        { nombre: 'Carlos', edad: 17 }
      ];
    let personas3 = [
        { nombre: 'Ana', edad: 18 },
        { nombre: 'Luisa', edad: 15 },
        { nombre: 'Carlos', edad: 17 }
    ]
    it('Deberia devolver el nombre de la persona más joven', () =>{
        expect(personaMásJoven(personas2)).toBe('Ana')
        expect(personaMásJoven(personas)).toBe('María')
        expect(personaMásJoven(personas3)).toBe('Luisa')
    })
})

describe('contadorDeLetras', () =>{
    let obj1 = {" ": 2, "?": 2, "a": 3, "c": 1, "e": 1, "h": 1, "l": 1, "m": 1, "o": 5, "s": 3, "t": 1}
    let obj2 = {"a": 3, "h": 1, "l": 1, "o": 3}
    let obj3 = {" ": 6, "a": 7, "c": 1, "d": 1, "e": 8, "f": 1, "i": 2, "l": 1, "m": 1, "n": 2, "o": 1, "p": 1, "r": 3, "s": 6, "t": 5, "u": 1, "v": 1}
    it('Deberia devolver un objetos con contador de letras', () =>{
        expect(contadorDeLetras('hoolaa comoo estass??')).toStrictEqual(obj1)
        expect(contadorDeLetras('hooolaaa')).toStrictEqual(obj2)
        expect(contadorDeLetras('veamos cuantas letras repetidas tiene esta frase')).toStrictEqual(obj3)
    })
})

describe('sueldoMasAlto', () =>{
    let empleados = [
        { nombre: 'Juan', sueldo: 2500 },
        { nombre: 'María', sueldo: 3000 },
        { nombre: 'Pedro', sueldo: 2000 },
        { nombre: 'Ana', sueldo: 3500 },
        { nombre: 'Luisa', sueldo: 2800 }
      ];
    let empleados2 = [
        { nombre: 'Carlos', sueldo: 2000 },
        { nombre: 'Laura', sueldo: 3500 },
        { nombre: 'Andrés', sueldo: 2800 },
        { nombre: 'María', sueldo: 2400 },
        { nombre: 'Juan', sueldo: 3200 }
      ];
    let empleados3 = [
        { nombre: 'Ana', sueldo: 2500 },
        { nombre: 'Pedro', sueldo: 3000 },
        { nombre: 'María', sueldo: 2800 },
        { nombre: 'Juan', sueldo: 2000 },
        { nombre: 'Luisa', sueldo: 3500 }
      ];
          
    it('Deberia devolver el objeto de la persona de mayor sueldo', () =>{
        expect(sueldoMasAlto(empleados)).toStrictEqual({nombre: "Ana", "sueldo": 3500})
        expect(sueldoMasAlto(empleados2)).toStrictEqual({nombre: 'Laura', sueldo: 3500 })
        expect(sueldoMasAlto(empleados3)).toStrictEqual({nombre: 'Luisa', sueldo: 3500 })
    })
})

describe('aprobados', () =>{
    let estudiantes = [
        { nombre: 'Juan', nota: 85 },
        { nombre: 'María', nota: 92 },
        { nombre: 'Pedro', nota: 78 },
        { nombre: 'Ana', nota: 97 },
        { nombre: 'Luisa', nota: 89 }
      ];
    let estudiantes2 = [
        { nombre: 'Carlos', nota: 75 },
        { nombre: 'Laura', nota: 89 },
        { nombre: 'Andrés', nota: 68 },
        { nombre: 'María', nota: 52 },
        { nombre: 'Juan', nota: 31 }
      ];
    let estudiantes3 = [
        { nombre: 'Ana', nota: 95 },
        { nombre: 'Pedro', nota: 82 },
        { nombre: 'María', nota: 59 },
        { nombre: 'Juan', nota: 98 },
        { nombre: 'Luisa', nota: 67 }
      ];
      
            
    it('Deberia devolver un nuevo array de los alumnos aprobados', () =>{
        expect(aprobados(estudiantes)).toStrictEqual(["Juan", "María", "Ana", "Luisa"])
        expect(aprobados(estudiantes2)).toStrictEqual(["Laura"])
        expect(aprobados(estudiantes3)).toStrictEqual(["Ana", "Pedro", "Juan"])
    })
})