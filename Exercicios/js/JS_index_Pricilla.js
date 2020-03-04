function funcaoAlert() {
    alert('Oi, click no próximo botão')
}

function funcaoConfirm() {
    confirm('Click no próximo botão também, ok?')
}

function funcaoPrompt() {
    var frase = prompt("Digite algo");
    alert(frase);
}

function trocarNome(){
    var novoNome = prompt("Digite seu nome: ")
    botaotroca.textContent = "Olá " + novoNome + " como vai?"
}

function funcaoCriaTextArea(){
    var elementoPai = document.getElementById("elementoPai")
    var elementoMeninos = document.createElement("textArea")
    elementoPai.appendChild(elementoMeninos)
}

