function saludar(){
    console.log("Hola Mundo");
    alert("Hola mundo")
}

//Algoritmo que realice una suma entre dos valores ingresados por el usuario

function sumar(){
    //declarar las variables necesarias para la ejecución del algoritmo
    let n1 =0;
    let n2 =0;
    let suma =0;
    //solicitar y capturar los valores ingresados por el usuario 
    n1 = parseInt(prompt('Por favor ingrese el primer valor a sumar'));
    n2 = parseInt(prompt('Por favor ingrese el segundo vlor a sumar'));
    //realizar el procedimiento
    suma = n1 + n2 
    //Imprimir el resultado en pantalla al usuario
    console.log('El resultado de la suma es ' + suma)
    alert('El rresultado de la suma es ' + suma)
}

//Algoritmo que realice una suma, resta, multiplicación y división ingresados por el usuario

function operaciones(){
    let v1 = 0;
    let v2 = 0;
    let operacion = 0;

    v1 = parseInt(prompt('Por favor ingrese el primer valor a sumar'));
    v2 = parseInt(prompt('Por favor ingrese el segundo valor a sumar'))
    operacion = v1 + v2;
    alert('El resultado de la suma es ' + operacion);

    v1 = parseInt(prompt('Por favor ingrese el primer valor a restar'));
    v2 = parseInt(prompt('Por favor ingrese el segundo valor a restar'))

    operacion = v1 - v2;
    alert('El resultado de la resta es ' + operacion);

    v1 = parseInt(prompt('Por favor ingrese el primer valor a multiplicacion'));
    v2 = parseInt(prompt('Por favor ingrese el segundo valor a multiplicacion'))

    operacion = v1 * v2;
    alert('El resultado de la multiplicación es ' + operacion);

    v1 = parseInt(prompt('Por favor ingrese el primer valor a division'));
    v2 = parseInt(prompt('Por favor ingrese el segundo valor a division'))

    operacion = v1 / v2;
    alert('El resultado de la división es ' + operacion);

}

//Algoritmo que determine el cuadrado de un numero

function cuadrado(){
    let b1 = 0;
    let cuadrado = 0;

    v1 = parseInt(prompt('Por favor ingrese el primer valor a operar'));
    
    cuadrado = v1 **2 ;
    alert('El resultado del cuadrado del número es ' + cuadrado);

}

//Algoritmo que determine el area de un triangulo apartir de su base y altura

function area(){
    let c1 = 0;
    let c2 = 0;
    let area = 0;

    c1 = parseInt(prompt('Por favor ingrese la base del triángulo'));
    c2 = parseInt(prompt('Por favor ingrese la altura del triángulo'));

    area = c1 * c2 / 2;
    alert('El resultado del área es ' + area);
}

//Algoritmo que determine la medida en km, metros y cm de un valor dado en pulgadas

function longitud(){
    let pulg = 0;
    let cm = 2.54;
    let m = 0.0254;
    let km = 0.0000254;

    pulg = parseInt(prompt('Por favor ingrese el valor de pulgadas a convertir en centimetros'));
    longitud = pulg * cm;
    alert('El resultado de la convercion de pulgadas a centimetros es ' + longitud);

    pulg = parseInt(prompt('Por favor ingrese el valor de pulgadas a convertir en metros'));
    longitud = pulg * m;
    alert('El resultado de la convercion de pulgadas a metros es ' + longitud);

    pulg = parseInt(prompt('Por favor ingrese el valor de pulgadas a convertir en kilometros'));
    longitud = pulg * km;
    alert('El resultado de la convercion de pulgadas a kilometros es ' + longitud);
}

//Realizar algoritmo que pregunte al usuario a que moneda quiere convertir el COP entre dolar, euro, y yenes

function moneda(){
    let COP = 0;
    let dolar = 4414.5;
    let euro = 4740.5;
    let yen = 28.5;
    let conversion = 0;
    let moneda = ""
    COP = parseInt(prompt('Por favor ingrese el valor de COP que quiera convertir'));
    moneda = parseInt(prompt('Por favor ingrese a que tipo de moneda quiere hacer la conversion'));
    switch (moneda) {
        case 'dolar':
            conversion = COP * dolar; 
            console.log('La conversion de COP a Dolar es ' + conversion)
            alert('La conversion de COP a Dolar es ' + conversion);
            break;
        case 'euro':
            conversion = COP * euro;
            alert('La conversion de COP a Euro es ' + conversion);
            alert('La conversion de COP a Euro es ' + conversion);
            break;
        case 'yen':
            conversion = COP * yen;
            alert('La conversion de Cop a Yen es ' + conversion)
            alert('La conversion de COP a Euro es ' + conversion);
            break;
    }


}

//Algoritmo que determine si un numero es par o impar

function numparimpar(){
    let numero = 0;
    numero = parseInt(prompt('Por favor ingrese el numero'));
    if (numero % 2 == 0) {
        console.log("El numero es par");
        alert("El numero es par");
    } else {
        console.log("El numreo es impar");
        alert("El numero es impar")
    }
}
//Algoritmo que determine el mayor entre dos numeros ingresados por el usuario

function numeromayor(){
    let a = 0;
    let b = 0;
    a = parseInt(prompt('Por favor ingresar el primer numero'));
    b = parseInt(prompt('Por favor ingresar el segundo numero'));
    if (a > b) {
        console.log ('El primer numero es mayor');
        alert("El primer numero es mayor")
    } else {
        console.log("El segundo numero es mayor")
        alert("El segundo numero es mayor")
    }
}

//Algoritmo que determine el menor de 3 numeros ingresados

function menordetres(){
    let a = 0;
    let b = 0;
    let c = 0;
    a = parseInt(prompt('Por favor ingresar el primer numero'));
    b = parseInt(prompt('Por favor ingresar el segundo numero'));
    c = parseInt(prompt('Por favor ingresar el tercer numero'));

    if ((a==b) && (a==C)) {
        console.log ('Todos los numeros son iguales');
        alert("Todos los");
    }

    if ((a > b) && (a > c) ) {
        console.log ('El primer numero es mayor que el resto');
        alert("El primer numero es mayor que el resto");
    }
    if ((b > a) && (b > c)) {
        console.log ('El segundo numero es mayor que el resto');
        alert('El segundo numero es mayor que el resto');
    }
    if ((c > a) && (c > b)) {
        console.log ('El tercer numero es mayor que el resto');
        alert('El tercer numero es mayor que el resto');
}
}
//El colegio ABC reqeuiere un sistema que le permita validar a x estudiante si aprobo o reprobo X materia teniendo en cuenta que son 9 notas del 1 al 10 y se aprueba con una nota de 6.1

function promnotas(){
    let nota1, nota2, nota3, nota4, nota5, nota6, nota7, nota8, nota9 = 0
    let suma = 0
    let promedio = 0

    nota1 = parseInt(prompt('ingrese la nota 1'))
    nota2 = parseInt(prompt('ingrese la nota 2'))
    nota3 = parseInt(prompt('ingrese la nota 3'))
    nota4 = parseInt(prompt('ingrese la nota 4'))
    nota5 = parseInt(prompt('ingrese la nota 5'))
    nota6 = parseInt(prompt('ingrese la nota 6'))
    nota7 = parseInt(prompt('ingrese la nota 7'))
    nota8 = parseInt(prompt('ingrese la nota 8'))
    nota9 = parseInt(prompt('ingrese la nota 9'))

    suma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6 + nota7 + nota8 + nota9
    promedio = suma / 9

    if (promedio > 60.0) {
        alert('aprobo la materia ' + promedio);
    } else {
        alert('reprobo la materia ' + promedio);
    }

}
//Un individuo desea invertir su capital en un banco y requiere saber cuanto dinero ganara despues de N numero de años teniendo en cuenta que el banco paga un interes mensual del 0.7%

function invertircapital(){
    let inversion = 0
    let años = 0
    let intereses = 0

    inversion = parseInt(prompt('ingrese el valor que invirtio'))
    años = parseInt(prompt('ingrese los años en los que ha invertido'))

    intereses = (años * 12 ) * (inversion * 0.7)

    alert('el interes es de ' +intereses)

}