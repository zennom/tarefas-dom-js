const novaTarefa = document.querySelector('[data-form-button]')

//criando o evento de clique 
novaTarefa.addEventListener('click',(evento) => {
    evento.preventDefault()

    const input = document.querySelector('[data-form-input]')
    const lista = document.querySelector('[data-list]')
    //pegando o input (o que sera digitado)
    const valor = input.value
    //criando o elemento li
    const tarefa = document.createElement('li')
    // colocando o efeito CSS no texto
    tarefa.classList.add('task')
    //colocando a variavel dentro de conteudo
    const conteudo = `<p class="content">${valor}</p>`//=templete string
    tarefa.innerHTML = conteudo
    //botão finalizar
    tarefa.appendChild(botao())
    //botao de excluir
    tarefa.appendChild(botaoExclui())
    //criando tarefa
    lista.appendChild(tarefa)
    //apagando mensagem do input
    input.value = ""
    
})


//criando o elemento botão
const botao =() =>{
    const botaoConclui = document.createElement('button')
    //texto no botão
    botaoConclui.innerHTML =('Finalizar')
    //criando o evento de click no botão 
    botaoConclui.addEventListener('click',concluirTarefa)

    return botaoConclui
}

//criar a função para concluir tarefa
const concluirTarefa = (evento) =>{
    //capturando o elemento botaoConclui
    const botaoConclui = evento.target

    /*vamos usar o parentElement para subir um nó
    na arvore do DOM (entrar no li) */
    const tarefaCompleta = botaoConclui.parentElement

    /*pegando a classe 'done' do CSS (para fazer o risquinho) */
    tarefaCompleta.classList.toggle('done')

}

//fazendo o botão de deletar
const botaoExclui = () =>{
    //criando o elemeto botão
    const deletaBotao = document.createElement('button')
    //colocando um texto no botão
    deletaBotao.innerHTML = 'deletar'
    //colocando o evento deletarTarefa
    deletaBotao.addEventListener('click',deletarTarefa)
    return deletaBotao
}
//criando a função para deletar a tarefa
const deletarTarefa = (evento) =>{
    //capturando o botão
    const deletarBotao = evento.target
    //usando o parentElement para subir um nó no
    //dom e pegar o <li>
    const tarefaCompleta = deletarBotao.parentElement
    //remover o texto da tarefa
    tarefaCompleta.remove()
    return deletarBotao
}