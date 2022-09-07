// Vamos criar as variáveis que serão usadas na aplicação (retiradas do script.js do stage04)

const screen1 = document.querySelector(".screen1") // como iremos usar o document.querySelector(".screen1") e (".screen2") ao longo da aplicação, deixamos eles guardados em variáveis
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

const randomNumber = Math.round(Math.random() * 10)
let i = 1;

// FUNÇÕES

function handleTryClick(event) { // como essa função será usada em um EventListener, passamos como argumento o "event" (poderia ser somente "e")
  event.preventDefault(); // por ser um formulário, o JS recarrega (o padrão dele é enviar o formulário, faz o submit dele) a página quando clicamos no botão | ao user esse comando, prevenimos que ele recarregue a página e faça o submit (preventDefault)

  const inputNumber = document.querySelector("#inputNumber") // pegamos do seletor CSS (#inputNumber) o documento input do html

  if(Number(inputNumber.value) == randomNumber) { // usamos o .value para pegar os valores de um input

    screen1.classList.add("hide") // essa linha pega o seletor CSS de classes (".scree1") e adiciona a classe ("hide") a div
    screen2.classList.remove("hide") // mesma lógica da linha acima, mas retirando a classe hide do screen2

    document.querySelector(".screen2 h2").innerText = `Parabéns! Você acertou em ${i} tentativas` // esse comando modifica o texto h2 do .screen2 para o texto que vem após o sinal de igual
  }

  inputNumber.value = "" // limparmos o campo para vazio quando o if acima não der certo 
  i++; //variável de controle | incrementa +1 no i para cada tentativa

}

function handleResetClick() { // função para voltar a tela inical ao clicarmos no botão "Tentar Novamente" na tela 2
  screen1.classList.remove("hide") 
  screen2.classList.add("hide")

  i = 1; // resetamos para 1 o número de tentativas
}

//Eventos

btnTry.addEventListener('click', handleTryClick) // com a função addEventListener(), passamos o evento no primeiro parâmetro (no caso, o click no botão) e a ação a ser tomada no segundo parâmetro (no caso, quando clicarmos no botão, a função handleTryClick é executada)

btnReset.addEventListener("click", handleResetClick) // evento para voltar para a tela inicial

document.addEventListener("keydown", function(e) { // função para que ao clicar enter no teclado o botão "Tentar Novamente" seja acionado | não precisamos fazer isso para o botão "Tentar" porque ele está em um formulário e em um formulário já vem esse funcionalidade de enter para acionar o botão
  
  if(e.key == 'Enter') {
    handleResetClick();
  }
})

