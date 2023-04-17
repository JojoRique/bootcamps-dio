/*class Pessoa{
    nome;
    idade;
    anoDeNscimento


    constructor(nome,idade){
        this.nome = nome
        this.idade = idade
        this.anoDeNscimento = 2022 - idade
    }

    descrever(){
        console.log(`Meu nome é  ${this.nome} e minha idade é ${this.idade}`)
    }
}


function compararPessoas (p1,p2){
    if (p1.idade > p2.idade){
        console.log(`${p1.nome} é mais velho que ${p2.nome}`)
    }else if (p2.idade > p1.idade){
        console.log(`${p2.nome} é mais velho que ${p1.nome}`)
    }else{
        console.log(`${p1.nome} e ${p2.nome} tem a mesma idade`)
    }
}

const vitor = new Pessoa ('Vitor', 18)
const renan = new Pessoa ('Renan', 30)

compararPessoas(vitor,renan)

class Carros{
    marca;
    cor;
    combustivelPorKM;

    constructor(marca,cor,gastoMedioPorKm){
        this.marca = marca
        this.cor = cor
        this.combustivelPorKM = gastoMedioPorKm
    }
    calcularGastoPercusso(distanciaEmKm, precoCombustivel){
        return distanciaEmKm * this.combustivelPorKM * precoCombustivel;
    }
    
}

const uno = new Carros('Fiat', 'Prata', 1/12)
console.log(uno.calcularGastoPercusso(70,5))
const palio = new Carros("Fiat","Palio",1/10)
console.log(palio.calcularGastoPercusso(70,5)) */

class Pessoa {
    nome;
    peso;
    altura;

    constructor(nome,peso,altura){
        this.nome=nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC(){
       return this.peso / (this.altura * this.altura)

    }
    classificarIMC(){
        const IMC = this.calcularIMC
if(IMC < 18.5){
   return ("Abaixo do peso")
} else if(IMC >= 18.5 && IMC < 25){
    return ("Peso normal")
} else if(IMC >= 25 && IMC <30){
    return ("Acima do peso")
} else if (IMC >= 30 && IMC < 40){
    return ("Obeso")
} else return  ("Obesidade morbida");
    }
}

const jose = new Pessoa("joão",70,1.75)
console.log(jose.classificarIMC())

const renan = new Pessoa ("Renan", 73, 1.75)
console.log(renan.classificarIMC())



