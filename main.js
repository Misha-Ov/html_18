console.log('#1. Приклад домашнього завдання з JavaScript')

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
let myNum = 10;
// ім'я змінної: myStr, значення: 'some string'
let myStr = "some string";
// ім'я змінної: myBool, значення: true
let myBool = true;
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
let myArr = [1, 2, 3, 4, 5];
// ім'я змінної myObj, значення: first: 'First Name', last: 'Last Name'

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */

let decimal2 = parseFloat(myNum).toFixed(2);

document.write(decimal2);

/*
 * #3
 *
 * Створіть змінну i, для якої виконайте префіксний та постфіксний інкремент та декремент.
 * Поекспериментуйте з результатами, виводячи їх у консоль.
 */

let i = 0;
document.write("<br>" + i++); // i = 0
document.write("<br>" + ++i); // i = 2
document.write("<br>" + i--); // i = 2
document.write("<br>" + --i); // i = 0

/*
 * #4
 *
 * Створіть нову змінну myTest та присвойте їй значення 20.
 * Виконайте присвоєння з операцією, використовуючи оператори: +=, –=, *=, /=, %=.
 * Результати присвоюються в myTest, потім виводяться в консоль.
 * У розрахунках можна використовувати раніше оголошену змінну myNum та/або числа.
 */

let myTest = 100;
document.write("<br>" + myTest);
// +=
myTest += 10;
document.write("<br>" + myTest);
// –=
myTest -= 60;
document.write("<br>" + myTest);
// *=
myTest *= 5;
document.write("<br>" + myTest);
// /=
myTest /= 10;
document.write("<br>" + myTest);
// %=
myTest %= 5;
document.write("<br>" + myTest);

/*
 * #5
 *
 * Використовуючи властивості та методи об'єкта Math, присвойте змінним та відобразіть у консолі.
 */

// константа Pi → myPi
const PI = Math.PI; 
document.write("<br>" + PI);

// округлене значення числа 89.279 → myRound
let myRound = Math.round(89.279);
document.write("<br>" + myRound);

// випадкове число між 0..10 → myRandom
let myRandom = Math.random() * 10;
document.write("<br>" + myRandom);

// 3 у 5 степені → myPow
let myPow = Math.pow(3, 5);
document.write("<br>" + myPow);


/*
 * #6
 *
 * Створіть об'єкт з ім'ям strObj.
 * Присвойте ключу str рядок тексту "Мама мыла раму, рама мыла маму", ключу length встановіть довжину цього рядка.
 */

// Мама мыла раму, рама мыла маму
// strObj

let str = "Мама мыла раму, рама мыла маму"
let strObj = {
    str: str,
    length: str.length
};
document.write("<br>" + strObj.str);

/*
 * #7
 *
 * Перевірте наявність тексту 'рама' у полі str об'єкта strObj (див.п.6), результат збережіть у змінній isRamaPos та виведіть її у консоль.
 * Результатом для isRamaPos має бути індекс входження.
 * Результатом для isRama має бути буль true.
 */

let isRamaPos = strObj.str.indexOf("рама");
document.write("<br>" + isRamaPos);
let isRama = strObj.str.includes("рама")
document.write("<br>" + isRama);

/*
 * #8
 *
 * Виконайте перейменування підрядка у рядку.
 * Як вихідний рядок використовуйте значення поля str об'єкта strObj (див.п.6), результат збережіть у змінній strReplace та відобразіть у консолі.
 * Вихідний рядок: 'Мама мыла раму, рама мыла маму'
 *      Результат: 'Мама моет раму, Рама держит маму'
 */

let strArr = strObj.str.split(",");
let strReplaceArr = [];
strReplaceArr[0] = strArr[0].replace("мыла", "моет");
strReplaceArr[1] = strArr[1].replace("рама мыла", "Рама держит");
let strReplace = strReplaceArr.join(",");
document.write("<br>" + strReplace);

/*
 * #9
 *
 * Преобразуйте текст 'some STRING' у верхній, потім у нижній регістри, результат відобразіть у консолі.
 */

let someStr = "some STRING";
document.write("<br>" + someStr);
let upperStr = someStr.toUpperCase();
document.write("<br>" + upperStr);
let lowerStr = someStr.toLowerCase();
document.write("<br>" + lowerStr);

// Дз 19

// Створіть функцію `getRandomInt`, яка приймає два цілих числа: `min` та `max`. Ця функція повинна генерувати випадкове ціле число в діапазоні від `min` до `max` (включно).

function getRandomInt(min, max) {
    const minInt = Math.ceil(min);
    const maxInt = Math.floor(max);
    return Math.floor(Math.random() * (maxInt - minInt + 1) + minInt)
}

document.write("<br>" + getRandomInt(1, 10)); 
document.write("<br>" + getRandomInt(40, 50)); 
document.write("<br>" + getRandomInt(1, 100)); 

//  створити функцію greet в JavaScript. Функція greet повинна повертати новий рядок, який поєднує msg та name з комою та пробілом між ними. Наприклад, якщо msg це “Hi” і name це “John”, то функція повинна повернути рядок “Hi, John”.

function greetByName(msg, name) {
    return msg + ", " + name
}

document.write("<br>" + greetByName('Hi', 'John'));
document.write("<br>" + greetByName('Hey', 'Bob'));
document.write("<br>" + greetByName('Hello', 'Mary'));

// Створіть функцію sumBigIntegers, яка приймає два рядки (numStr1 та numStr2), що представляють великі числа.
// Функція повинна перетворити ці рядки на BigInt і повернути їх суму.

function sumBigIntegers(numStr1, numStr2) {
    return BigInt(numStr1) + BigInt(numStr2)
}

document.write("<br>" + sumBigIntegers('9007199254740991', '9007199254740991'));