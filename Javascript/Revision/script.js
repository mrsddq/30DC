// 1Intro
// console.log("Hello");
// =====================

// 2Comments
// singleline
// this is a comment

// multiline
/*laraib
siddiqui
*/
// =====

//3variables
// "use-strict"
// let a=5;
// console.log(a);

// const b=5;
// console.log(b);

// let x="hello";
// console.log(x);

// let myName="Larry"
// let m=myName;
// console.log(m);

// error naming convension
// let 1name="Larry";
// console.log(1name);

// let name123="Larry";
// console.log(name123);

// let names="sid"
// names="ahmad"
// console.log(names);
// ===================

// 4datatypes
// primitive datatypes:
// 1number
// let num=50;
// console.log(typeof num);

// 2string
// let str='Hell';
// console.log(typeof str);

//3boolean
// let bool=true
// console.log(typeof bool);

//4null
// let a=null
// console.log(typeof a);

// //5undefined
// let x;
// console.log(typeof x);
// ======================

//5type conversion
// result='3'+2;
// console.log(result);
// console.log(typeof result);

// result='3'+true;
// console.log(result);
// console.log(typeof result);

// result='3'+null;
// console.log(result);
// console.log(typeof result);

// result='3'+"hello";
// console.log(result);
// console.log(typeof result);

// result='3'-2;
// console.log(result);
// console.log(typeof result);

// result='3'-'hello';
// console.log(result);
// console.log(typeof result);
// NaN

// result='3'-true;
// console.log(result);
// console.log(typeof result);

// result='3'-false;
// console.log(result);
// console.log(typeof result);

// result='3'-null;
// console.log(result);
// console.log(typeof result);

// result='3';
// result=Number(result);
// console.log(result);
// console.log(typeof result);

// result=null;
// result=Number(result);
// console.log(result);
// console.log(typeof result);

// result=false;
// result=Number(result);
// console.log(result);
// console.log(typeof result);

// result=true;
// result=String(result);
// console.log(result);
// console.log(typeof result);

// result = 20.2;
// result = parseInt(result);
// console.log(result);
// console.log(typeof result);

// result=-20;
// result=parseInt(result);
// console.log(result);
// console.log(typeof result);

// result=-20.0;
// result=parseFloat(result);
// console.log(result);
// console.log(typeof result);
// ==========================

// 6operators
// arithematic operator
// console.log(5+2);
// console.log(5-2);
// console.log(5*2);
// console.log(5/2);
// console.log(5%2);
// console.log(5**2);

// let a=1;
// a=a+1;
// a++;
// ++a;
// a--;
// --a;
// console.log(++a);
// console.log(a);

//comparison operator
// a=5;
// b=6;
// console.log(a==b);
// console.log(a!=b);
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(ab);

// a='6';
// b=6;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

// a=true;
// b=1;
// console.log(a==b);
// console.log(a===b);
// console.log(a!=b);
// console.log(a!==b);

// logical operator
// or
// console.log(2 > 3 || 3 > 4);
// console.log(2 < 3 || 3 > 4);
// console.log(2 < 3 || 3 < 4);

// and
// console.log(2>3 && 3>4);
// console.log(2<3 && 3>4);
// console.log(2<3 && 3<4);

// not
// console.log(!true);
// console.log(!false);
// ====================

// conditional statement
// let age=1;
// let names="John"
// if(age>=18){
//     if(names=="John"){
//     console.log("You are allowed");
//     }else{
//         console.log("Name is not a match");
//     }
// }else{
//     console.log("You are not allowed");
// }

// let a = 10;
// let b = 15;
// if (a > b) {
//   console.log("a is greater");
// } else if (b > a) {
//   console.log("b is greater");
// } else {
//   console.log("both are equal");
// }

// switch
// let ch = 2;
// switch (ch) {
//   case 1:
//     console.log("I am 1");
//     break;
//   case 2:
//     console.log("I am 2");
//     break;
//   case 3:
//     console.log("I am 3");
//     break;
//   default:
//     console.log("Invalid choice!");
//     break;
// }
// =

// loops:
// for loop
// for (var i = 0; i < 10; i++) {
//   console.log("Hello");
// }

// for (var i = 0; i < 10; i++) {
//   console.log(i);
// }

// for (var i = 0; i <= 20; i++) {
//   console.log("2 X "+ i +" = "+2*i);
// }

// for (var i = 1; i <= 10; i++) {
//   console.log(`2 X ${i} = ${2 * i}`);
// }

// while loop
// var i = 1;
// while (i <= 10) {
//   console.log(`2 X ${i} = ${2 * i}`);
//   i++;
// }

// do while loop
// var i = 1;
// do {
//   console.log(`2 X ${i} = ${2 * i}`);
//   i++;
// } while (i <= 10);
// ==================

//functions
// function n(a) {
//   console.log("Hello " + a);
// }
// n("Learners");

// function add(a, b) {
//   console.log(a + b);
// }
// add(2, 3);

// function three(a, b, c) {
//   console.log(a + b + c);
// }
// let x = 1;
// let y = 10;
// three(x, y, 100);

// function three(a, b, c) {
//   return a + b + c;
// }
// let x = 1;
// let y = 10;
// console.log(three(x, y, 100));
// let addition = three(x, y, 400);
// console.log(addition);

// let a = 5; //global
// function local() {
//   let b = 3; //local
//   console.log(a);
// }
// local();
// console.log(b);

// anonymous function
// let fun = function () {
//   console.log("Hello");
// };
// fun();

// self invoking of anonymous function
// (function () {
//   console.log("Hello");
// })();

// arrow function
// let a = function (a, b) {
//   return a + b;
// };
// console.log(a(2, 3));

// let add = (a, b) => a + b;
// value = add(2, 20);
// console.log(value);
// ===================

// array
// let n = ["John", "Zayn", "Larry", 1, 2, 3, null];
// console.log(n);
// console.log(n[2]);
// console.log(n.length);
// n.push("Cena");
// n.unshift("Garry");
// console.log(n);
// n.splice(1, 2, "Sandhu");
// console.log(n);

// let num = [10, 20, 35, 40, 49, 50, 80, 100];

// for (let i = 0; i < num.length; i++) {
//   console.log(num[i]);
// }

// num.forEach((val, index, array) => {
//   console.log(val);
// });

// num.forEach((val, ind) => {
//   console.log(val);
// });

// let a = num.forEach((val, ind) => {
//   return val;
// });
// console.log(a);

// let a = num.map((val, ind) => {
//   return val + 10;
// });
// console.log(a);

// numArray = [11, 21, 31, 41, 51, 61, 71];

// console.log(num.concat numArray));
// console.log(num.reverse());
// console.log(num.sort());
// console.log(num.indexOf(20));
// console.log(num);

// let a = numArray.splice(1, 4);
// console.log(`splice: ${a}`);

// console.log(num);

// let a2 = numArray.slice(0, 4);
// console.log(`slice: ${a2}`);

// let numArray = [10, 20, 30, 40, 50, 60, 10, 70, 80, 90];

// let a = numArray.filter((val, ind, arr) => {
//   if (val >= 10 && val <= 25) {
//     return val;
//   }
// });
// console.log(a);

// let a = numArray.filter((val, ind, arr) => {
//   if (val >= 10 && val <= 25) {
//     return val == 10;
//   }
// });
// console.log(a);

// let a = numArray.findIndex((val, ind, arr) => {
//   return val == 50;
// });
// console.log(a);

// let a = numArray.findLastIndex((val, ind, arr) => {
//   return val == 10;
// });
// console.log(a);

// let num = "10,20,30";
// let arr = num.split();
// arr.forEach((element) => {
//   console.log(element);
// });
// console.log(arr);

// let jo = arr.join(",");
// console.log(jo);
// ===================

// for in for of
// let arr = [10, 20, 30, 40, 50];
// for (let ar in arr) {
//   console.log(arr[ar]);
// }

// let arr = [10, 20, 30, 40, 50];
// for (let ar of arr) {
//   console.log(ar);
// }

// let arr = [
//   ["John", 30],
//   ["Thomas", 28],
//   ["Robert", 22],
// ];

// console.log(arr);
// console.log(arr[0][0]);
// console.log(arr[1][0]);

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// arr.forEach((data) => {
//   data.forEach((val) => {
//     console.log(val);
//   });
// });

// for (let ar of arr) {
//   for (i of ar) {
//     console.log(i);
//   }
// }

// let arr1 = ["John", 202, true];
// let arr2 = ["John", 202, true];
// let arr2 = arr1.slice(0).concat(["Item"]);
// arr2.push("Berg"); //not with set
// let arr2 = [...arr1];
// console.log(arr1);
// console.log(arr2);

// array destructing
// let array1 = ["Thomas", "Chad", "Neo", "Magnus"];
// let item1 = array1[0];
// let item2 = array1[1];
// let [item1, item2, ...item3] = array1;

// console.log(item1);
// console.log(item2);
// console.log(item3);

// object
let obj = {
  name: "Laraib",
  age: 21,
  "last name": "Siddqui",
  fun: function () {
    console.log("I am in Function");
  },
  arr: [20, 30, 40],
};

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj[name]);
// console.log(obj["last name"]);
// obj.fun();
// console.log(obj.arr);

console.log(obj);


