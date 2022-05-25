let firstNumber = Number(prompt('Введите первое число', ''));
const operation = prompt('Введите операцию', '');
let secondNumber = Number(prompt('Введите второе число', ''));

if (Number.isNaN(firstNumber) || Number.isNaN(secondNumber)) {
    alert('Некорректный ввод данных');
} else if (operation === '+') {
    alert('Ваш результат ' + (firstNumber + secondNumber));
} else if (operation === '-') {
    alert('Ваш результат ' + (firstNumber - secondNumber));
} else if (operation === '*') {
    alert('Ваш результат ' + (firstNumber * secondNumber));
} else if (operation === '/') {
    alert('Ваш результат ' + (firstNumber / secondNumber));
} else {
    alert('Такой операции не существует');
}

// Или

// if (isNaN(firstNumber) || isNaN(secondNumber)) {
//     alert('Некорректный ввод данных');
// } else if (operation === '+') {
//     alert('Ваш результат ' + (firstNumber + secondNumber));
// } else if (operation === '-') {
//     alert('Ваш результат ' + (firstNumber - secondNumber));
// } else if (operation === '*') {
//     alert('Ваш результат ' + (firstNumber * secondNumber));
// } else if (operation === '/') {
//     alert('Ваш результат ' + (firstNumber / secondNumber));
// } else {
//     alert('Такой операции не существует');
// }
