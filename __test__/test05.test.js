const {
    nuevoArray,
    changeArray,
    sumandoEnUno,
    primerElemento,
    ultimoElemento,
    primerasCondicionales,
    valorMaximo,
    valorMinimo,
    cantPares,
    eliminarDuplicado,
    enOrden,
    dosEnUno,
    matrizTranspuesta,
} = require('../05.Arrays/ejercicios05')

describe('primerElemento', () => {
    it('Deberia retornar primer elemento del array', () =>{
        expect(primerElemento(['uno','dos','tres'])).toBe('uno')
        expect(primerElemento(['hola','mundo','!'])).toBe('hola')
        expect(primerElemento([39, 29, 99])).toBe(39)
    });
});
describe('ultimoElemento', () =>{
    it('Deberia retornar ultimo elemento del array', () =>{
        expect(ultimoElemento(['uno','dos','tres'])).toBe('tres')
        expect(ultimoElemento(['hola','mundo','!'])).toBe('!')
        expect(ultimoElemento([39, 29, 99])).toBe(99)
    });
});
describe('nuevoArray', () =>{
    it('Deberia retornar longitud del array', () =>{
        expect(nuevoArray(['uno','dos','tres'])).toBe(3)
    });
});
describe('changeArray', () =>{
    it('Deberia retornar los cambios en el array', () =>{
        expect(changeArray(['hola', 'mundo', '!'])).toEqual(['Aprendiendo', 'mundo', 'array'])
        expect(changeArray(['hola', 'el', 'mundo', '!'])).toEqual(['Aprendiendo','el', 'mundo', 'array'])
    });
});
describe('primerasCondicionales', () =>{
    it('Deberia retornar los cambios en el array', () =>{
        expect(primerasCondicionales([39, 29, 99])).toBe('Este array es igual a 3')
        expect(primerasCondicionales(["h", "o", "l", "a"])).toBe('Este array es mayor a 3')
        expect(primerasCondicionales(["hola", "mundo"])).toBe('Este array es menor a 3')
        expect(primerasCondicionales([])).toBe('Este array no contiene elementos')
    });
});
describe('sumandoEnUno', () =>{
    it('Deberia retornar los cambios en el array', () =>{
        expect(sumandoEnUno([39, 29, 99])).toEqual([40, 30, 100])
        expect(sumandoEnUno([43, 323, 999])).toEqual([44, 324, 1000])
        expect(sumandoEnUno([66, 102, 332])).toEqual([67, 103, 333])
    });
});

describe('valorMaximo', () =>{
    it('Deberia devolver el numero más alto del array', () =>{
        expect(valorMaximo([39, 29, 99])).toEqual(99)
        expect(valorMaximo([43, 323, 999])).toEqual(999)
        expect(valorMaximo([66, 102, 332])).toEqual(332)
    });
});
describe('valorMinimo', () =>{
    it('Deberia devolver el numero más bajo del array', () =>{
        expect(valorMinimo([39, 29, 99])).toEqual(29)
        expect(valorMinimo([43, 323, 999])).toEqual(43)
        expect(valorMinimo([66, 102, 332])).toEqual(66)
    });
});
describe('cantPares', () =>{
    it('Deberia devolver la cantidad de pares que contiene', () =>{
        expect(cantPares([1, 2, 4, 6, 7, 9, 8, 11])).toEqual(4)
        expect(cantPares([1, 2, 7, 9, 8, 11])).toEqual(2)
        expect(cantPares([1, 10, 2, 4, 6, 12, 14, 8, 18, 9])).toEqual(8)
    });
});

describe('eliminarDuplicado', () =>{
    it('Deberia devolver array sin los numeros duplicados', () =>{
        expect(eliminarDuplicado([1, 1, 2, 3, 4, 5, 5, 6, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7])
        expect(eliminarDuplicado([2, 1, 2, 3, 4, 5, 4, 6, 6, 8])).toEqual([2, 1, 3, 4, 5, 6, 8])
        expect(eliminarDuplicado([11, 10, 13, 13, 54, 55, 55, 54, 68, 70])).toEqual([11, 10, 13, 54, 55, 68, 70])
    });
});
describe('enOrden', () =>{
    it('Deberia devolver el array en orden', () =>{
        expect(enOrden([8, 4, 5, 2, 3, 1, 6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
        expect(enOrden([8, 9, 12, 10, 13, 11, 6, 7])).toEqual([6, 7, 8, 9, 10, 11, 12, 13])
        expect(enOrden([97, 64, 21, 72, 75])).toEqual([21, 64, 72, 75, 97])
    });
});
describe('dosEnUno', () =>{
    it('Deberia devolver los dos arrays en uno solo', () =>{
        expect(dosEnUno([1, 2, 4, 6],[ 7, 9, 8, 11])).toEqual([1, 2, 4, 6, 7, 9, 8, 11])
        expect(dosEnUno([10, 52, 4, 6],[ 70, 90, 81, 11])).toEqual([10, 52, 4, 6, 70, 90, 81, 11])
        expect(dosEnUno([1, 2, 4, 3],[ 7, 5, 2, 1])).toEqual([1, 2, 4, 3, 7, 5, 2, 1])
    });
});
describe('matrizTranspuesta', () =>{
    it('Deberia devolver la cantidad de pares que contiene', () =>{
        expect(matrizTranspuesta([[1, 2, 4],[7, 9, 8],[7, 10, 11]])).toEqual([[1, 7, 7],[2, 9, 10],[4, 8, 11]])
        expect(matrizTranspuesta([[10, 52, 4],[70, 90, 81],[7, 9, 8]])).toEqual([[10, 70, 7],[ 52, 90, 9],[ 4, 81, 8 ]])
        expect(matrizTranspuesta([[1, 2, 4],[7, 5, 2],[70, 90, 81]])).toEqual([ [ 1, 7, 70 ], [ 2, 5, 90 ], [ 4, 2, 81 ] ])
    });
});