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
// 1

let nmb = prompt("Введи п'ятиразрядне число");
let arrayNumbs = nmb.split('');

if(arrayNumbs[0] === arrayNumbs[4] && arrayNumbs[1] === arrayNumbs[3]) {
    alert('Це число є паліндромом');
} else {
    alert('Це число не паліндром');
}

// 2 

let sumPurchases = +prompt('На яку суму буде здійснюватися покупка?');

if(sumPurchases < 200) {
    alert('Знижки не буде');
} else if (sumPurchases >= 200 && sumPurchases < 300) {
    alert(`Знижка 3%. Сума оплати зі знижкою ${sumPurchases - (sumPurchases * 0.03)}`)
} else if (sumPurchases >= 300 && sumPurchases < 500) {
    alert(`Знижка 5%. Сума оплати зі знижкою ${sumPurchases - (sumPurchases * 0.05)}`)
} else {
    alert(`Знижка 7%. Сума оплати зі знижкою ${sumPurchases - (sumPurchases * 0.07)}`)
}

// 3 

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0

for (let i = 0; i < 10; i++){
    let inputUser = +prompt(`Будь ласка, введіть число №${i + 1} з 10:`);
    if (!isNaN(inputUser)) {
        if (inputUser > 0) {
            positiveCount++;
        } else if (inputUser < 0) {
            negativeCount++;
        } else {
            zeroCount++;
        } 

        if (inputUser % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    } else {
        alert('Ви зробили помилку при вводі чисел. Спробуйте ще'); 
        i--;
    }
}

alert(`Позитивних чисел ${positiveCount}, негативних ${negativeCount}, нулів ${zeroCount}, парних ${evenCount}, непарних ${oddCount}`);

// 4

const today = new Date();
let dayNumber = today.getDay();
const arrDaysOfWeek = ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п\'ятниця', 'субота'];
let continueCycle;

do {
    let currentDayName = arrDaysOfWeek[dayNumber];
    let result = confirm(`Сьогодні ${currentDayName}. Хoчеш побачити наступний день?`); 
    continueCycle = result;
    dayNumber = (dayNumber + 1) % 7;
} while (continueCycle);

// Maximum
// 1

alert('Загадай число від 1 до 100');
let minNumber = 1;
let maxNumber = 100;
let found = false;

while(!found){

    let unknownNumber = Math.round((minNumber + maxNumber) / 2);
    let isCorrect = confirm(`Це твоє число ${unknownNumber}?`);
    
    if (isCorrect) {
        alert(`Вітаю! Твоє число ${unknownNumber}`);
        break
    } else {
        let biggerNumber = confirm(`Твоє число більше ${unknownNumber}?`);
        if (biggerNumber) {
            minNumber = unknownNumber + 1;
        } else {
            maxNumber = unknownNumber - 1;
        }
    }
}

// 2 

for (let i = 2; i <= 9; i++){
    for (let x = 1; x <= 10; x++) {
        let result = i * x;
        let answer = confirm(`${i} * ${x} = ${result}`);
        if(answer) {
            confirm(`${i} * ${x} = ${result}`);
        } else {
            break;
        }
    }
}

// 3

let dayToday = +prompt("Введіть день:");
let monthToday = +prompt("Введіть місяць:");
let yearToday = +prompt("Введіть рік:");
const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const isLeapYear = (yearToday % 4 === 0 && yearToday % 100 !== 0) || yearToday % 400 === 0;

if (isLeapYear) {
    daysInMonth[2] = 29;
}

dayToday++;

if (dayToday > daysInMonth[monthToday]) {
    dayToday = 1; 
    monthToday++; 
}

if (monthToday > 12) {
    monthToday = 1; 
    yearToday++;  
}

alert(`Наступна дата: ${dayToday}.${monthToday}.${yearToday}`);