var calcularIMC = function (){
  var formulario = document.getElementById("formulario");

  var peso = +formulario.peso.value;
  var altura = +formulario.altura.value;

  var imc = peso / (altura * altura); //calculo do IMC
}
