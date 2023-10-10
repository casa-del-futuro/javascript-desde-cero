const {
    suma,
    resta,
    multiplicacion,
    resto,
    porcentajeX,
    elevadoAlCubo,
    roundUp,
    randomNumber,
    igualQue,
    menorQue,
    equalLength
} = require('../02.Operadores/ejercicios02.js');

describe('suma', function (){
    it('Debería retornar el resultado de la suma entre X e Y', function (){
        expect(suma(4, 5)).toEqual(9)
        expect(suma(10, 5)).toEqual(15)
        expect(suma(4, 40)).toEqual(44)
    });
});

describe('resta', function (){
    it('Debería retornar el resultado de la resta entre X e Y', function (){
        expect(resta(5, 4)).toEqual(1)
        expect(resta(10, 5)).toEqual(5)
        expect(resta(40, 4)).toEqual(36)
    });
});

describe('multiplicación', function (){
    it('Debería retornar el resultado de la multiplicación entre X e Y', function (){
        expect(multiplicacion(5, 4)).toEqual(20)
        expect(multiplicacion(10, 5)).toEqual(50)
        expect(multiplicacion(40, 4)).toEqual(160)
    });
});

describe('resto', function (){
    it('Debería retornar el resto entre X e Y', function (){
        expect(resto(21, 5)).toEqual(1)
        expect(resto(20, 5)).toEqual(0)
        expect(resto(12, 4)).toEqual(0)
    });
});

describe('porcentajeX', function (){
    it('Debería retornar el resultado de la suma entre X e Y', function (){
        expect(porcentajeX(15, 15)).toEqual(50)
        expect(porcentajeX(70, 30)).toEqual(30)
        expect(porcentajeX(60, 40)).toEqual(40)
    });
});

describe('elevadoAlCubo', function (){
    it('Debería retornar el resto entre X e Y', function (){
        expect(elevadoAlCubo(9)).toEqual(729)
        expect(elevadoAlCubo(12)).toEqual(1728)
        expect(elevadoAlCubo(3)).toEqual(27)
    });
});

describe('roundUp', function(){
    it('Debería devolver el numero redondeado hacia arriba', function(){
        expect(roundUp(4.3)).toBe(5);
        expect(roundUp(2.2)).toBe(3);
        expect(roundUp(8.8)).toBe(9);
    });
});

describe('randomNumber', function (){
    it('Debe devolver un número entre 0 y 1', function () {
        expect(typeof randomNumber()).toBe('number');
        expect(randomNumber()).toBeGreaterThanOrEqual(0);
        expect(randomNumber()).toBeLessThan(1);
     });
});

describe('igualQue', function(){
    it('Debería devolver true si ambos números son iguales', function(){
        expect(igualQue(4, 3)).toBe(false);
        expect(igualQue(2, 2)).toBe(true);
        expect(igualQue(8, 8)).toBe(true);
    });
});

describe('menorQue', function(){
    it('Debería devolver true si ambos números son iguales', function(){
        expect(menorQue(3, 4)).toBe(true);
        expect(menorQue(1, 2)).toBe(true);
        expect(menorQue(9, 8)).toBe(false);
    });
});

describe('equalLength', function (){
    it('Debería devolver true si la longitud de ambos string son iguales', function (){
        expect(equalLength('Leo', 'Leo')).toBe(true)
        expect(equalLength('CasaDelFuturo', 'Casa del Futuro')).toBe(false)
        expect(equalLength('Hello', 'Nuevo')).toBe(true)
    })
})