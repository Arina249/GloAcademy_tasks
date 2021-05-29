'use strict';

let money = 2000;
let income = 'Фриланс';
let addExpenses = 'Коммуналка,Такси,Интернет,Продукты,Одежда';
let arr = addExpenses.split(',');
let deposit = true;
const mission = 800;
const period = 5;
let budgetDay = money/30;

console.log('Тип данных money: ' + typeof money);
console.log('Тип данных income: ' + typeof income);
console.log('Тип данных deposit: ' + typeof deposit);
console.log('Длина строки addExpenses ' + addExpenses.length);
console.log('Период равен ' +period+' месяцев.' + ' Цель заработать ' + mission + ' долларов');
console.log('Строка приведенная к нижнему регистру :' + addExpenses.toLowerCase());

for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
}
console.log('Строка приведенная к нижнему регистру и разбитая на массив: ' + arr);

console.log('Дневной бюджет равен: ' + budgetDay);
