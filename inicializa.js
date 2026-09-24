import PromptSync from "prompt-sync";
const prompt = PromptSync()
let opcao = ""
let biblioteca = []
do{
console.log("===Biblioteca pessoal===")
console.log("1. Cadastrar livro")
console.log("2.Listar livros")
console.log("3.Atualizar status de leitura")
console.log("4. Remover livro")
console.log("0.sair")
  opcao = prompt("")
    switch(opcao)
    {
        case"1":
        let titulo = prompt("Titulo do livro:")
        let autor = prompt("autor:")
        let genero = prompt("Gênero:")
        biblioteca.push ({titulo, autor, genero, statusLivro:"Quero ler"})
        console.log("Livro Cadastradao com sucesso!")
        break
        case"2":  
         for(let i= 0; i < biblioteca.length; i++)
        {
            var livros = biblioteca[i]
            console.log(`${i+1}.${livros.statusLivro}: ${livros.titulo} - ${livros.autor} - ${livros.genero}`)
    
        }
        if(biblioteca.length <= 1)
        {
            console.log()
        }else{
            console.log("Nenhum livro cadastrado")
        }
        break
        case"3":
        let numeroLivro = prompt("Número do livro:")
        let livrostatus= prompt("Novo status(Quero ler/Lendo/lido):")
        let livro = biblioteca[numeroLivro]
         livro.statusLivro=livrostatus
        console.log("staus atualizado com sucesso")
        break
        case"4":
        let livronumero = prompt("Número do livro:")
        biblioteca.splice(livronumero,1)
        console.log("livro removido com sucesso")
        break
    }
}
while(opcao !== "0")