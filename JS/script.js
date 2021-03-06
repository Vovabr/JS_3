//1. Выведите числа от 1 до 50 и от 35 до 8.

for(let a = 1; a <= 50; a++) {
    console.log(a);
}

for(let b = 35; b >= 8; b--) {
    console.log(b);
}



/*2. Выведите столбец чисел от 89 до 11 - воспользуйтесь циклом while и отделите числа тегом <br /> друг от друга, чтобы получить столбец, а не строку.*/

let  c = 89;

while(c >= 11) {
    document.write(c + '<br/>');
    c--;
}



//3. С помощью цикла найдите сумму чисел от 0 до 100.

let sum = 0;

for(let i = 0; i <= 100; i++) {
    sum += i;
}

console.log(sum);



/*4. Найдите сумму чисел в каждом числе от 1 до 5, например: в числе 3 сумма составляет 6
(1+2+3).*/

//let sum = 0;

for (let i = 1; i <= 5; i++) {

    sum = 0;

    for (let j = 1; j <= i; j++) {
        sum += j;
    }

    console.log(i + ': ' + sum);
}

let sum2 = 0;

for (let i = 1; i <= 5; i++) {
    sum2 += i;
    console.log(sum2);
}



/*5. Выведите чётные числа от 8 до 56. Решить задание через while и for.*/

let d = 8;

for(; d <= 56; d++) {
    if(d % 2 == 0) {
    console.log(d);
    }
}



/*6. Необходимо вывести на экран полную таблицу умножения (от 2 до 10) в виде:
2*2 = 4
2*3 = 6
2*4 = 8
2*5 = 10
...
3*1=3
3*2=6
3*3=9
3*4=12
...
Для решения задачи используйте вложенные циклы.*/

for (e = 2; e <= 10; e++) {
    console.log('Умножение на ' + e + ':')
    for (j = 1; j <= 10; j++) {
       console.log(e + ' * ' + j + ' = ' + (e * j));
    } 
 }

/*7. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50. Какое число получится? Посчитайте количество итераций, необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.*/

let m = 1000;
let count = 0;

for (; m >= 50; m = m/2, count++);

console.log(m, count);



/*8. Запустите цикл, в котором пользователю предлагается вводить число с клавиатуры, до тех пор, пока не будет введена пустая строка или 0. После выхода из цикла выведите общую сумму и среднее арифметическое введённых чисел. Если пользователь ввел не число, то вывести сообщение об ошибке ввода. При подсчете учесть, что пользователь может ввести отрицательное значение.*/

let sum1 = 0;
let count1 = 0;

for (;;) {
    let num = prompt('Введите число');

    if (num == '' || num == 0 || num == false) break;

    if (isNaN(num)) {
        alert('Нужно ввести число');
        continue;
    }

    sum1 += +num;
    count1++;
}

console.log(sum1, (sum1/count1));
    


/*9. Дана строка с числами разделенными пробелами «4 98 4 328 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57». Найдите самое большое и самое маленькое число в строке, используя цикл.*/

let numStr = '4 98 4 328 6 1 4 65 4 3 5 7 89 7 10 1 36 8 57';
let min, max;

let num = '';
for (let i = 0; i < numStr.length; i++) {
    if (numStr[i] != ' ') {
         num += numStr[i];
    }

    if (numStr[i] == ' ' || i == numStr.length-1) {
         num = +num;

        if (min == undefined) min = num;
        if (max == undefined) max = num;

        if (min > num) min = num;
        if (max < num) max = num;

        num = '';
    }
}

console.log(min, max);

// let a = 4;
// let b = 45;

// if (a > b) {
//     min = b;
//     max = a;
// } else {
//     max = b;
//     min = a;
// }

// console.log(min, max);



/*10. Дано произвольное целое число n. Написать программу, которая:
a. разбивает число n на цифры и выводит их на экран;
b. подсчитывает сколько цифр в числе n;
c. находит сумму цифр числа n;
d. меняет порядок цифр числа n на обратный.
Пример: вводится число 123: цифр в числе = 3; сумма = 6; обратный порядок 321.*/

let n = 159874;
let nStr = String(n);
let i = 0;
let summ = 0;
let nStrRev = '';

for(; i < nStr.length; i++) {
    console.log(nStr[i]);
    summ += +nStr[i];
    nStrRev += nStr[(nStr.length - 1) - i];
}

console.log('Count: ' + i);
console.log('Sum: ' + summ);
console.log(nStrRev);