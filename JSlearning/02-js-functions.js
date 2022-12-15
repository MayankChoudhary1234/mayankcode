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

// // console.log(empData);
// console.log(empData.phones[1]);
// console.log(empData.address.city);