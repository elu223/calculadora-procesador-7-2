function imprimirResultado(resultado) {
  let txt_res = document.getElementById("txt_res");
  txt_res.innerHTML = resultado;
}

function obtenerValores() {
  let valor1 = document.getElementById("valor1").value;
  let valor2 = document.getElementById("valor2").value;

  if (valor1 === "" || valor2 === "") {
    alert("Debe ingresar ambos valores");
    return null;
  }

  return {
    valor1: parseFloat(valor1),
    valor2: parseFloat(valor2)
  };
}

function sumar() {
  let valores = obtenerValores();
  if (!valores) return;

  let resultado = valores.valor1 + valores.valor2;
  imprimirResultado(resultado);
}

function restar() {
  let valores = obtenerValores();
  if (!valores) return;

  let resultado = valores.valor1 - valores.valor2;
  imprimirResultado(resultado);
}

function multiplicar() {
  let valores = obtenerValores();
  if (!valores) return;

  let resultado = valores.valor1 * valores.valor2;
  imprimirResultado(resultado);
}

function dividir() {
  let valores = obtenerValores();
  if (!valores) return;

  if (valores.valor2 === 0) {
    alert("No se puede dividir por 0");
    return;
  }

  let resultado = valores.valor1 / valores.valor2;
  imprimirResultado(resultado);
}

function borrar() {
  document.getElementById("valor1").value = "";
  document.getElementById("valor2").value = "";
  imprimirResultado("0");
}
