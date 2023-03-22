// // This is Q1 in extra exercises
// console.log(-9 * 3);
// console.log("value is " + 50);
// console.log(17 % 5);
// console.log(5 % 17);
// console.log(5 / 10);
// console.log(4 == 4);
// console.log(4 != 5);
// console.log(7 <= 8);
// x = 5.2;
// Math.ceil(x) - Math.floor(x);

// // This is Q2 in extra exercises

// let number = prompt("Enter a number");

// alert(number);

// // This is Q3 in extra exercises

// let first = prompt("Enter The first number");
// let second = prompt("Enter The second number");

// if (first > second) {
//   alert(second);
//   alert(first);
// } else {
//   alert(first);
//   alert(second);
// }
// // This is Q4 in extra exercises

// let first1 = prompt("Enter The first number");
// let second1 = prompt("Enter The second number");

// if (first1 > second1) {
//   alert(first1);
// } else {
//   alert(second1);
// }
// // This is Q5 in extra exercises

// let first2 = prompt("Enter The first number");
// let second2 = prompt("Enter The second number");

// alert(first2 + second2);
// //it read them as strings

// // This is Q6 in extra exercises
// let num = prompt("Enter a Number");

// if (num == 1) {
//   console.log("ONE");
// } else if (num == 2) {
//   console.log("TWO");
// } else if (num == 3) {
//   console.log("THREE");
// } else if (num == 4) {
//   console.log("FOUR");
// } else if (num == 5) {
//   console.log("FIVE");
// } else if (num == 6) {
//   console.log("SIX");
// } else if (num == 7) {
//   console.log("SEVEN");
// } else if (num == 8) {
//   console.log("EIGHT");
// } else if (num == 9) {
//   console.log("NINE");
// } else {
//   console.log("PLEASE TRY AGAIN");
// }

// This is Q7 in extra exercises

// for ( let i=0; i<=5; i++ ){
//   alert(i);
// }

// This is Q8 in extra exercises
// let space="";
// for (let i = 0; i <= 5; i++) {
//   space += i;
// }
// alert(space);

// This is Q9 in extra exercises
// for (let i = 0; i <= 20; i++) {
// if (i % 3 === 0){
// alert(i);

// }
// }

// This is Q10 in extra exercises
// do {
// let number = prompt("Enter a number between 0-100")

// if ( number >= 0 && number <=100 ){
//   alert("Good boy")
//   break;
// }else  {
//   alert ("areuseriousrightnowbro")
// }
// }while (true);

// This is Q10 in extra exercises (another way to write the code)
// let number = prompt("Enter a number between 0-100")
// while (number < 0 || number > 100){
//   alert("areuseriousrightnowbro")
//   number = prompt("Enter a number between 0-100")
// }
// alert("Good boy")

// This is Q11 in extra exercises
// number = prompt("Enter a number between 0-100")
// while (number < 0 || number > 100 || isNaN(number)
//   ){
//   alert("areuseriousrightnowbro")
//   number = prompt("Enter a number between 0-100")
// }
// alert("Good boy")

// This is Q12 in extra exercises
//  let number = prompt("Enter an integer");
// let sum=0;
// for (let i=0; i<=number; i++){
// sum = sum + i;
// }
// alert(`The sum of ${number} is ${sum}`)
// sum = 0 + 0
// sum = 0 + 1
// sum = 1 + 2
// sum = 3 + 3
// sum = 6 + 4
// sum = 10 + 5
// sum = 15 + 6
// sum = 21 + 7
// sum = 28 + 8
// sum = 36 + 9
// sum = 45 + 10

// This is Q13 in extra exercises
// let number = prompt("Enter an integer");
// let sum=0;
// for (let i=0; i<=number; i++){
// sum = sum + i;
// average = sum / (i+1) ;
// }
// alert(`The average of ${number} is ${average}`)

// 1- create a function that takes two arguments, one is an array and the other is a number, then return the index of the given value or return -1 if the element cannot be found.
// let arr = [1, 2, 3, 4, 5];
// let number = 5;
// let first = function (arr, number) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === number) {
//       return i;
//     } else {
//     }
//   }
//   return -1;
// };
// console.log(first(arr, number));

// 2- create a function that takes an array of integers between 1 and 100 except for one, and returns the missing number.

let first = function () {
  let random1;
  let random2;

  let arr = [];
  for (i = 1; i <= 100; i++) {
    random1 = Math.floor(Math.random() * 100);
    random2 = Math.floor(Math.random() * 100);

    arr.push(i);
  }

  arr.splice(random1, 1);
  arr.splice(random2, 1);

  console.log(arr);
  console.log(random1);
  console.log(random2);
};
first();
