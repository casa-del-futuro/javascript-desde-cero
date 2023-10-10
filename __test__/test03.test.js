const {
    mayorEdad,
    salario,
    numPar,
    numImpar,
    numPositivoNegativo,
    cambioPesos,
    climaActual,
    vocales,
    nValor,
    numMúltiplo,
    length
} = require('../03.Condicionales/ejercicios03.js')

describe('mayorEdad', function (){
    it('Debería retornar "Es mayor de edad" si corresponde', function (){
        expect(mayorEdad(10)).toBe('Es menor de edad')
        expect(mayorEdad(49)).toBe('Es mayor de edad')
        expect(mayorEdad(15)).toBe('Es menor de edad')
        expect(mayorEdad(18)).toBe('Es mayor de edad')
        expect(mayorEdad(90)).toBe('Es mayor de edad')
  });
});

describe('salario', function (){
    it('Debería retornar el bono correspondiente según su exp', function(){
        expect(salario("Leo", 4)).toBe("Leo tu bono es de $5.000");
        expect(salario("Natalia", 20)).toBe("Natalia tu bono es de $15.000");
        expect(salario("Martin", 25)).toBe("Martin tu bono es de $15.000");
        expect(salario("Diego", 15)).toBe("Diego tu bono es de $10.000");

    });
});

describe('numPar', function (){
    it('Debería retornar true solo si es numero par, caso contrario false ', function(){
        expect(numPar(2)).toBe(true);
        expect(numPar(3)).toBe(false);
        expect(numPar(4)).toBe(true);
        expect(numPar(12)).toBe(true);
    });
});

describe('numImpar', function (){
    it('Debería retornar true solo si es numero Impar, caso contrario false ', function(){
        expect(numImpar(2)).toBe(false);
        expect(numImpar(3)).toBe(true);
        expect(numImpar(4)).toBe(false);
        expect(numImpar(12)).toBe(false);
    });
});

describe('numPositivoNegativo', function (){
    it('Debería retornar el mensaje según corresponda', function (){
        expect(numPositivoNegativo(-2)).toBe('El numero es negativo')
        expect(numPositivoNegativo(-5)).toBe('El numero es negativo')
        expect(numPositivoNegativo(12)).toBe('El numero es positivo')
        expect(numPositivoNegativo(20)).toBe('El numero es positivo')
    });
});

describe('cambioPesos', function (){
    it('Debería hacer la conversión de moneda correspondiente', function (){
        expect(cambioPesos(50, "dólares")).toBe(18750)
        expect(cambioPesos(100, "dólares")).toBe(37500)
        expect(cambioPesos(50, "euros")).toBe(19150)
        expect(cambioPesos(100, "euros")).toBe(38300)
        expect(cambioPesos(18150, "pesos argentinos")).toBe(18150)
    });
});

describe('climaActual', function (){
    it('Debería recomendar según el clima actual', function (){
        expect(climaActual("Soleado")).toBe("El día está soleado puedes salir tranquilo!")
        expect(climaActual("Lluvioso")).toBe("Está lloviendo, sal con un impermeable!")
        expect(climaActual("Frio")).toBe("Si sales sin abrigo, te congelas!")
        expect(climaActual("Ventoso")).toBe("Hay mucho viento, sería bueno un rompe viento!")
    });
});

describe('vocales', function (){
    it('Debería retornar "Es vocal" las letras que sean vocales, caso contrario false', function (){
        expect(vocales('A')).toBe('Es vocal');
        expect(vocales('B')).toBe(false);
        expect(vocales('E')).toBe('Es vocal');
        expect(vocales('C')).toBe(false);
        expect(vocales('I')).toBe('Es vocal');
        expect(vocales('O')).toBe('Es vocal');
        expect(vocales('D')).toBe(false);
        expect(vocales('U')).toBe('Es vocal');
    });
});

describe('nValor', () => {
    it('Deberia retornar el promedio de los tres', ()=>{
        expect(nValor(100)).toEqual(75)
        expect(nValor(81)).toEqual(61)
        expect(nValor(431)).toEqual(324)
    })
})

describe('numMúltiplo', ()=>{
    it('Deberia devolver si el numero es multiplo', ()=>{
        expect(numMúltiplo(40, 2)).toBe("Son múltiplos")
        expect(numMúltiplo(181, 3)).toBe("No son múltiplos")
        expect(numMúltiplo(160, 4)).toBe("Son múltiplos")
        expect(numMúltiplo(555, 2)).toBe("No son múltiplos")
    })
})

describe('length',  ()=>{
    it('Deberia devolver true si str es mayor que 5', ()=>{
        expect(length('Hola Mundo')).toBe(true)
        expect(length('Hola')).toBe(false)
        expect(length('JavaScript')).toBe(true)
        expect(length('A')).toBe(false)
    })
})