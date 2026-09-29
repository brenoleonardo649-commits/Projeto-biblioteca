import PromptSync from "prompt-sync"
const prompt = PromptSync()
let custos

do{
    console.log("===Planejandor de Viagem===")
console.log("1. Custo de Combustivel")
console.log("2. Tempo da Viagem")
console.log("3. Dividir despesas")
console.log("4. Converter reais para dólares")
console.log("0. Sair")
 custos = prompt("Escolha uma opção")
 switch (custos)
{
    case"1":
    let distancia = prompt("Qual a Distancia a percorrer?")
    let ConsumoDoCarro = prompt("Quanto o carro consome?")
    let PrecoLitro = prompt("Qaunto e o litro da gasulina?")
    let gastoTotal = distancia / ConsumoDoCarro * PrecoLitro
    console.log(`Custo de Combustível: R$ ${gastoTotal}`) 
    break
    case"2":
    let DistanciaPorHora = prompt("Qual a distancia a percorrer?")
    let velocidade = prompt("Qual a velocidade media?")
    let Tempo = DistanciaPorHora/velocidade
    console.log(`Tempo estimado de viagem: ${Tempo}`)
    break
    case"3":
    let despesas = prompt("Qual o custo das despesas?")
    let quantasPessoas = prompt("Número de pessoas")
    let divisaoDeDespesas = despesas / quantasPessoas
  
    if(quantasPessoas > 0)
         console.log(`Cada pessoa paga:R$ ${divisaoDeDespesas}`)
        else 
            console.log(`o numero de pessoas precisa ser maior que zero`)
    break
    case"4":
    let ValorEmReais = prompt("Qual o Valor em reais")
    let CotacaoDoDolar = prompt("Cotação do dólar (R$):")
    let conversaoEmDOlar = 1000 / 5.25
    console.log(`R$ ${ValorEmReais} Equivalem a US$ ${conversaoEmDOlar}`)
    break
    case "0":
    console.log("Boa Viagem! Até a Próxima")
    break
 }
}while (custos !== "0")