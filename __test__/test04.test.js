const {
    encuentraX,
    sumandoTodo,
    BinarioADecimal,
    Fibonacci,
    esPrimo,
    invertirCadena,
    cantidadDeVocales,
    primerDivisible
} = require('../04.Bucles/ejercicios04.js')

describe('encuentroX',()=>{
    it('Deberia encontrar el numero X', ()=>{
        expect(encuentraX(20)).toBe("El numero X es: 20")
        expect(encuentraX(23)).toBe("El numero X es: 23")
        expect(encuentraX(90)).toBe("El numero X es: 90")
        expect(encuentraX(1)).toBe("El numero X es: 1")
    })
})

describe('sumandoTodo',()=>{
    it('Deberia devolver la suma de los numeros recorridos', ()=>{
        expect(sumandoTodo(10)).toEqual(55)
        expect(sumandoTodo(5)).toEqual(15)
        expect(sumandoTodo(15)).toEqual(120)
        expect(sumandoTodo(99)).toEqual(4950)
    })
})

describe('BinarioADecimal',()=>{
    it('Deberia pasar el N° binario a decimal', ()=>{
        expect(BinarioADecimal('111')).toBe(7)
        expect(BinarioADecimal('10110')).toBe(22)
        expect(BinarioADecimal('11011')).toBe(27)
    })
})

describe('Fibonacci',()=>{
    it('Deberia realizar secuencia fibonacci', ()=>{
        expect(Fibonacci(10)).toBe(55)
        expect(Fibonacci(5)).toEqual(5)
        expect(Fibonacci(15)).toEqual(610)
        expect(Fibonacci(20)).toEqual(6765)
    })
})

describe('esPrimo',()=>{
    it('Deberia devolver si el numero es primo o no', ()=>{
        expect(esPrimo(2)).toBe("2 es primo.")
        expect(esPrimo(4)).toBe("4 no es primo.")
        expect(esPrimo(3)).toBe("3 es primo.")
        expect(esPrimo(6)).toBe("6 no es primo.")
        expect(esPrimo(7)).toBe("7 es primo.") 
    })
})

describe('invertirCadena',()=>{
    it('Deberia devolver el string invertido', ()=>{
        expect(invertirCadena('Hola')).toBe("aloH")
        expect(invertirCadena('Bienvenido')).toBe("odinevneiB")
        expect(invertirCadena('Hola Mundo')).toBe('odnuM aloH')
    })
})

describe('cantidadDeVocales',()=>{
    it('Deberia devolver la cantidad de vocales que contiene', ()=>{
        expect(cantidadDeVocales('Hola')).toBe(2)
        expect(cantidadDeVocales('Bienvenido')).toBe(5)
        expect(cantidadDeVocales('Hola Mundo')).toBe(4)
    })
})

describe('primerDivisible',()=>{
    it('Deberia devolver el primer numero divisible de num', ()=>{
        expect(primerDivisible(1, 7)).toBe(1)
        expect(primerDivisible(5, 14)).toBe(7)
        expect(primerDivisible(2 , 21)).toBe(3)
    })
})