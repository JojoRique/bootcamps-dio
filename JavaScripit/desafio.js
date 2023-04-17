


const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kmPorLitros = 10;
const DistanciaViagemKM = 100;
const istipoCombustivel = "Gasolina";

const litrosConsumidos = DistanciaViagemKM / kmPorLitros;
console.log("Será " +  litrosConsumidos.toFixed(2)  + " litros de  combustivel consumidos na viagem")

if(istipoCombustivel === "Etanol"){ 
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log("O valor gasto será " + valorGasto.toFixed(2) + " R$");
} else if(istipoCombustivel !== "Etanol") {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log("O valor gasto será " + valorGasto.toFixed(2) + " R$");
}






