let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
    console.log(numero);
}

// Arrow Functions

numeros.forEach(numero=> console.log(numero));

//Número elevado ao quadrado
numeros.forEach(numero=> console.log(numero * numero));

// Listar somente os números pares
numeros.forEach(numero => {
    if(numero % 2 === 0) 
        console.log(numero);
    
})