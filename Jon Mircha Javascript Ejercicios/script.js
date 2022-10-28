
//JHON MIRCHA CURSO JAVASCRIPT - EJERCICIOS LÓGICA


// 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */


//primera opción

function holaMundo (name) {
    return name.length; 
  };
  
  console.log(holaMundo("Hola mundo")); //10
  
  
  //segunda opción
  
  function holaMundo1 (caracteres = "") {
    if (!caracteres) { //la cadena de texto está vacía
      return "No ingresaste datos";
    } else {
      return (`la cadena ${caracteres} tiene ${caracteres.length} caracteres`);
    }
  };
  
  console.log(holaMundo1("Hola Mundo")); //"la cadena Hola Mundo tiene 10 caracteres"
  
  
  // tercera opción
  
  const holaMundo2 = (caracteres1 = "") => (!caracteres1) ? "No ingresaste datos" : (`la cadena ${caracteres1} tiene ${caracteres1.length} caracteres`);
  
  console.log(holaMundo2("Hola Mundo")); //"la cadena Hola Mundo tiene 10 caracteres"
  
  
  
  
   /* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */
  
  //metodo slice
  //primera opción
  
   function text (cut) {
      return cut.slice(0,4); 
  };
  
  console.log(text("Hola mundo")); //"Hola"
  
  //segunda opción
  
  function text1 (cut1) {
    if (cut1 === "") {
      return "No ingresaste una cadena"
    } else 
      return cut1.slice(0,4);
  }
  
  console.log(text1("Hola Mundo")) //"Hola"
  
  
  //tercera opción
  
  const text2 = (cut2="", long = 4) => 
  (!cut2) //es una cadena vacía
  ? "No ingresaste una cadena" 
  : cut2.slice(0,long);
  console.log(text2("Hola Mundo")); //"Hola"
  
  
  
  
   /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
       miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */
  //metodo split
  
  // Primera opción
  
  function str (arr) {
    return arr.split(" ");
  };
  
  console.log(str("hola que tal")); //["Hola","que","tal"]
  
  // segunda opción
  
  function str1 (arr1) {
    if(arr1 === "") {
      return console.warn("la cadena está vacia");
    } else {
      return arr1.split(" ");
    }
  };
  
  console.log(str1("Hola que tal")); //["Hola","que","tal"]
  
  //tercera opción
  const str2 = (arr2 = "",transf = undefined) => 
  (!arr2) //la cadena de texto está vacía
  ? console.warn("No ingresaste una cadena") 
  : (transf === undefined) 
  ? console.warn("la cadena no está definida")
  : console.info(arr2.split(transf));
  
  str2("Hola que tal", " "); //["Hola","que","tal"]
  
  
  
  
   /* 4) Programa una función que repite un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */
  
  //repeticion es el texto a ingresar. rpt es el numero de veces a repetir. resolucion for
  const rep1 = function (repeticion = "",rpt = undefined) {
    if (repeticion === "") {
      return console.warn("No ingresaste el texto");
    if (rpt === undefined) {
      return console.error("No ingresaste ningún numero");
    }
  } if (rpt === 0) {
    return console.error("El número de veces no puede ser 0");
  } if (Math.sign(rpt) === -1)
    return console.error("No puede ser negativo");
    //arriba de uno 2 3 4 itera sobre el valor ingresado
    for (let i = 1; i <= rpt; i++) {
      console.log (`${repeticion},${rpt}`)
    }
  };
  rep1("Hola mundo",3); //"Hola mundo,3" "Hola mundo,3" "Hola mundo,3"
  
  
  
  
  // 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
  
        //primera opción
  
      function invertirCadena (invt) {
      let inv1 = invt.split("");
      let inv2 = inv1.reverse();
      let inv3 = inv2.join("");
      return inv3;
  };
  
  console.log(invertirCadena("Hola Mundo")); //"odnum aloH"
  
  //segunda opcion
  
  const invertirCadena1 = (invt1) => invt1.split("").reverse().join("");
  https://srv.buysellads.com/ads/click/x/GTND42JNCYAIL23LCYYLYKQNCYSDE2QECEAI6Z3JCYSDK53YCKSDL23KC67I523MCV7DT2JNCYSICK7ICY7IP2Q7HEYIK2JNF6ADC2JECTNCYBZ52K
  console.log (invertirCadena1("Hola Mundo")); //"odnum aloH"
  
  //tercera opción 
  
  const invertirCadena4 = (invt3 ="") => {
    (!invt3) //si es una cadena vacía
    ? console.warn("no ingresaste una cadena")
    : console.info(invt3.split("").reverse().join(""));
  };
    invertirCadena4("Hola mundo"); //"odnum aloH"
  
  
  
  
  // 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
  
    //opción uno
  
    function repeatMundo (rptM) {
      return rptM.match(/a/g).length;
    }
  console.log(repeatMundo("hola mundo adios mundo")); //2
  
   //opcion dos 
  const repeatMundo_ = rptM_ => rptM_.match(/a/g).length;
  console.log(repeatMundo_("hola mundo adios mundo")); //2
  
  //opción tres
  function contar (contarMundo, contarNum = 0) {
     let cont_ = contarMundo.split(" "); //array
    
     for(let i = 0; i < cont_.length; i++) {
      if (cont_[i] === "mundo") {
        contarNum += 1; 
      }
     }
     return contarNum;
  };
  console.log(contar("hola mundo adios mundo")); //2
  
  //opción cuatro
  const contador4 = (contadorMundo) => {
    let cont4 = contadorMundo.split(" ") //array
    
    let contRed4 = cont4.reduce((total, elemento) => {
      if (elemento === "mundo") {
        total += 1;
      };
      return total;
    }, 0)
     return contRed4;
  };
  console.log(contador4("hola mundo adios mundo")); //2
  
  //opción cinco
  
  const contador5 = (cadena_ = "", texto_ = "")  => {
    if(!cadena_ || !texto_) return console.warn("no ingresaste el texto ni la palabra");
    
    let i = 0;
    let contador = 0
    
    while(i !== -1) {
      i = cadena_.indexOf(texto_, i);
      if (i !== -1) {
        i++;
        contador++;
      };
    };
    return `${cadena_} se repite ${contador} veces`
  };
  console.log(contador5("hola mundo adios mundo", "mundo")); //"hola mundo adios mundo se repite 2 veces"
    
  
  
  
    // 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
  
  //opción uno
   const palindromo = (esUnPalindromo = "") => {
     const minusculas = esUnPalindromo.toLowerCase();
     const regularExpresion = /[^A-Za-z0-9]/g;
     
     const reemplazar = minusculas.replace(regularExpresion, "");
     const fraseInvertida = reemplazar.split(" ").reverse().join();
    
     if (minusculas === fraseInvertida) {
       return true;
     }; 
    return false;
   };
  console.log(palindromo("Salas")); //true
  
  //opción dos
   const palindromo1 = (esUnPalindromo1 = "") => {
     if (!esUnPalindromo1) return console.warn("no puede ser una cadena vacia")
     const minusculas1 = esUnPalindromo1.toLowerCase();
     const regularExpresion1 = /[^A-Za-z0-9]/g;
     
     const reemplazar1 = minusculas1.replace(regularExpresion1, "");
     const fraseInvertida1 = reemplazar1.split(" ").reverse().join();
    
     return (minusculas1 === fraseInvertida1) 
       ? console.info(`Sí es un palindromo, ${minusculas1} y ${fraseInvertida1} coinciden`) 
     : console.info("no es un palindromo")
   };
  palindromo1("Salas"); //"Sí es un palindromo, salas y salas coinciden"
  
  
  
  
  // 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5".
  
  //opción uno
  function eliminarPatronCaracteres (caracteres,patron) {
    
    let acumulador = "";
    for (let i = 0; i < caracteres.length; i++) {
      if (patron.indexOf(caracteres[i]) == -1) {
        acumulador += caracteres[i]; 
      } 
     }
   return acumulador;
  }
  console.log(eliminarPatronCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")) //"1, 2, 3, 4  5"
  
  //opción dos
  const caracteresEliminar = (texto = "", patron = "") => {
    (!texto)  
    ? console.warn("no puede ser un texto")
    : (!patron) 
    ? console.warn("no ingresaste un patron")
    : console.info(texto.replace(new RegExp(patron, "ig"), ""))
  }
  caracteresEliminar("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz"); //"1, 2, 3, 4 y 5"
  
  
  
  
  //9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
  
  //opción uno
  
  const numeroAleatorio = (minimo = 501,maximo = 600) => {
    const diferencial = maximo - minimo;
    const numAleatorio = Math.floor(Math.random() * (diferencial + 1)); //50
    return minimo + numAleatorio //501 + numAleatorio para que esté en rango
  };
  console.log(numeroAleatorio()); //595
  
  //opción dos
  const numeroAleatorio1 = () => Math.round((Math.random() * 100) + 500);
  console.log(numeroAleatorio1()); //577
  
  
  
  
  //10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.
  
  //opción 1
  const capicua = (numeroCapicua) => {
    if(numeroCapicua === "" || numeroCapicua <= 0 || typeof numeroCapicua !== "number") console.warn(`El valor ingresado ${numeroCapicua} no es correcto. Debe ingresar un número mayor a cero y no negativo`);
   const stringNumber = String(numeroCapicua).split("").reverse().join("");
   if (numeroCapicua === Number(stringNumber)) {
     return true;
   }
    return false;
  };                    
  console.log(capicua(2002)); //true
  
  //opción 2
  const capicua1 = (numeroCapicua1 = 0) => {
    if (!numeroCapicua1) return console.warn("No ingresaste un número");
    if(typeof numeroCapicua1 !== "number") return console.error(`${numeroCapicua1} debe ser un Número.`)
    
    numeroCapicua1 = numeroCapicua1.toString();
    let numCap = numeroCapicua1.split(" ").reverse().join();
    return (numeroCapicua1 === numCap)
    ? console.info(`${numeroCapicua1} si es un número capicua`)
    : console.info(`${numeroCapicua1} no es un número capicua`)
    
  }
  capicua1(2002); //true
  


  
  //11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
  
  //opción 1
  const factorial = (numeroFactorial) => {
    if(numeroFactorial === 0 || numeroFactorial === 1) console.warn("no se puede factorizar")
    
    let num = numeroFactorial //5
    
    while(numeroFactorial > 1) {
       numeroFactorial--//4 3 2 1
      num *= numeroFactorial //num = num * numeroFactorial = 5 * 4 = 20, 20 * 3 = 60, 60 * 2 = 120, 120 * 1 = 120
    }
    return num;
    
  };
  console.log(factorial(5)); //120
  
  //opcion 2 
  const factorialFor = (numeroFactorialFor) => {
    if(numeroFactorialFor <= 1) console.warn("no se puede factorizar");
     
    for (let i = numeroFactorialFor - 1; i >= 1; i--) {
      numeroFactorialFor *= i //numFactorialFor = numFactorialFor * i
    }
    return numeroFactorialFor;
  }
  console.log(factorialFor(5)) //120
  
  //opción 3
  const factorial3 = (factorialNumero3 = undefined) => {
    if (!factorialNumero3 || typeof factorialNumero3 !== "number") return console.warn("Debe ser un número");
    if(factorialNumero3 === 0 || Math.sign(factorialNumero3) === -1)  return console.error("no puede ser 0 ni negativo");
    
    let number = 1;
    
    for (let i = factorialNumero3; i > 1; i--) {
      number *= i;
    }
      return console.info(`El factorial de ${factorialNumero3} es ${number}`);
  }
  factorial3(5); //120
  
  
  
  
  //12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.
  
  const numeroPrimo = (numPrimo) => {
    if(numPrimo <= 1 || typeof numPrimo !== "number") console.error("Debe ingresar un número mayor a 1")
    let raizCuadrada = Math.floor(Math.sqrt(numPrimo)) + 1;
    
    for (let i = 2; i < raizCuadrada; i++) {
        if (numPrimo % i === 0) { //no es primo
          return  false;
        };
    };
    return true; //es distinto de 0 numPrimo % i !== 0 , es primo
  };
  
  try {
  console.log(numeroPrimo(7)) //es primo - returna true
  } catch (e) {
    console.log(`error: ${e.message}`)
  } finally {
    console.log("finally")
  }
  
  //opción 2
  const numeroPrimo1 = (numPrimo1 = undefined) => {
    if (numPrimo1 === undefined) return console.warn("No puede estar vacío");
    if (numPrimo1 === 0 || numPrimo1 === 1) return console.warn("No puede cero ni uno");
    if (typeof numPrimo1 !== "number") return console.warn("Debe ser un número");
      if(Math.sign(numPrimo1) === -1) return console.warn("No puede ser negativo");
    
    let numeroP = false
    
    for (let i = 2; i < numPrimo1; i++) {
      if (numPrimo1 % 2 === 0) {
        numerP = true //no es primo
        break; //rompes el for
      }
    }
    return (numeroP) 
    ? console.log(`El ${numPrimo1} NO es primo`) //true
    : console.log(`El ${numPrimo1} SI es primo`) //false
  }
    numeroPrimo1(7); //true - es primo
  



  //13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.
  
  //opción uno
  function parImpar (numeroParImpar = undefined) {
    if (typeof numeroParImpar !== "number" || numeroParImpar <= 0 || !numeroParImpar) return console.warn("Debe ser un número mayor a cero");
    
    if (numeroParImpar % 2 === 0) {
      return `el ${numeroParImpar} es par`;
    };
    return `el ${numeroParImpar} es impar`;
   };
  console.log(parImpar(29)); //impar
  
  //opción 2
  const parImpar1 = (numeroParImpar1) => (numeroParImpar1 % 2 === 0) ? `el ${numeroParImpar1} es par` : `el ${numeroParImpar1} es impar`
  
  console.log(parImpar1(29)); //impar
  



  //14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.
  
  const gradosCF = (celcius = 0) => {
    if (typeof celcius !== "number") return console.error("Debe ser un número");
    let celciusAfahrenheit = (celcius * 9/5) + 32; //(0 °C × 9/5) + 32 = 32 °F
    let fahrenheitAcelcius = (celciusAfahrenheit - 32) * 5/9; //(32 °F − 32) × 5/9 = 0 °C
    return `celcius a fahrenheit es ${celciusAfahrenheit}°F y fahrenheit a celcius es ${fahrenheitAcelcius}°C`;
  };
  
  try {
    console.log(gradosCF()); //"32°F" 0°C
  } catch (e) {
    console.log(`error: ${e.message}`)
  };
  
  
  
  
  //15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
  
  //opción uno
  const convertir = (numeroConvertido = undefined, base = 2) => {
    if (typeof numeroConvertido !== "number" || numeroConvertido === undefined ) return console.warn("Debe ser un número");
   const binarioDecimal = parseInt(numeroConvertido,base); //binario a decimal 4
   const decimalBinario = binarioDecimal.toString(base); //decimal a binario 100
  const num = Number(decimalBinario);
  return `Base binaria ${numeroConvertido} base 2 devuelve decimal ${binarioDecimal} base 10. Viceversa, decimal ${binarioDecimal} base 10 devuelve ${num} base 2`;
  };
  
  console.log(convertir(100));
  
  //opción dos
  const convertir1 = (numeroConvertido1 = undefined, base1 = undefined) => {
    if (typeof numeroConvertido1 !== "number" || numeroConvertido1 === undefined ) return console.warn("Debe ser un número");
  if (typeof base1 !== "number" || !base1 ) return console.warn("Debe ser un número");
    
    if (base1 === 2) { //binario a decimal
      return `${numeroConvertido1} base ${base1} : ${parseInt(numeroConvertido1,base1)} base 10`
    } else if (base1 === 10) { //decimal a binario
      return `${numeroConvertido1} base ${base1} : ${numeroConvertido1.toString(base1)} base 2`
    } else { //cualquier otro número que su base no sea 2 o 10
      return console.error("La base no es válida")
    }
  
  };
  
  console.log(convertir1(100,2));
  
  
  
  
  //16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
  
  const aplicarDescuento = (cantidad = undefined, descuento = undefined) => {
    if (typeof cantidad !== "number" || !cantidad || cantidad <= 0) return console.warn("debe ser un número positivo");
    if (typeof descuento !== "number" || descuento === undefined || descuento <= 0) return console.warn("debe ser un porcentaje positivo")
    
    const total =  cantidad - (cantidad * descuento/100);
    return console.info(`el total después de aplicar el descuento es ${total} `)
  };
  
  aplicarDescuento(1000,20);
  
  
  
  
  //17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
  
  //opción uno
  const date = () => {
   const fechaAntigua = new Date(1984,4,23).getFullYear();
   const fechaActual = new Date().getFullYear() - fechaAntigua;
   return fechaActual;
  }
  console.log(date()); //38
  
  //opción dos
  const anios = (fecha = undefined) => {
    if (!fecha) return console.warn("El valor no puede estar vacío");
    if (!(fecha instanceof Date)) return console.warn("Debe ser una fecha actual");
    
    let fechaActual1 = new Date().getTime() - fecha.getTime() //mls años desde 1970 - mls de 1984
    let aniosMilisegundos = 1000 * 60 * 60 * 24 * 365; //mls en un año 
    let resultadoEnAnios = Math.floor(fechaActual1 / aniosMilisegundos); //38
    
    return (Math.sign(resultadoEnAnios) === -1) //valores negativos - años que no llegaron aún. 2084
    ? console.info(`Faltan ${Math.abs(resultadoEnAnios)} años para el ${fecha.getFullYear()}.`)
    : (Math.sign(resultadoEnAnios) === 1) //valor válido que ya pasó
    ? console.info(`Han pasado ${resultadoEnAnios} años desde ${fecha.getFullYear()}.`)
    : console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
  }
  anios(new Date(1984,4,23)); //38
  
  
  
  
  //18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
  
  const contarLetras = (vocalesConsonantes) => {
    let letrasMinusculas = vocalesConsonantes.toLowerCase();
    let contadorVocales = 0;
    let contadorConsonantes = 0;
    
    for (let el of letrasMinusculas) {
      if(/[aeiou]/.test(el)) {
        contadorVocales++;
      }
      if(/[bcdfghjklmnpqrstwyz]/.test(el)) {
        contadorConsonantes++
      }  
    }
   
    return {
    vocalesConsonantes: vocalesConsonantes,  //shorthand vocalesConsonantes
      contadorVocales: contadorVocales,                   //contadorVocales
      contadorConsonantes: contadorConsonantes            //contadorConsonantes
   } 
  }
  const {vocalesConsonantes,contadorVocales,contadorConsonantes} = contarLetras("Hola Mundo");
  console.log(vocalesConsonantes,contadorVocales,contadorConsonantes)
  
  
  
  //19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
  
  function validarNombre (nombreValido = "") {
    if(typeof nombreValido !== "string" || !nombreValido) return console.warn("debe ingresar un nombre válido");
  const regex = /^[A-Za-záéíóúñÑÁÉÍÓÚ\s]+$/g;
    return regex.test(nombreValido)
           ? `el nombre ingresado ${nombreValido} es correcto` 
           : `el nombre ingresado ${nombreValido} es incorrecto`
   
  };
  console.log(validarNombre("Jonathan MirCha"));
  
  
  
  
  //20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
  
  const emailValido = (email = "") => {
     if (!email || typeof email !== "string") return console.warn("Debe ingresar su correo");
    
    const regex = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i;
    let emailValidado = regex.test(email);
     
    return (emailValidado) 
    ? console.info(`el email ${email} es correcto`)
    : console.info(`el email ${email} no es correcto`)
     
  };
  emailValido("jonmircha@gmail.com");
  
  
  
  
  //21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
  
  const arrayAlCuadrado = (arr = undefined) => {
    if (!arr) return console.warn("Debe ingresar valores numéricos");
    if (!(arr instanceof Array)) return console.error("Debe ingresar un array de números");
     if (arr.length === 0) return console.warn("El arreglo está vacío");
    
    const numAlCuadrado = arr.map((el) => {
        return Math.pow(el,2);    
    });
    
    return numAlCuadrado; //[1, 16, 25]
   
  };
  
  const [num1,num2,num3] = arrayAlCuadrado([1, 4, 5]); //[1, 16, 25] desestructurando
  console.log(num1,num2,num3) //1 16 25
  
  
  
  
  //22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
  
  //opción 1 
  const numerosAltosBajos = (arrayValues) => {
    if(!arrayValues) return console.warn("Debe ser un arreglo de números");
   if(arrayValues.length === 0) return console.warn("El arreglo no puede estar vacío");
   if (!(arrayValues instanceof Array)) return console.error("Debe ser un array");
    //const [num1,num2,num3,...numeros] = arrayValues  desestructurando
    
    const valueMax = Math.max(...arrayValues);
    const valueMin = Math.min(...arrayValues);
    return `el valor máximo es ${valueMax} y el mínimo es ${valueMin}`
    
  };
  //const [value1,value2] = numerosAltosBajos([1, 4, 5, 99, -60]); //[99,-60]
  console.log(numerosAltosBajos([1, 4, 5, 99, -60]));
  
  //opción 2
  const valuesMaxMin = ([...numeros]) => {
   const valueMax = Math.max(...numeros);
    const valueMin = Math.min(...numeros);
    return [valueMax,valueMin];
  
  };
  console.log(valuesMaxMin([1, 4, 5, 99, -60])); //[99,-60]
  
  
  
  
  //23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
  
  //opción 1
  const arrayObject = (arr) => {
    let numPares = [];
    let numImpares = [];
    
    for(let el of arr) {
      if(el % 2 === 0) { //pares
        numPares.push(el)
      } else { //impares
        numImpares.push(el)
      }
    }
    
    return { numPares: numPares, numImpares: numImpares } //objeto
  };
  const {numPares,numImpares} = arrayObject([1,2,3,4,5,6,7,8,9,0]);
  console.log(numPares,numImpares)
  
  //opcion 2
  const arrayObjeto = (arreglo = undefined, pares = [],impares = []) => {
    if(!arreglo || arreglo.length === 0) return console.warn("Debe ser un arreglo de números");
    if(!(arreglo instanceof Array)) return console.warn("Debe ser un arreglo");
    
    for(let el of arreglo) {
      if(typeof el !== "number") {
        console.warn(`El valor ingresado ${el} no es un número`);
      };
    };
    
    arreglo.filter(el => {
      (el % 2 === 0) 
       ? pares.push(el)
       : impares.push(el)
    });
    
    return {  //shorthand
      pares,
      impares
    };
  };
  console.log(arrayObjeto([1,2,3,4,5,6,7,8,9,0]));
  
  
  
  
  //24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7,5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
  
  //opción 1
  const ordenamiento = (arrayOrdenado = undefined) => {
    if (!arrayOrdenado || arrayOrdenado.length === 0) return console.warn("debe ser un array y no puede estar vacío");
    if(!(arrayOrdenado instanceof Array)) return console.warn("solo se acepta un array de números");
    
    for (let i = 0; i < arrayOrdenado.length; i++) {
      if(typeof arrayOrdenado[i] !== "number") {
        return console.error("Solo se aceptan números")
      };
    };
    
    const ascendente = [...arrayOrdenado].sort((a,b) => a - b); //copia del arreglo spread
    const descendente = [...arrayOrdenado].sort((a,b) => {
      return b - a
    }); //copia del arreglo spread
    //console.log(arrayOrdenado) //arreglo original, no se modifica
    return {
      ascendente: ascendente,
      descendente: descendente
    };
    
  };
  console.log(ordenamiento([7,5,7,8,6]));
  
  //opcion 2
  const ordenamiento1 = (arrayOrdenado = undefined) => {
    if (!arrayOrdenado || arrayOrdenado.length === 0) return console.warn("debe ser un array y no puede estar vacío");
    if(!(arrayOrdenado instanceof Array)) return console.warn("solo se acepta un array de números");
    
    for (let el of arrayOrdenado) {
      if(typeof el !== "number") {
        return console.error("Solo se aceptan números")
      };
    };
    
    return console.info({
      arrayOrdenado,
      asc: arrayOrdenado.map(el => el).sort(),
      desc: arrayOrdenado.map(el => el).sort().reverse()
    });
    
  };
  console.log(ordenamiento1([7,5,7,8,6]));
  



  //25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
  
  //opcion 0
  const duplicados = (arr) => {
    return arr.filter( (el,index) => {
      return arr.indexOf(el) === index
    });
  };
  console.log(duplicados(["x", 10, "x", 2, "10", 10, true, true])); //["x",10,2,"10",true]
  
  
  //opcion 1
  const duplicados_ = (arr) => {
    return arr.filter( (el,index,arreglo) => arreglo.indexOf(el) === index);
  };
  console.log(duplicados(["x", 10, "x", 2, "10", 10, true, true])); //["x",10,2,"10",true]
  
  
  //opcion 2
  const duplicados1 = (arr) => {
    const arregloSet = new Set(arr);
    return [...arregloSet];
  };
  const [valor1,valor2,...restoValores] = duplicados1(["x", 10, "x", 2, "10", 10, true, true]);
  console.log(valor1,valor2,restoValores);
  
  
  //opcion 3 
  const duplicados2 = (arr) => {
   return arr.reduce((acum,iterador) => {
      if (!acum.includes(iterador)) {
        acum.push(iterador)
      }
     return acum
     },[]);
  };
  console.log(duplicados2(["x", 10, "x", 2, "10", 10, true, true]));
  
  
  //opcion 4
  const duplicados3 = (arr = undefined) => {
    if(!arr || arr.length === 0) return console.warn("debe ser un arreglo y no puede estar vacío");
    if(arr.length === 1) return console.warn("Debe ser un arreglo de al 2 elementos")
    if(!(arr instanceof Array)) return console.warn("Valor incorrecto");
    
    let result = [];
    arr.forEach(el => {
      if(!result.includes(el)) {
        result.push(el);
      };
    });
    return result;
  };
  console.log(duplicados2(["x", 10, "x", 2, "10", 10, true, true]));
  
  
  
  
  //26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
  
  //opción 1
  const promedio = (arr) => {
    let acumulador = 0
    for(let i = 0; i < arr.length; i++) {
      acumulador += arr[i];
    };
  
    return {
      array: arr,
      promedioTotal: acumulador / arr.length
    }
  };
  const {array,promedioTotal} = promedio([9,8,7,6,5,4,3,2,1,0]); //4.5
  console.log(array,promedioTotal);
  
  
  //opción 2
  const promedio1 = (arr = undefined) => {
    if(!arr || arr.length === 0) return console.warn("Debe ser un array de números");
    if(!(arr instanceof Array)) return console.warn("No se reciben otros valores que no sean un array");
    if(arr.length === 1) return console.warn("El array debe tener al menos 2 elementos");
    
    for (let el of arr) {
      if (typeof el !== "number") {
        console.error("El array sólo acepta números")
      };
    };
    
    const sumaTotal = arr.reduce((acumulador,iterador) => {
      return acumulador += iterador
    });
    
    return `El valor de sumar todos los elementos del array es ${sumaTotal} y su promedio es: ${sumaTotal / arr.length}`; 
  };
  console.log(promedio1([9,8,7,6,5,4,3,2,1,0])); //4.5
  
  
  
  
  /*27) Programa una clase llamada Pelicula.
  
  La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
    - Todos los datos del objeto son obligatorios.
    - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
       7 restantes números.
    - Valida que el título no rebase los 100 caracteres.
    - Valida que el director no rebase los 50 caracteres.
    - Valida que el año de estreno sea un número entero de 4 dígitos.
    - Valida que el país o paises sea introducidos en forma de arreglo.
    - Valida que los géneros sean introducidos en forma de arreglo.
    - Valida que los géneros introducidos esten dentro de los géneros 
       aceptados*.
    - Crea un método estático que devuelva los géneros aceptados*.
    - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
      decimal de una posición.
    - Crea un método que devuelva toda la ficha técnica de la película.
    - Apartir de un arreglo con la información de 3 películas genera 3 
      instancias de la clase de forma automatizada e imprime la ficha técnica 
      de cada película.
  
  * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.*/
  
  class Pelicula {
    constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
      this.id = id;
      this.titulo = titulo;
       this.director = director;
      this.estreno = estreno;
      this.pais = pais;
      this.generos = generos;
      this.calificacion = calificacion;
      
      this.validarIMDB(id);
      this.validarTitulo(titulo);
      this.validarDirector(director);
       this.validarEstreno(estreno);
       this.validarPais(pais)
      this.validarGeneros(generos)
      this.validarCalificacion(calificacion)
      
    }
    
    static get listaGeneros() {
      return ["Action", "Adult", "Adventure", "Animation", "Biography"]
    }
    
    static generosAceptados() {
      return console.info(`los generos aceptados son:  ${Pelicula.listaGeneos.join(",")})`)
    }
    
    validarCadena(propiedad,valor) {
      if(!valor) return console.warn(`${propiedad} no tiene valor.`);
      if(typeof valor !== "string") return console.warn(`el ${valor} debe ser un string`);
        //(!(typeof valor === "string"))
      
      return true;
    }
    
     validarLongitudCadena(propiedad,valor, longitud) {
      if(valor.length > longitud) return console.error(`Se excede el número de caracteres permitidos. el número de caracteres permitidos es:  ${longitud}`);
       
       return true;
    }
    
    validarNumero(propiedad,valor) {
      if(!valor) return console.warn(`${propiedad} está vacío`);
      if(!(typeof valor === "number")) return console.error(`el ${valor} ingresado no es un número`) ;
      
      return true;
    }
    
    validarIMDB(id) {
      if(this.validarCadena("IMDB id",id)) {
        if(!(/^([a-z]){2}([0-9]){7}$/.test(id))) {
          return console.error(`IMDB id ${id} no es válido, debe tener 9 caracteres, los 2 primeros letras y los 7 restantes números`)
        }
      }
    }
  
  validarTitulo(titulo) {
      if(this.validarCadena("Titulo",titulo)) {
        this.validarLongitudCadena("Titulo",titulo,100)
      }
    }
    
    
    validarDirector(director) {
      if(this.validarCadena("Director",director)) {
        this.validarLongitudCadena("Director",director,50)
      }
    }
  
    
    validarEstreno(estreno) {
      if(this.validarNumero("Año de estreno",estreno)) {
        if(!(/^([0-9]){4}$/.test(estreno))) {
          return console.error(`año de estreno ${estreno} no es válido. Debe ser un número de cuatro digitos`)
        }
      }
    }
  
   validarArreglo(propiedad,valor) {
      if(!valor) return console.warn("Está vacío");
    if(!(valor instanceof Array)) return console.warn("El valor ingresado no es un arreglo");
    if(valor.length === 0) return console.warn("El valor está vacío");
    
    for (let el of valor) {
      if (typeof el !== "string") {
        console.error("El valor no es una cadena de texto");
      };
    };
     return true
   }
    
    validarPais(pais) {
      this.validarArreglo("Pais",pais) 
    }
    
    validarGeneros(generos) {
      if(this.validarArreglo("Géneros",generos)) {
        for (let el of generos) {
           if (!Pelicula.listaGeneros.includes(el)) {
             console.error("el genero no exsite")
             Pelicula.generosAceptados();
           }
          
        }
      } 
    }
    
     validarCalificacion(calificacion) {
   if(this.validarNumero("Calificación",calificacion))
        return (calificacion < 0 || calificacion > 10) 
          ? console.error("la calificación tiene que estar en un rango entre 0 y 10") 
          : this.calificacion = calificacion.toFixed(1)
     
    }
    
    fichaTecnica() {
      console.info(`Ficha Técnica = Título: ${this.titulo}; Director: ${this.director}; Año: ${this.estreno}; País: ${this.pais.join("-")}; Géneros: ${this.generos.join(",")}; Calificación: ${this.calificacion}; IMDB id: ${this.id} `)
    }
    
  }
  
  
  const film = new Pelicula({
      id:"tt5522552",
      titulo: "Batman",
      director: "Christopher Nolan",
      estreno: 2020,
      pais: ["USA"],
      generos: ["Action"],
      calificacion: 8.787
  });
  
  film.fichaTecnica()