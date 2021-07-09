// Задание номер-1

var name = prompt('Ваше имя?');
var surname = prompt("Ваша фамилия?");

alert('Здравствуйте, ' + name + " " + surname);
console.log('Здравствуйте, ' + name + " " + surname);

// Задание номер-2

var number1 = prompt("Первое число")
var number2 = prompt("Второе число")

if (number1 > number2){
    alert("Первое число больше");}
 if (number1 < number2)
{
    alert("Второе число больше");
}
if (number1 == number2)
 { 
    alert("Оба числа равны");
 }

//  Задание номер-3

var color = ("Зеленный","Красный","Желтый")
var color = prompt("Напишите цвет сфетофора")

if (color == "Зеленный"){
    alert("Идти");
}
if (color == "Красный"){
    alert("Стоять!");
}
if (color == "Желтый"){
    alert("Ждать...");
}