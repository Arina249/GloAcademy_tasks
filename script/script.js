'use strict';

let money,
    income = 'Фриланс',
    addExpenses = 'Коммуналка,Такси,Интернет,Продукты,Одежда',
    arr = addExpenses.split(','),
    deposit = true,
    mission = 20000,
    period,
    budgetDay;

    money = +prompt('Ваш месячный доход?',5000);

let showTypeOf = function(data){
    console.log(data, typeof(data));
};

for (let i = 0; i < arr.length; i++){
    arr[i] = arr[i].toLowerCase();
}

arr = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');

deposit = confirm('Есть ли у Вас депозит в банке?');

let expenses1 = prompt('Введите обязательную статью расходов?'),
    amount1 = +prompt('Во сколько это обойдется?'),
    expenses2 = prompt('Введите обязательную статью расходов?'),
    amount2 = +prompt('Во сколько это обойдется?');


//Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц

const getExpensesMonth = function(){
    return amount1 + amount2;
};
let ExpensesMonth = getExpensesMonth();

//Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
//Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth 
const getAccumulatedMonth = function(money,ExpensesMonth){
      return money - ExpensesMonth;
};
let AccumulatedMonth = getAccumulatedMonth(money,ExpensesMonth);
console.log('Накопления за месяц: ' + AccumulatedMonth );

//Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель,
// зная результат месячного накопления (accumulatedMonth) и возвращает результат

const getTargetMonth = function(mission,ExpensesMonth){
      return mission/AccumulatedMonth;
};
let TargetMonth = getTargetMonth(mission,AccumulatedMonth);

//budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
budgetDay =(Math.floor(AccumulatedMonth/30));

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

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

console.log('Сумма всех обязательных расходов:',ExpensesMonth);
console.log(addExpenses.toLocaleLowerCase().split(', '));
console.log('Период за который будет достигнута цель: ',Math.ceil(TargetMonth));
console.log('Дневной бюджет составляет: ' + budgetDay);
console.log(getStatusIncome());













