// js basics 

// primitive data types - 
// number, string, boolean 

// refernce types - 
// object, array, function, class, class-object

// loops, if else, switch 

// operators 
//  all 

// ============================

// variable declaration in JS 

// java 
// int num5 = 10;

// JS 
// num1 = 10; // don't use this 
// var num2 = 20; // don't use this 
// const num3 = 30; // use this as default choice 
// let num4 = 40; // use this for variables with changing values 

// console.log(num3);
// console.log(num4);


// let someVariable = 10;
// console.log(typeof (someVariable));
// console.log(someVariable);

// someVariable = 12.75;
// console.log(typeof (someVariable));
// console.log(someVariable);

// someVariable = 'abc';
// console.log(typeof (someVariable));
// console.log(someVariable);

// someVariable = false;
// console.log(typeof (someVariable));
// console.log(someVariable);

// someVariable = 15.50;
// console.log(typeof (someVariable));
// console.log(someVariable);

// special Operators in JS 

// const val1 = 10;
// const val2 = '10';
// console.log(val1 == val2);
// console.log(val1 === val2); // type comparison operator 

// console.log(val1 != val2);
// console.log(val1 !== val2); // type comparison operator 


// const num1 = 10;
// const num2 = 'abc';
// const num3 = num1 - num2;
// console.log(num3);

// let num4 = null;
// console.log(typeof (num4));
// console.log(num4);

// num4 = 10;
// console.log(typeof (num4));
// console.log(num4);

// truthy falsy values in JS 
// falsy ->  false, 0, '', undefined, null 
// truthy -> any other values 

// please enter a value: 
// let val4;

// if (val4) {
//     console.log('truthy');
// }
// else {
//     console.log('falsy');
// }







// functions in JS 

// // 1. Old JS syntax 

// function fun1() {
//     console.log('fun1 function');
// }

// fun1();

// // 2. New JS syntax 

// const fun2 = () => {
//     console.log('fun2 function');
// }

// fun2();

// const mayank = (a, b,c) => {
//     console.log('Hello' + ' ' + a + ' ' + b + ' ' + c);
// }
// mayank('Mayank', 'Choudhary');
// mayank('Mayank', 'Choudhary', 'Bengaluru');


// JS PPTS - 
// PPT1 - dont learn Scope (slide 31 onwards ) 
// ppt2 - DONT LEARN HOISTING (slide )
// PPT3 -  dont learn closure 

// // java method 
// public int addNum2(int i, int j) {
//     return i + j;
// }

// const a1 = 10;
// const a2 = 'abc';
// const a3 = {};
// const a4 = [];
// const a5 = () => { };



// const addNums = (a, b) => { return a + b };
// console.log(addNums(10, 20));

// old JS funciton 
// function gstFun (billAmount) {
//     return billAmount + (billAmount * 0.18);
// };

// modern JS function - 1
// const gstFun = (billAmount) => {
//     return billAmount + (billAmount * 0.18);
// };

// const gstFun = billAmount => {
//     return billAmount + (billAmount * 0.18);
// };

// const gstFun = billAmount => billAmount + (billAmount * 0.18);

// let finalAmount = gstFun(100);

// console.log(finalAmount);


// const addNums = (a, b) => { console.log(a + b) };

// addNums(); // NaN
// addNums(10); // NaN
// addNums(10, 20); // 30 
// addNums(10, 20, 30); // 30 

// arrays in JS 

// const myArray = [10, 12.50, 'abc', false, ['a', 20, false]];

// console.log(myArray);
// console.log(myArray[2]);

// objects in JS 

// const empData = {
//     eid: 12345,
//     firstName: 'Ishu',
//     lastName: 'Singh',
//     salary: 10.5,
//     isIndian: true,
//     phones: [9876543210, 4567894321],
//     address: {
//         street: 'Belandur',
//         city: 'Bengaluru',
//         pin: 430000
//     },
//     jobRole: 'devOps Engineer'
// };

// console.log(empData);
// console.log(empData.phones[1]);
// console.log(empData.address.city);


//----------args
 
// const fun = (arg) => {
//     console.log('fun function called.');
//     // code to use arg
//     // console.log('Hi ' + arg); // string arg
//     // console.log(++arg); // number arg
//     console.log(arg.city);
// };

// // fun('Sonu');
// // fun(10);
// fun({city:'Ghaziabad'});

// fun(11);

// let num = 10;
// fun(num);

// -----------------------------------------------------------------
// In JS, a function can be passed as argument to another function.
// -----------------------------------------------------------------

// const fun = (arg) => {
//     console.log('fun function called.');
//     arg(); // function call 
// };

// // const fun2 = () => {
// //     console.log('fun2 funtion called.');
// // };

// // fun(fun2);

// fun(() => { console.log('anonymous funtion called.'); });



// JS is an asynchronous language 

// callback functions in JS 


// console.log('One');

// setTimeout(); // pauses execution for some time 
// setTimeout(arg1, arg2);
// setTimeout( () => {} , 2000);

// console.log('One');

// setTimeout(() => {
//     console.log('Two');
// }, 2000);

// console.log('Three');

// console.log('Mayank');

// setTimeout(()=>{
//     console.log('Dagar');
// },2000);
// console.log('Choudhary');


// ------- dependency
// console.log('Start');

// const getInfo = () => {
//     console.log('getInfo function called.');
//     setTimeout(() => {
//         return { city: 'Bengaluru' };
//     }, 2000);
// };

// let info = getInfo();
// console.log(info.city);

// console.log('Start');

// const getInfo = (arg) => {
//     console.log('getInfo function called.');
//     setTimeout(() => {
//         arg({ city: 'Bengaluru' });
//     }, 2000);
// };
// getInfo((info) => {console.log(info.city);});  // full syntax
// // getInfo(info => console.log(info.city));    // shortcut syntax

