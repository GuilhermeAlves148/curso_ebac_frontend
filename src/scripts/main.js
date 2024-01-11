document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('calculadora').addEventListener('submit', function(evento) {
        evento.preventDefault();

        let adicao1 = document.getElementById('adicao-1').value;
        adicao1 = parseInt(adicao1);
        let adicao2 = document.getElementById('adicao-2').value;
        adicao2 = parseInt(adicao2);

        let resultadoAdicao = document.getElementById('result-adicao').value;
        resultadoAdicao = parseInt(adicao1 + adicao2);

        console.log(resultadoAdicao);
        document.getElementById('result-adicao').innerText = resultadoAdicao;
        document.querySelector('.result').style.display = 'block';





        let subtracao1 = document.getElementById('subtracao-1').value;
        subtracao1 = parseInt(subtracao1);
        let subtracao2 = document.getElementById('subtracao-2').value;
        subtracao2 = parseInt(subtracao2);

        let resultadoSubtracao = document.getElementById('result-adicao').value;
        resultadoSubtracao = parseInt(subtracao1 - subtracao2);

        console.log(resultadoSubtracao);
        document.getElementById('result-subtracao').innerText = resultadoSubtracao;
        document.querySelector('.result').style.display = 'block';
    })
})