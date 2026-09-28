import PromptSync from "prompt-sync";
const prompt = PromptSync()
let celsios = ""
let conversor = ""
let NumeroParaComverter =[]
do{
    console.log("===Conversor de uidades===")
console.log("1. Celsius para Fahrenheit")
console.log("2. Fahrenheit para Celsius")
console.log("3. Quilômetros para Milhas")
console.log("4. Milhas para Quilômetros")
console.log("0. Sair")
 conversor = prompt("")
 switch (conversor)
 {
    case"1":
    celsios = prompt("Qual temperatura você quer converter para fahrenheit")
    let ConvetorFahrenheit = ((celsios * 1.8) + 32)
    console.log(`ºF:${ConvetorFahrenheit}`)
    break
    case"2":
    let fahrenheit = Number(prompt("Qual temperatura você quer converter para celsius"))
    let ConvertorCelsius = ((fahrenheit - 32) / 1.8)
    console.log(`ºF:${ConvertorCelsius}`)
    break
    case"3":
    let Quilômetros = Number(prompt("Quantos Quilômetros você quer converter para Milhas"))
    let calculoMilhas = Quilômetros* 0.6214
    console.log(`Milhas:${calculoMilhas}`)
    break
    case"4":
    let Milhas = Number(prompt("Quantos Milhas você quer converter para Quilômetors"))
    let calcularQuilomeros = Milhas* 1.60934
    console.log(`Quilômetors:${calcularQuilomeros}`)
    break
 }
}
while(conversor !== "0")