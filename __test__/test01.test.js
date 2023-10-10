const {
    longitudDeCadena,
    enMayusculas,
    enMinusculas,
    enlistandoNombres,
    ultimoCaracter,
    primerCaracter,
    nuevoBoolean,
    nuevoModulo,
    nuevoNumero,
    nuevoString,
    nuevaMultiplicacion,
    nuevaResta,
    typeOF,
    repairToString,
    contains
    
} = require('../01.VariablesyTiposdeDatos/ejercicios01.js')

describe('primerCaracter', () =>{
    it('Deberia devolver el primero Caracter del String', () =>{
        expect(primerCaracter('CasaDelFuturo')).toBe('C');
        expect(primerCaracter('Hola Mundo!')).toBe('H');
        expect(primerCaracter('Bienvenidos')).toBe('B');
    });
});

describe('ultimoCaracter', () =>{
    it('Deberia devolver el ultimo caracter del String', () =>{
        expect(ultimoCaracter('HI')).toBe('I');
        expect(ultimoCaracter('2023')).toBe('3');
        expect(ultimoCaracter('Hola')).toBe('a');
    });
});

describe('longitudDeCadena', () =>{
    it('Deberia devolver la longitud del String pasado', () =>{
        expect(longitudDeCadena('Bienvenidos')).toBe(11)
        expect(longitudDeCadena('GutenTag')).toBe(8)
        expect(longitudDeCadena('A')).toBe(1)
    })
});

describe('enMayusculas', () =>{
    it('Deberia retornar el String todo en mayusculas', () =>{
        expect(enMayusculas('hola')).toBe('HOLA');
        expect(enMayusculas('goodbye')).toBe('GOODBYE');
        expect(enMayusculas('CasaDelFuturo')).toBe('CASADELFUTURO');
    });
});

describe('enMinusculas', () =>{
    it('Deberia retornar el String todo en minusculas', () =>{
        expect(enMinusculas('HOLA')).toBe('hola')
        expect(enMinusculas('GOODBYE')).toBe('goodbye')
        expect(enMinusculas('CASADELFUTURO')).toBe('casadelfuturo')
    });
});

describe('enlistandoNombres', () =>{
    it('Deberia crear una lista de los nombres pasados por parametros',() =>{
        expect(enlistandoNombres('Leonardo, Martin, Natalia, Diego, Franco')).toEqual(['Leonardo', 'Martin', 'Natalia', 'Diego', 'Franco'])
        expect(enlistandoNombres('Pepe, Pablo, Pedro')).toEqual(['Pepe', 'Pablo', 'Pedro'])
    });
});

describe('nuevoString', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof nuevoString).toBe('string')
    })
})

describe('nuevoNumero', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof nuevoNumero).toBe('number')
    })
})

describe('nuevoBoolean', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(typeof nuevoBoolean).toBe('boolean')
    })
})

describe('nuevaMultiplicacion', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(nuevaMultiplicacion).toBe(true)
    })
})

describe('nuevaResta', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(nuevaResta).toBe(true)
    })
})

describe('nuevoModulo', () =>{
    it('Deberia crear una variable tipo String', () =>{
        expect(nuevoModulo).toBe(true)
    })
})

describe('typeOF', () =>{
    it('Deberia devolver el tipo de dato correspondiente', () =>{
        expect(typeOF(3)).toBe('number')
        expect(typeOF('Hola')).toBe('string')
        expect(typeOF(true)).toBe('boolean')
        expect(typeOF([1, 2, 3])).toBe('object')
    })
})

describe('repairToString', () => {
    it('Deberia devolver el string con la mayúscula donde corresponde', () =>{
        expect(repairToString('holA')).toEqual('Hola')
    })
})

describe('contains', () => {
    it('Debe verificar si contiene la cadena de texto', () => {
        expect(contains('JavaScript')).toBe(true)
        expect(contains('javascript')).toBe(false)
    })
})
