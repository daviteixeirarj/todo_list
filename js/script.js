let contador = 0
const input = document.querySelector('input#input')
const buttonAdd = document.querySelector('div#add-task')
const buttonCleanInput = document.querySelector('div#clean')
const toDoList = document.querySelector('section#to-do')

const c_tasks = document.querySelector('span#c-tasks')
const c_done = document.querySelector('span#c-done')
const c_todo = document.querySelector('span#c-todo')
const rating = document.querySelector('span#rating')

//DEFININDO FUNÇÃO QUE LIMPA O INPUT
function cleanInput(){
    //ATRIBUINDO O VALOR VAZIO AO INPUT
    input.value = ''

    //FAZENDO O CURSOR RETORNAR AO INPUT AUTOMATICAMENTE SEM PRECISAR CLICAR
    input.focus()
}
//ATRIBUINDO A FUNÇÃO AO ELEMENTO E DEFININDO QUE SERÁ EXECUTADA AO CLICAR
buttonCleanInput.addEventListener('click', cleanInput)

function addTask(){
    //VERIFICANDO SE O INPUT NÃO ESTÁ VAZIO, INDEFINIDO OU NULO
    if ((input.value !== '') && (input.value !== undefined) && (input.value !== null)){
      //
      ++contador
      //DEFININDO ELEMENTO HTML QUE SERÁ CRIADO VIA JS

      let task = `
      <div id="${contador}" class="task " onclick="selectTask(${contador})">
          <div class="task-name">${input.value}</div>
          <div class="task_btn">
              <div class="task-check"></div>
                    <!--ATRIBUINDO A FUNÇÃO QUE EXCLUI O ITEM-->
              <div onclick="deleteTask(${contador})" class="task-del"></div>
          </div>
      </div>`
      //INCREMENTANDO A LISTA COM A NOVA TAREFA
      toDoList.innerHTML += task
      cleanInput()
      
      c_tasks.innerHTML ++
    }
}
//ATRIBUINDO AO BOTÃO 'ADD TASK' A FUNÇÃO DE MESMO NOME
buttonAdd.addEventListener('click', addTask)

//SELECIONAR
function selectTask(id){
  let task = document.getElementById(id)
  task.classList.toggle('selected')

  c_done.innerHTML ++
}

//CRIANDO A FUNÇÃO DE DELETAR O ITEM DA LISTA
function deleteTask(id){
  let task = document.getElementById(id)
  task.remove()
}
//FUNÇÃO ATRIBUÍDA DO CORPO DO HTML INJETADO VIA JS (LINHA 30)


//ATRIBUINDO À TECLA ENTER A MESMA FUNÇÃO ATRIBUÍDA AO EVENTO DE CLICK
document.addEventListener("keypress", function enter(e){
  if (e.key === "Enter"){
    buttonAdd.click()
    e.preventDefault()
  }
})