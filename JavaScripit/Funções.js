function calcuIMC(peso,altura){
    return peso / Math.pow(altura, 2)
}

function classificarIMC(IMC){
    if(IMC < 18.5){
        return "Abaixo do peso"
     } else if(IMC >= 18.5 && IMC < 25){
         return "Peso normal"
     } else if(IMC >= 25 && IMC <30){
        return "Acima do peso"
     } else if (IMC >= 30 && IMC < 40){
         return "Obeso"
     } else {
        return "Obesidade morbida"
     }

}

function main (){
    const peso = 130;
const altura = 1.79;
const IMC = calcuIMC(peso,altura)
console.log(classificarIMC(IMC))
}

main();


