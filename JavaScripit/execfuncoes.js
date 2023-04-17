/** function Escrevameunome(nome){
    console.log ("Meu nome é " + nome)

}
Escrevameunome("henrique")
Escrevameunome("rogerio")

function verificarIdade(idade){
    if(idade < 18){
        console.log("menor de idade")
    }else{
        console.log("Maior de idade")
    }
}

verificarIdade(17) **/

function aplicarDesconto (valor, desconto){
return (valor - (valor * (desconto / 100)))
}
function aplicarjuros (valor, juros){
    return (valor + (valor * (juros / 100)))
}


const precoEtiqueta = 100;
const formaPagamento = 4;

if(formaPagamento === 1){
    console.log(aplicarDesconto(precoEtiqueta,10 ))
}else if (formaPagamento === 2){
    console.log(aplicarDesconto(precoEtiqueta, 15))
}else if (formaPagamento === 3){
    console.log(precoEtiqueta)
}else{
    console.log(aplicarjuros(precoEtiqueta, 10))
}

console.log (200 & 0.10)
console.log (10/100)