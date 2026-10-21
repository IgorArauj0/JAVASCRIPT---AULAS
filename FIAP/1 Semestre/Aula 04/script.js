function somar() {
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);

  let resultado = n1 + n2;
  document.getElementById('resultado').innerText = 'Resultado da soma: ' + resultado;
}

function subtrair() {
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);

  let resultado = n1 - n2;
  document.getElementById('resultado').innerText = 'Resultado da subtração: ' + resultado;
}

function multiplicar() {
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);

  let resultado = n1 * n2;
  document.getElementById('resultado').innerText = 'Resultado da multiplicação: ' + resultado;
}

function dividir() {
  let n1 = Number(document.getElementById('n1').value);
  let n2 = Number(document.getElementById('n2').value);

  if (n2 === 0) {
    document.getElementById('resultado').innerText = 'Erro: não é possível dividir por zero.';
    return;
  }

  let resultado = n1 / n2;
  document.getElementById('resultado').innerText = 'Resultado da divisão: ' + resultado;
}

function limpar() {
  document.getElementById('n1').value = '';
  document.getElementById('n2').value = '';
  document.getElementById('resultado').innerText = 'Resultado: ';
  document.getElementById('n1').focus();
}