//Efeito de troca entre Entrar e Cadastrar-se

var formEntrar = document.querySelector('#Entrar')
var formCadastrar = document.querySelector('#Cadastrar')
var btnColor = document.querySelector('.btnColor')

document.querySelector('.btnEntrar')
    .addEventListener('click', function() {
        formEntrar.style.left = "25px"
        formCadastrar.style.left = "550px"
        btnColor.style.left = "0px"
});

document.querySelector('.btnCadastrar-se')
    .addEventListener('click', function() {
        formEntrar.style.left = "-550px"
        formCadastrar.style.left = "25px"
        btnColor.style.left = "110px"
});