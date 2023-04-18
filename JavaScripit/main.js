const {gets, print} = require('./funcoes-auxiliares');


const numerosSorteados = [];

let maiorvalorEncontrado = 0

for (let i = 0; i < 5; i++) {
    const numerosSorteado = gets()
   if (numerosSorteado > maiorvalorEncontrado){
    maiorvalorEncontrado = numerosSorteado
   }
}
print(maiorvalorEncontrado)





/* for (let i = 0; i < numerosSorteados.length; i++) {
    const numerosSorteado = numerosSorteados[i]
    if (numerosSorteado > maiorvalor){
        maiorvalor = numerosSorteado
    }
}

print(maiorvalor)*/