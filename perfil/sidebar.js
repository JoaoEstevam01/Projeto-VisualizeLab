//Efeito SiderBar-Open
document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

function salvar() {
    alert("Tudo foi salvo com sucesso!");
}

function cancelar() {
    if (confirm("Tem certeza que deseja cancelar?")) {
        alert("Tudo foi cancelado com sucesso!");
    }
}


