'use strict';

// Minimum
// 1

let age = prompt('Скільти тобі років?');
if(age <= 11) {
    alert('ти ще дитина');
} else if (age >= 12 && age <= 17) {
    alert('ти підліток');
} else if (age >= 18 && age <=59) {
    alert('ти дорослий');
} else if (age >= 60) {
    alert('ти пенсіонер');
} else {
    alert('щось було введено невірно');
}

// 2

let number = +prompt('Введи будь-яке число від 1 до 9');

switch (number) {
    case 1:
        alert('!');
        break;
    case 2:
        alert('@');
        break;
    case 3:
        alert('#');
        break;
    case 4:
        alert('$');
        break;
    case 5:
        alert('%');
        break;
    case 6:
        alert('^');
        break;
    case 7:
        alert('&');
        break;
    case 8:
        alert('*');
        break;
    case 9:
        alert('(');
        break;
    case 0:
        alert(')');
        break;
    default:
        alert('треба було правильно читати умову');
}

// 3

let start = +prompt('Введи перше число з діапазону');
let end = +prompt('Введи друге число з діапазону');
let sum = 0;

for(let i = start; i <= end; i++) {
    sum += i;
}

alert(`Сума всіх чисел діапазону ${sum}`);

// 4

let firstNumber = +prompt('Введи перше число');
let secondNumber = +prompt('Введи друге число');
let min = Math.min(firstNumber, secondNumber);

for(let i = min; i >= 1; i--) {
    if(firstNumber % i === 0 && secondNumber % i === 0) {
        alert(`Найбільший спільний дільник чисел ${firstNumber} i ${secondNumber} буде число ${i}`);
        break
    }
}

// 5

let numb = +prompt('Введи число, щоб дізнатися всі його дільники');
let arrNumbers = [];

for(let i = 0; i <= numb; i++) {
    if(numb % i === 0) {
        arrNumbers.push(i);
    }
}

alert(`Всі дільники цього числа ${arrNumbers}`);

// Norma
1

let nmb = prompt("Введи п'ятиразрядне число");
let arrayNumbs = nmb.split('');

if(arrayNumbs[0] === arrayNumbs[4] && arrayNumbs[1] === arrayNumbs[3]) {
    alert('Це число є паліндромом');
} else {
    alert('Це число не паліндром');
}

// 2 

