var altura = prompt("Informe a sua altura: ");
var peso = prompt("Informe o seu peso: ");
imc = peso / (altura * altura);

if (imc <= 18.5) {
  console.log("Underweight");
} else if (imc >= 18.5 && imc <= 24.9) {
  console.log("Normal weight");
} else if (imc >= 25 && imc <= 29.9) {
  console.log("Overweight");
} else if (imc >= 30) {
  console.log("Obesity");
}
