let number = parseInt(prompt('Ingrese numero: '));

let firstName = prompt('Ingrese un nombre: ');

do{
  document.write(number + ' Este numero es menor que 10 <br>');
  number++
}while (number <= 9)

for (let i = 0; i < 10; i++) {
  document.write(number + i + ' Este numero es mayor que 9 <br>')
}

for (let x in firstName) {
  document.write(x += firstName + '<br>')
}

for (let letter of firstName) {
  document.write(letter + "<br>");
}
