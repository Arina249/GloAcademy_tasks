'use strict';

let money;
let income = 'Фриланс';
let addExpenses = 'Коммуналка,Такси,Интернет,Продукты,Одежда';
let arr = addExpenses.split(',');
let deposit = true;
const mission = 20000;
let period;
let budgetDay = money/30;

//console.log('Тип данных money: ' + typeof money);
//console.log('Тип данных income: ' + typeof income);
//console.log('Тип данных deposit: ' + typeof deposit);
//console.log('Длина строки addExpenses ' + addExpenses.length);
//console.log('Период равен ' +period+' месяцев.' + ' Цель заработать ' + mission + ' долларов');
//console.log('Строка приведенная к нижнему регистру :' + addExpenses.toLowerCase());

for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
}
//console.log('Строка приведенная к нижнему регистру и разбитая на массив: ' + arr);
//console.log('Дневной бюджет равен: ' + budgetDay);

/////////////////////////////////

money = +prompt('Ваш месячный доход?');

arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у Вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?');

let budgetMonth = money - (amount1 + amount2);

period = (Math.ceil(mission/budgetMonth));
budgetDay =(Math.floor(budgetMonth/30));


console.log(typeof money);
console.log(typeof arr);
console.log(typeof deposit);
console.log( arr.split(','));
console.log('Бюджет на месяц ' + budgetMonth);
console.log('Цель будет достигнута за ' + period + ' месяцев');
console.log('Бюджет на день:' + budgetDay);


if(budgetDay >= 1200){
    console.log('У вас высокий уровень дохода');
}else if(budgetDay>=600){
    console.log('У вас средний уровень дохода');
}else if(budgetDay >= 0){
    console.log('У вас низкий уровень дохода');
}else if (budgetDay < 0 ){
    console.log('Что то пошло не так');
}


