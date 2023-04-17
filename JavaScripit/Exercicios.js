/**const nota1 = 10;
const nota2 = 10;
const nota3 = 10;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media)

if(media < 5){
    console.log("Reprovado")
} else if (media  >=5 &&  media <= 7){
    console.log ("Recuperação")
} else{
    console.log("Passou de semestre")
}; 

--------------------------------------------------------------   **/
/**const peso = 130;
const altura = 1.79;
const IMC = peso / Math.pow(altura, 2)
console.log(IMC)

if(IMC < 18.5){
   console.log("Abaixo do peso")
} else if(IMC >= 18.5 && IMC < 25){
    console.log("Peso normal")
} else if(IMC >= 25 && IMC <30){
    console.log("Acima do peso")
} else if (IMC >= 30 && IMC < 40){
    console.log("Obeso")
} else (console.log("Obesidade morbida")); **/

const precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1))
}else if (formaPagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15))
}else if (formaPagamento === 3){
    console.log(precoEtiqueta)
}else{
    console.log(precoEtiqueta + (precoEtiqueta * 0.1))
}
