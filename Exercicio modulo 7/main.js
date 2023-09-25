function validaNum() {
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;
    var mensagem = document.getElementById("mensagem");

    if (parseFloat(campoB) > parseFloat(campoA)) {
        mensagem.innerHTML = "Sucesso! o valor B é maior que o valor A.";
        mensagem.style.color = "green";
    } else {
        mensagem.innerHTML = "O valor B deve ser maior que o valor A. Por favor, digite outro valor.";
        mensagem.style.color = "red";
    }
}