'use strict';

let money,
    income = 'Фриланс',
    addExpenses = 'Коммуналка,Такси,Интернет,Продукты,Одежда',
    arr = addExpenses.split(','),
    deposit = true,
    mission = 20000,
    period,
    budgetDay = money/30;

    money = +prompt('Ваш месячный доход?',5000);

let showTypeOf = function(data){
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
}


/////////////////////////////////


arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у Вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?');


//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
let sum = 0;
function getExpensesMonth(){
     sum = amount1 + amount2;
}

getExpensesMonth();
console.log('Сумма всех обязательныз расходов за месяц: ' + sum);
//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
let accumulation;
function getAccumulatedMonth (){
    accumulation = money - sum;
}

getAccumulatedMonth();
console.log('Накопления за месяц: ' + accumulation);
//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
let accumulatedMonth = getAccumulatedMonth();
//Объявить функцию getTargetMonth. 
let getTargetMonth = function(){
    period = (Math.ceil(mission / accumulatedMonth));
};
getTargetMonth();
console.log('Период за который будет достигнута цель ' + period);

budgetDay =(Math.floor(accumulatedMonth/30));
console.log('Дневной бюджет составляет: ' + budgetDay);

let getStatusIncome = function(){
    if(budgetDay >= 1200){
        return('У вас высокий уровень дохода');
    }else if(budgetDay>=600){
        return('У вас средний уровень дохода');
    }else if(budgetDay >= 0){
        return('У вас низкий уровень дохода');
    }else if (budgetDay < 0 ){
        return('Что то пошло не так');
    }
};

console.log(getStatusIncome());






