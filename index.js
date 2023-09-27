// let obj = {};
//     obj.name = 'dog';
//     obj.legs = '4';
//     obj.color = 'white'
//   obj.name = 'cock';
//   obj.legs = '2';
//   obj['color'] = 'red';
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs. This ${obj.color} ${obj.name} has ${obj.legs} legs.`
// }

// console.log(animal(obj));

// let jnumber = 123.84569797866
// const formattedNumber = jnumber.toFixed(2)
// console.log(formattedNumber) // 123.46

// let obj = [
//   {
//     firstName: 'Smithy',
//     lastName: 'Telusnord',
//     height: 6,
//     age: 29,
//     hobbie: 'programming'
//   },
//   {
//     firstName: 'Rebecca',
//     lastName: 'Telusnord',
//     height: 5,
//     age: 28,
//     hobbie: 'flying'
//   },
//   {
//     firstName: 'Calvin',
//     lastName: 'Muzac',
//     height: 4,
//     age: 30,
//     hobbie: 'hoes'
//   },
// ];

// obj[0].food = 'hot dog';

// console.log(`${obj[1].firstName} is ${obj[1].age} years old. Her maiden name is ${obj[1].firstName} ${obj[2].lastName}. She has a brother named ${obj[2].firstName} who is ${obj[2].age}. She is married to ${obj[0].firstName} ${obj[0].lastName}. Here is some information about him. ${JSON.stringify(obj[0])}`);
// console.log(obj[0,1].firstName);
// console.log(JSON.stringify(obj[0]));

// const val = false

// function trueOrFalse(val) {
//   if (val == false) return 'false'
//   else return 'true'
// }

// console.log(trueOrFalse(val))

// const arr = ''
// function arrLength(arr) {
//   if ('' == 0)
//     console.log('arr has elements')
//   else
//     console.log('arr is empty')
// };

// arrLength(arr);

// function trueOrFalse(str) {
//   if (str == false)
//     return 'false' ;
//   else
//     return 'true';
// }

// console.log(trueOrFalse());

// function saleHotdogs(n){
//   if (n < 5)
//     return 100
//   else if (n >= 5 && n < 10)
//     return 95
//   else (n >= 10)
//     return 90
// };

// console.log(saleHotdogs(100));

// function saleHotDogs() {
//   if (n < 5) {
//     return 100;
//   } else if (n >= 5 && n < 10) {
//     return 95;
//   } else if (n >= 10) {
//     return 90;
//   } else 0;
// }

// function SaleHotDogs(n) {
//   return n < 5 ? n * 100 : n >=5 && n < 10 ? n * 95 : n >= 10 ? n * 90 : 0
// };

// console.log(SaleHotDogs(4));

// function oldMan(age) {
//   return age < 16 ? 'young adult' : 'old man'
// }

// console.log(oldMan(16))

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 23, 14]

// function pickIt(arr) {
//   let odd = [];
//   let even = [];
//   for (let i = 0; i < arr.length; i++)
//     if (arr[i] % 2 === 0) {
//       even.push(arr[i])
//   } else {
//     odd.push(arr[i])
//   }
//   return [odd, even]

// }
// console.log(pickIt(arr));

// const numbers = [1,2,3,4,5,6,7,8,9,34,25]

// function sum(arr) {
//   let sum = 0;
//   for(let n=0; n < arr.length; n++) {
//   sum+= arr[n]
//   }
//   return sum
// }

// console.log(sum(numbers));

// function factorial(n) {
//   let sum = 1;
//   for(let i=1; i <= n; i++ ) {
//     sum *= i;
//   }
//   return sum;
// };

// console.log(factorial(4));

// function multiTable(n) {
//   for(let i=1; i <= 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`)
//   }
// }

// multiTable(5);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 19, 13, 60];
// const odd = [];

// function evenNumbers(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//       console.log(array[i]);
//     } else {
//       odd.push(array[i]);
//     }
//   }
// }

// evenNumbers(arr);
// console.log(odd);

// const arr = [1, 2, 3, 4, 5];
// function pickIt() {
//   let odd = [];
//   let even = [];
//   for (const i = 0; i < arr.length; i++)
//     if (arr[i] % 2 !== 0) {
//       odd.push(arr[i]);
//     } else {
//      even.push(arr[i]);
//     }
// }

// pickIt(arr);

// function evenNumber(n) {
//   let sum = 0;
//   for(let i=0; i <= n; i++) {
//     if (i % 2 === 0 ) {
//       sum+= i
//     }
//   }
//     return sum;
// };

// console.log(evenNumber(6));

// function reverse(str) {
//   for(i=0; i < str; i++)
// };

// reverse();

// function reverseString(inputString) {
//   let reversedString = '';

//   for (let i = inputString.length - 1; i >= 0; i--) {
//     reversedString += inputString[i];
//   }

//   return reversedString;
// }

// console.log(String('hello'));

// const favoriteFoods = ['chicken', 'pizza', 'wings', 'turkey burgers'];
// favoriteFoods.push('fries', 'eggs');
// favoriteFoods.pop();
// console.log(favoriteFoods);
// console.log(favoriteFoods.length);

// const aboutMe = {};
// aboutMe.name = 'Smithy';
// aboutMe.age = '29';
// console.log("Hello! My name is " + aboutMe.name + ' and I am '+ aboutMe.age+ ' years old.')
// console.log(`Hello! My name is ${aboutMe.name} and I am ${aboutMe.age} years old.`)

// const theArray = [];
// theArray.push("Chemical X");
// console.log(theArray);

// const breakfast = ['Biscuits and Gravy', 'Pancakes', 'Huevos Rancheros'];
// console.log(breakfast[2]);
// console.log(breakfast[breakfast.length-1]);
// breakfast.pop();
// console.log(breakfast[1]);
// breakfast.pop();
// console.log(breakfast[0]);
// breakfast.pop();
// console.log(breakfast);

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// function lastInArray(array) {
//   console.log(array[array.length - 1]);

//   for (let i = array.length - 1; i >= 0; i--) {
//     if (i === array.length - 1) {
//       array.pop();
//       console.log(array[array.length - 1]);
//     }
//   }
// }

// lastInArray(numbers);

// const artist = { name: 'Usher', talent: 'sing & dance', albumsRecorded: 5 };
// artist.siblings = true;
// console.log(artist);
// const choices = ["Lapis", "Papyrus", "Scalpellus"]

// const result = Math.floor(3.34435343);
// console.log(result)

// const results = Math.floor(Math.random() * choices.length)
// console.log(results)

// if (temperature < 60) {
//   console.log('wear a coat')
// }
// if (weather === 'raining') {
//   console.log('bring an umbrella')
// }

// let userIsBuckled = false;

// function firstFunction(userIsBuckled) {
//   if (userIsBuckled == true) {
//     console.log('You deserve a safe driver discount!');
//   } else {
//     console.log('Click it or ticket!');
//   }
// }

// firstFunction(true);

// function givenPrice(price) {
//   if (price < 5) {
//     console.log("I'll take it!")
//   } else if (price > 10) {
//     console.log("$"+ price + " for this? You must be joking!")
//   } else {
//     console.log("Take off 10% and you've got a deal.");
//   }
// }

// givenPrice(2);

// for (let i = 0; i < 100; i++) {
//   console.log(i);
// }
// for (let i = 99; i > 0; i--) {
//   console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//   console.log("Hello?");
// }

// const characters = ['kevin', 'simon', 'theo', 'rick'];
// for (let i = 0; i < characters.length; i++) {
//   console.log(characters[i]);
// }

// let number = 0;
// while (number < 11) {
//    console.log(number)
//     number = number + 1;
// }

// let investment = 1000;
// for (let year = 1; year < 11; year++) {
//   if (year === 7) {
//     investment = investment * 0.25;
//   } else {
//     investment = investment * 1.1;
//   }

//   console.log('Years: ' + year + ' Value: ' + investment);
// }

// let investment = 350000
// for (let year = 0; year < 31; year++) {
//   console.log(`Year: ${year} Investment: ${investment}`)
//   investment = Math.floor(investment * 1.07)-2000
// }

// let investment = 350000
// while (investment >= 4000) {
//   console.log(investment)
//   investment = (investment * 1.07)-2000
// }
// /////////////////////////////////Interest Calculator to Payoff Home//////////////////
// const loanAmount = 350000;
// const interestRate = 0.07 / 12; // Monthly interest rate (7% annual rate divided by 12 months)
// const monthlyPayment = 5000;

// let remainingBalance = loanAmount;
// let months = 0;
// let totalInterestPaid = 0; // Initialize the total interest paid to zero

// while (remainingBalance > 0) {
//   // Calculate the interest for the current month
//   const monthlyInterest = remainingBalance * interestRate;

//   // Add the monthly interest to the total interest paid
//   totalInterestPaid += monthlyInterest;

//   // Calculate the total payment for the current month (principal + interest)
//   const totalPayment = monthlyPayment + monthlyInterest;

//   //  the remaining balance by the payment amount
//   remainingBalance -= monthlyPayment;

//   // If the remaining balance becomes negative, set it to zero (loan paid off)
//   if (remainingBalance < 0) {
//     remainingBalance = 0;
//   }

//   months++; // Increment the month counter
// }

// console.log(
//   `It would take ${months} months to pay off the loan, which is ${Math.floor(
//     months / 12
//   )} years.`
// );
// console.log(`Total interest paid: $${Math.floor(totalInterestPaid.toFixed(2))}`);

// function calculateLoanPayoffTimeAndInterest(principal, downPayment, annualInterestRate, monthlyPayment) {
//   // Convert annual interest rate to monthly rate
//   const monthlyInterestRate = annualInterestRate / 12 / 100;

//   let remainingPrincipal = principal - downPayment;
//   let months = 0;
//   let totalInterestPaid = 0;

//   while (remainingPrincipal > 0) {
//     // Calculate interest for the current month
//     const monthlyInterest = remainingPrincipal * monthlyInterestRate;

//     // Add the interest to the total interest paid
//     totalInterestPaid += monthlyInterest;

//     // Subtract the monthly payment from the remaining principal
//     remainingPrincipal -= monthlyPayment;

//     // If the remaining principal becomes negative, set it to zero (loan paid off)
//     if (remainingPrincipal < 0) {
//       remainingPrincipal = 0;
//     }

//     months++; // Increment the month counter
//   }

//   const years = months / 12;

//   return {
//     years: years.toFixed(2),
//     totalInterestPaid: totalInterestPaid.toFixed(2),
//   };
// }

// // Example usage:
// const loanAmount = 20000; // Loan amount in dollars
// const downPaymentAmount = 2000; // Down payment in dollars
// const annualInterestRate = 2.5; // Annual interest rate (5%)
// const monthlyPaymentAmount = 300; // Monthly payment in dollars

// const result = calculateLoanPayoffTimeAndInterest(loanAmount, downPaymentAmount, annualInterestRate, monthlyPaymentAmount);

// console.log(`It will take approximately ${result.years} years to pay off the loan.`);
// console.log(`You will pay a total of $${result.totalInterestPaid} in interest.`);

// let daysUntilFinale = 30;
// while (daysUntilFinale > 0) {
//   console.log(`Only ${daysUntilFinale} more days!`);
//   daysUntilFinale -= 1;
//   if ((daysUntilFinale === 0)) {
//     console.log("It's finally here!");
// }
// }

// let daysUntilFinale = 30
// while (daysUntilFinale > 0) {
//   console.log(`Only ${daysUntilFinale} more days!`)
//   daysUntilFinale -= 1
// if (daysUntilFinale === 0) {
//   console.log(`It's finally here!`)
// }
// }

// let daysUntilFinale = 30;

// while (daysUntilFinale > 0) {
//   daysUntilFinale -= 1;
//   console.log(`Only ${daysUntilFinale} more days!`);
// }

// console.log(`It's finally here!`);
// let choices = ['rock', 'paper', 'scissors'];

// function Ties() {
//   if (computer.choice === player.choice) {
//     console.log(`It's a Tie`);
//   }
// }

// function ComputerWins() {
//   if (
//     (computer.choice === choices[0] && player.choice === choices[2]) ||
//     (computer.choice === choices[1] && player.choice === choices[0]) ||
//     (computer.choice === choices[2] && player.choice === choices[1])
//   ) {
//     console.log(`Computer wins`);
//   }
// }

// const player = {
//   choice: null
// }
// const comp = {
//   choice: null
// }

// let choices = ['rock', 'paper', 'scissiors'];

// randomIdx = Math.floor(Math.random() * choices.length)
// comp.choice = choices[randomIdx]

// if (comp.choice === player.choice) {
//   console.log(`It's a tie` )
// } else if (comp.choice === choices[0]) {
//     if (player.choice === choices[2]) {
//       console.log('Computer wins')
//     } else {
//       console.log('Player wins')
//     }
// }
//   else if (comp.choice === choices[1]) {
//     if (player.choice === choices[0]) {
//       console.log(`Computer wins`)
//     } else {
//       console.log(`Player wins`)
//     }
// }
//   else if (comp.choice === choices[2]) {
//     if (player.choice === choices[1]) {
//       console.log(`Computer wins`)
//     } else {
//       console.log(`Player wins`)
//     }
// }

// function Add(number) {
//   const sum = number + number
//   console.log(`${number}+${number}=${sum} `)
// }

// Add(1);

// function sayHelloWorld(name) {
//   console.log(`Hello my name is ${name}. Hello world!`);
// }

// const sayHelloWorld2 = (name) => {
//   console.log(`Hello my name is ${name}. Hello World! This is an arrow function using template literals.`)
// };
// const sayHelloWorld3 = (identifier) => {
//   console.log("Hello my name is " + identifier + ". " + "Hello World! This is also an arrow function using concatination." )
// };

// sayHelloWorld('Smithy');
// sayHelloWorld2('Pimp');
// sayHelloWorld3('He');
// function sing() {
//   console.log('It was all a dream')
// }

// sing();

// const sing2 = () => {
//   return(`It was all a dream with this arrow function I am so mean`)
// };

// console.log(sing2());

// function calculateTotal(price, name) {
//   const salesTaxRate = .06
//   const totalAmount = price + (price * salesTaxRate);
//   console.log("The total is $" + totalAmount + " for the " + name );
// }

// calculateTotal(4,'Americano');

// const calculateTotal2 = (price, name) => {
//   const salesTaxRate = .06
//   const totalAmount = price + (price * salesTaxRate);
//   console.log(`The total is $${totalAmount} for the ${name}. By the way, this is an arrow function.`)
// }

// calculateTotal2(8,'Capichino');

// function helloThere(name) {
//   return(`Hello, ${name}!`)
// };

// console.log(helloThere('Smithy'));

// const helloThere2 = (name) => {
//   return(`Hello, ${name}! This is an arrow function.`)
// };
// console.log(helloThere2('Smithy'));

// // Function declation //
// function multiply(num, num2) {
//   return (num * num2);

// }

// const sum = multiply(9,22);
// // multiply(4, 8);
// console.log(sum);

// // Arrow Function //
// const multiply1 = (num, num2) => {
//   return(num * num2);
// }

// const result = multiply1(2,3);
// console.log(result);

// let investment = 1000
// for (let year = 1; year < 11; year++) {
//   console.log(`Year: ${year} Investment: ${investment.toFixed(2)}`)
//   if (year !== 7) {
//     investment = investment * 1.10
//   }
//   else {
//   investment = investment * .25
//   }
// }

// const embraceChange = () => {
//   console.log("Now I'm an arrow function.");
// };

// embraceChange();

// const myArray = ['a', 'e', 'i', 'o', 'u'];

// const printArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     return arr[i];
//   }
// };

// printArray(myArray);

// function printArray2(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// printArray2(myArray);

// const myArray = ['a', 'e', 'i', 'o', 'u'];
// let result = "";

// const printArray = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i] + " ";
//   }
//   return result.trim(); // Remove the trailing space
// };

// console.log(printArray(myArray)); // Logs the concatenated string

//DOM Manipulation//
// const h1 = document.querySelector('h1');
// const companyName = document.querySelector('#company-name');
// const salesPitch = document.querySelector('.sales-pitch');
// const pTags = document.querySelectorAll('p');

// document.querySelector('h1').innerHTML = 'Visit my <a href='http://www.coolsite.net'>site</a>';
// document.querySelector('h2').setAttribute('class', 'urgent');
// const h1 = document.querySelector('h1');
// const h1Id = document.querySelector('#title');
// console.log(h1);

// const firstSpan = document.querySelector('span').getAttribute('class');
// console.log(firstSpan)

// const firstSpan4 = document.querySelector('span');
// console.log(firstSpan4.querySelector('.class'))

// const firstSpan2 = document.getAttribute('class');

// const firstSpan3 = document.getElementsByClassName('blue')

// const color = document.querySelector('.blue').style.color = 'blue';

// const color2 = document.querySelector('h1')
// color2.setAttribute('class', 'blue');
// color2.style.color = 'blue'

// const color3 = document.querySelector('h1')
// color3.classList.add('blue');
// color3.style.color = 'blue'

// document.getElementById('title').innerHTML = 'Come on in!';

// document.getElementById('title').innerText = 'Come on in!';

// document.querySelector('#title').innerText = 'Come on in!';

// document.querySelector('#title').innerHTML = 'Come on in!'

// const h4El = document.createElement('h4');
// h4El.innerText = 'Powered by Javascript';
// document.body.appendChild(h4El);

// //Would only work if the body tag has an id or class attribute
// const h4El = document.createElement('h4');
// h4El.innerText = 'Powered by Javascript';
// const bodyTag = document.querySelector('#id');
// bodyTag.append(h4El);

// const h1El = document.getElementById('title');
// h1El.remove();

// const h1El2 = document.querySelector('#title');
// h1El.remove();

// document.getElementById('title').remove();

// document.querySelector('#title').remove();

// const h1titleEl = document.createElement('h1');
// //Below is incorrect. You don't have to query for the h1 tag you just created.//
// //You can just access it through the variable h1titleEl.innerText//
// h1titleEl.querySelector('h1').innerText = 'Welcome Players. Begin the Roman Games';
// document.body.appendChild(h1titleEl);

// //This would work.
// h1titleEl.innerText = 'Welcome Players. Begin the Roman Games';
// document.body.appendChild(h1titleEl);

/*-----------------------------------------------------------------
Challenge: 02-addTwoNumbers
Difficulty: Basic  
Prompt:
Write a function called addTwoNumbers that accepts two numeric arguments and returns the sum of those two numbers.
If either argument is not a Number, return the value of NaN.
Examples:
addTwoNumbers(5, 10) //=> 15
addTwoNumbers(10, -2) //=> 8
addTwoNumbers(0, 0) //=> 0
addTwoNumbers('Hello', 5) //=> NaN
-----------------------------------------------------------------*/
// Your solution for 02-addTwoNumbers here:

// function addTwoNumbers(a,b) {
//   const sum = a + b;
//   return(sum);

// };

//Use typeof to distinguish information that is being returned. Can have it return any value if//
//its not the value you want //
// console.log(addTwoNumbers('Hello',5));

// let sum = 0
// const addTwoNumbers2 = (a,b) => {
//   if(typeof a !== 'number' || typeof b !== 'number') {
//     return NaN;
//   }
//   sum = a + b
//   return(sum)
// }

// console.log(addTwoNumbers2('Hello',2));
// console.log(addTwoNumbers2(5,10));

// function addTwoNumbers(a, b) {
//   if (typeof a === 'number' && typeof b === 'number') {
//     return a + b;
//   } else {
//     return NaN;
//   }
// }
// const array = [1,2,3,4,5,6];
// const bagOfVowels = ["a","e","i","o","u"];

// function iterate (arr) {
//   arr.forEach(x => console.log(x))
// }

// iterate(array);
// iterate(bagOfVowels);

// function iterateLoop (arr) {
//   for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i])
//   }
// };

// iterateLoop(array);
// iterateLoop(bagOfVowels);

// function sayHello() {
//   console.log('Hello');
// }

// const sayHello2 = () => {
//   console.log('Hello Person')
// }

// document.querySelector('#generate-greeting').onclick = sayHello;
// sayHello();

// document.querySelector('#generate-greeting').addEventListener('click', sayHello2);

// document.getElementById('generate-greeting').addEventListener('click', sayHello2);

// function typed(){
//   const message = document.getElementById('message').value;
//   console.log(message);
// }

// document.getElementById('generate-message').addEventListener('click', typed);

// function handleClick() {
//   const newTodo = document.getElementById('new-todo').value;
//   const newListItem = document.querySelector('.todos');
//   newListItem.innerHTML = `<li>${newTodo}</li>`;
//   document.getElementById("new-todo").value = null;

// };

// Challenge: 03-sumNumbers
// Difficulty: Basic
// Prompt:
// - Write a function called sumNumbers that accepts a single array of numbers and returns the sum of the numbers in the array.
// - If the array is empty, return 0 (zero).
// Examples:
// sumNumbers([10]) //=> 10
// sumNumbers([5, 10]) //=> 15
// sumNumbers([2, 10, -5]) //=> 7
// sumNumbers([]) //=> 0
// -----------------------------------------------------------------*/
// // Your solution for 03-sumNumbers here:

// const arr = [1,2,3,4,5];
// const array1 = [6,2,3,4,1];
// const array2 = [];

// function sumNumbers(array) {
//   let sum = 0
//   for (let i = 0; i < array.length; i++) {
//     sum += array[i]
//   }
//     return(sum);

// }

// console.log(sumNumbers(array1));

/*--- better solution (use forEach unless you have to exit loop early) ---*/
// function sumNumbers(nums) {
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/*--- best solution (don't worry, this will make sense soon enough) ---*/
// function sumNumbers(nums) {
//   return nums.reduce((sum, num) => sum += num, 0);
// }

// Recursive functions //
// function countDown(num){
//   if(num < 0){
//     return;
//   }
//   console.log(num)
//   return countDown(num - 1)
// }

// countDown(0);

// const array = [1,2,3];
// const array2 = [2, 4, 5, 8]
// function sumArrayOfNums(arr, index = 0, sum = 0){
//   if(index === arr.length){
//       return sum;
//   }
//   sum += arr[index];
//   return sumArrayOfNums(arr, index + 1, sum);
// }

// or

// function sumArrayOfNums(arr, index, sum){
//   if(index === arr.length){
//     return sum;
//   }
//   sum += arr[index];
//   return sumArrayOfNums(arr, index + 1, sum);
// }

// console.log(sumArrayOfNums(array, 0, 0));
// console.log(sumArrayOfNums(array2));

// Rest Parameters //
// Challenge: 04-addList
// Difficulty: Basic
// Prompt:
// - Write a function called addList that accepts any quantity of numbers as arguments, adds them together and returns the resulting sum.
// - Assume all parameters will be numbers.
// - If called with no arguments, return 0 (zero).
// Examples:
// add(1) //=> 1
// add(1, 50, 1.23) //=> 52.23
// add(7, -12) //=> -5

// Hint:  Check out the Further Study section of the JS Functions lesson regarding "rest parameters"

/*--- BEST SOLUTION:  Use rest paramater syntax (ES2015) then reduce ---*/
// function addList(...nums) {
//   // nums will be an array containing all arguments
//   return nums.reduce((sum, num) => sum + num, 0);
// }

// function addList(...nums) {
//   let sum = 0;
//   for (const num of nums) {
//     sum += num;
//   }
//   return sum;
// }

// console.log(addList());

/*--- make arguments a true array then forEach ---*/
// function addList() {
//   let nums = Array.from(arguments);
//   let sum = 0;
//   nums.forEach(function(num) {
//     sum += num;
//   });
//   return sum;
// }

/// Rock paper scissors ///
// const player = {
//   currentChoice: null,
// };
// const computer = {
//   currentChoice: null,
// };

// const choices = ['rock', 'paper', 'scissors'];

// const playerChooses = (event) => {
//   player.currentChoice = event.target.id;
//   gameOutcomes();
// };
// document.getElementById('rock').addEventListener('click', playerChooses);
// document.getElementById('paper').addEventListener('click', playerChooses);
// document.getElementById('scissors').addEventListener('click', playerChooses);

// const computerChooses = () => {
//   const randomIdx = Math.floor(Math.random() * choices.length);
//   computer.currentChoice = choices[randomIdx];
// };

// const displayOutcomes = (outcome) => {
//   const outcomes = document.createElement('h1');
//   outcomes.innerText = outcome;
//   const outcomesContainer = document.getElementById('outcomes-container');
//   outcomesContainer.append(outcomes);
// };

// const gameOutcomes = () => {
//   playerChooses();
//   computerChooses();
//   if (player.currentChoice === choices[0]) {
//     if (computer.currentChoice === choices[1]) {
//       displayOutcomes(`Player chose rock. Computer chose paper. Computer wins`);
//     } else if (computer.currentChoice === choices[2]) {
//       displayOutcomes(
//         `Player chose rock. Computer chose scissors. Player wins!`
//       );
//     } else {
//       displayOutcomes(`Player chose rock. It's a tie`);
//     }
//   }
//   if (player.currentChoice === choices[1]) {
//     if (computer.currentChoice === choices[2]) {
//       displayOutcomes(
//         `Player chose paper. Computer chose scissors. Computer wins`
//       );
//     } else if (computer.currentChoice === choices[0]) {
//       displayOutcomes(`Player chose paper. Computer chose rock . Player wins!`);
//     } else {
//       displayOutcomes(`Player chose paper. It's a tie`);
//     }
//   }
//   if (player.currentChoice === choices[2]) {
//     if (computer.currentChoice === choices[0]) {
//       displayOutcomes(
//         `Player chose scissors. Computer chose rock. Computer wins`
//       );
//     } else if (computer.currentChoice === choices[1]) {
//       displayOutcomes(
//         `Player chose scissors. Computer chose paper. Player wins!`
//       );
//     } else {
//       displayOutcomes(`Player chose scissors. It's a tie`);
//     }
//   }
// };
// function padIt(str,n){
//   //coding here
//   while (n > 0) {
//     if (n % 2) {
//     str = str + "*";
//     } else {
//       str = "*" + str;
//     }
//     n --;
//   }
//   console.log(str);
// }

// function padIt(str,n){
//   //coding here
//   while (n > 0) {
//     if(n % 2) {
//       str = "*" + str
//     } else {
//       str = str + "*"
//     }
//     n --;
//   }
//   console.log((str));
// }

// padIt("a",1);
// padIt("a",2);
// padIt("a",3);
// padIt("a",4);
// padIt("a",5);
// padIt("a",-2);

/// Example of a loop statment using break or continue
// const grabDoll1 = [
//   'Mickey Mouse',
//   'Barbie doll',
//   'Hello Kitty',
//   'Hello Kitty',
//   'Hello Kitty',
//   'Snow white',
// ];

// function grabDoll(dolls) {
//   let bag = [];
//   //coding here
//   for (let i = 0; i < dolls.length; i++) {
//     if (dolls[i] === 'Hello Kitty' || dolls[i] === 'Barbie doll') {
//       bag.push(dolls[i]);
//     }
//     if (bag.length === 3) {
//       break;
//     }
//   }
//   return bag;
// }

// console.log(grabDoll(grabDoll1));

// function grabDoll(dolls){
//   var bag=[];
//   //coding here
//   for (let i = 0; i < dolls.length; i++) {
//     if(dolls[i] === "Hello Kitty" || "Barbie doll") { ///I still put both conditions even if I am using || operator. Correct code above.
//       bag.push(dolls[i]);
//     } else continue;{///Don't need to use else continue. The condition will have it continue to iterate.
//   } //This also needs to be removed. Causing a syntax error and the if condition below cannot execute. Or add continue into curly brackets
//     if (bag.length === 3) {
//       break;
//     }
//       return bag;
// }

// const books = [];
// books.push("The Shinning");
// console.log(books);
// books.unshift("Moby Dick")
// console.log(books);
// books[1] = "Dune";
// console.log(books);
// books.splice(1,0,"Great Expectations")
// console.log(books);
// books.forEach(function(book) {
//   console.log(book)
// })
// books.forEach(function(book, idx){
//   console.log(`${idx+1} ${book}`)
// })
// for (let book of books) {
//   console.log(book)
// };

// const computeRemainder = (a,b) => {
//   if (b === 0) {
//     return Infinity
//   }
//   return a % b
// }

// console.log(computeRemainder(10.5, 3));

///My code that did not work ///
// const range = (x, y) => {
//   while (x < y) return x + 1;

//   if (y > x) {
//     return 'First argument must be less than second';
//   }
// };

// console.log(range(5, 2));

// /// Instructor code that did work ///
// function range2(start, finish) {
//   if (start > finish) return 'First argument must be less than second';

//   let range = [];
//   for (let n = start; n < finish; n++) {
//     range.push(n);
//   }
//   return range;
// }

// /// Chat GPT code using while loop ///
// console.log(range2(5, 2));

// const range3 = (x, y) => {
//   if (y > x) {
//     return 'First argument must be less than second';
//   }
//   const result = [];
//   while (x < y) {
//     result.push(x);
//     x++;
//   }
//   return result.length === 0 ? "First argument must be less than second" : result;
// };

// console.log(range3(5, 2));

/// Using for in loop ///

// function giveMeFive(obj) {
//   const array = [];
//   for (let key in obj) {
//     if (key.length === 5) {
//       array.push(key);
//     }
//     if (obj[key].length === 5) {
//       array.push(obj[key]);
//     }
//   }

//   return array;
// }

// /// Created a variable named value within the for loop to hold the value of an object. Easier to understand ///

// function giveMeFive(obj) {
//   const array = [];
//   for (let key in obj) {
//     const value = obj[key];
//     if (key.length === 5) {
//       array.push(key);
//     }
//     if (value.length === 5) {
//       array.push(value);
//     }
//   }

//   return array;
// }

// console.log(giveMeFive({Our:"earth",is:"a",beautyful:"world"}))
// console.log(giveMeFive({Ihave:"enough", money:"to",buy:"a",car:"model"}))
// console.log(giveMeFive({Pears:"than",apple:"sweet"}))

// /*
// Exercise 1:
//   - Define an empty array named foods
// */

// // Exercise 1 has been completed for you...

// const foods = [];

// console.log('Exercise 1 Result:\n', foods);

// /*
// Exercise 2:
//   - Add the strings 'pizza' & 'cheeseburger' to the foods array such that 'pizza' comes before 'cheeseburger'.
// */

// // Complete Exercise 2 below...

// foods.push('pizza', 'cheeseburger');

// console.log('Exercise 2 Result:\n', foods);

// /*
// Exercise 3:
//   - Add the string 'taco' to the foods array so that 'taco' is the first food in the array.
// */

// // Complete Exercise 3 below...
// foods.unshift('taco');

// console.log('Exercise 3 Result:\n', foods);

// /*
// Exercise 4:
//   - Access the string 'pizza' (based upon its known position) in the foods array and assign to a variable named favFood.
// */

// // Complete Exercise 4 below...

// const favFood = foods[1];

// console.log('Exercise 4 Result:\n', favFood);

// /*
// Exercise 5:
//   - Insert the string 'tofu' in the foods array between 'pizza' & 'cheeseburger'
// */

// // Complete Exercise 5 below...

// foods.splice(2, 0, 'tofu');

// console.log('Exercise 5 Result:\n', foods);

// /*
// Exercise 6:
//   - Replace the string 'pizza' in the foods array with the strings 'sushi' & 'cupcake'.
// */

// // Complete Exercise 6 below...

// foods.splice(1, 1, 'sushi', 'cupcakes');

// console.log('Exercise 6 Result:\n', foods);

// /*
// Exercise 7:
//   - Use the slice method on the foods array to create a new array containing 'sushi' & 'cupcake'.
//   - Assign the new array to a variable named yummy.
// */

// // Complete Exercise 7 below...

// const yummy = foods.slice(1, 3);

// console.log('Exercise 7 Result:\n', yummy);

// /*
// Exercise 8:
//   - Using the indexOf method on the foods array, assign the index of the 'tofu' string to a variable named soyIdx.
// */

// // Complete Exercise 8 below...

// const soyIdx = foods.indexOf('tofu');

// console.log('Exercise 8 Result:\n', soyIdx);

// // /*
// // Exercise 9:
// //   - Assign to a variable named allFoods the result of joining the strings in the foods array such that the result is the following single string:
// //     'taco -> sushi -> cupcake -> tofu -> cheeseburger'
// // */

// // // Complete Exercise 9 below...

// const allFoods = foods.join(' -> ');

// console.log('Exercise 9 Result:\n', allFoods);

// /*
// Exercise 10:
//   - Assign a boolean to a variable named hasSoup depending upon whether or not the foods array includes the string 'soup'.
// */

// // Complete Exercise 10 below...

// const hasSoup = foods.includes('soup');

// console.log('Exercise 10 Result:\n', hasSoup);

// /*
// Exercise 11:
//   - Use the forEach method to iterate through the provided nums array and add each odd number to a new array named odds.
//   - Hint: Initialize the odds variable to an empty array before the iteration.
// */

// const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

// // Complete Exercise 11 below...

// const odds = [];
// nums.forEach(function (num) {
//   if (num % 2 !== 0) odds.push(num);
// });

// console.log('Exercise 11 Result:\n', odds);

// /*
// Exercise 12:
//   - Use the forEach method to iterate through the same nums array and add the number to **one** of the following arrays:
//   fizz, buzz or fizzbuzz - based upon the following:
//   	- Add to the fizzbuzz array if the number is evenly divisible by 3 & 5.
//   	- Add to the fizz array if the number is evenly divisible by 3.
//   	- Add to the buzz array if the number is evenly divisible by 5.
// */

// // Complete Exercise 12 below...
// const fizz = [];
// const buzz = [];
// const fizzbuzz = [];

// nums.forEach(function (num) {
//   if (num % 3 === 0) {
//     fizz.push(num);
//   }
//   if (num % 5 === 0) {
//     buzz.push(num);
//   }
//   if (num % 3 === 0 && num % 5 === 0) {
//     fizzbuzz.push(num);
//   }
// });

// console.log('Exercise 12 Results:');
// console.log('  fizz:', fizz);
// console.log('  buzz:', buzz);
// console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13:
  - Given the below numArrays array of arrays (two-dimensional array), assign the last nested array to a variable named numList.
  - Assume you don't know how many nested arrays numArrays contains.
*/

// const numArrays = [
//   [100, 5, 23],
//   [15, 21, 72, 9],
//   [45, 66],
//   [7, 81, 90],
// ];

// // Complete Exercise 13 below...

// const numList = numArrays[numArrays.length - 1];

// console.log('Exercise 13 Result:\n', numList);

/*
Exercise 14:
  - Given the above numArrays array, access the number 66 and assign to a variable named num.
*/

// Complete Exercise 14 below...

// const num = numArrays[2][1];

// console.log('Exercise 14 Result:\n', num);

/*
Exercise 15:
  - Given the above numArrays array, use nested forEach methods to sum up all the numbers contained within numArrays and assign to a variable named total.
  - Hint: Be sure to declare and initialize the total variable before the iterations.
*/

// Complete Exercise 15 below...

// let total = 0;
// numArrays.forEach(function (arr) {
//   arr.forEach(function (num) {
//     total = num + total;
//   });
// });

// console.log('Exercise 15 Result:\n', total);

// function reverseUpcaseString(string) {
//   const reversedString = string.split("").reverse().join("");
//   return reversedString.toUpperCase();
// }

// console.log(reverseUpcaseString('SEI Rocks!'));

// function reverseUpcaseString(str) {
//   let results = '';
//   for (let i = 0; i < str.length; i++) {
//     // can use square brackets to access chars in a string
//     // but using the charAt() method is preferred
//     results = str.charAt(i).toUpperCase() + results;
//   }
//   return (results);
// }

/// Interating through a string and removing an element in the string. ///
// function removeEnds(str) {
//   if (str.length < 3) {
//     return '';
//   }
//   const newString = str.slice(1, -1);
//   return newString
// }

// console.log(removeEnds('SEI Rocks!'));

// /*--- Using substr String method ---*/
// // function removeEnds(str) {
// //   if (str.length < 3) return '';
// //   return str.substr(1, str.length - 2);
// // }

// /*--- Using for loop ---*/
// function removeEnds(str) {
//   if (str.length < 3) return '';
//   let result= '';
//   for (let i = 1; i < str.length - 1; i++) {
//     result += str.charAt(i);
//   }
//   return result;
// }

// console.log(planetHasWater("Jupiter"));

// function planetHasWater(planet) {
//   let planet = planet.toLowerCase();
//   if (planet === "Earth" || planet === "Mars") {
//     return true
//   } else
//     return false
// }

// const planetHasWater2 = function(planet) {
//    const lowerCasePlanet = planet.toLowerCase();
//   if (lowerCasePlanet === "earth" || lowerCasePlanet === "mars") {
//     return true;
//   } else
//     return false;
// }

// console.log( planetHasWater2('Earth') ) //=> true
// console.log( planetHasWater2('Venus') ) //=> false
// // Test the bonus...
// console.log( planetHasWater2('mArS') ) //=> true

// shirtPriceAfterTax = shirtPrice * (1 + salesTax);
// shirtPriceAfterShipping = shirtPriceAfterTax + shippingPrice;
// shirtPriceAfterShippingRounded = shirtPriceAfterShipping.toFixed(2);

// sweatshirtPriceAfterTax = sweatshirtPrice * (1 + salesTax);
// sweatshirtPriceAfterShipping = sweatshirtPriceAfterTax + shippingPrice;
// sweatshirtPriceAfterShippingRounded = sweatshirtPriceAfterShipping.toFixed(2);

// smallPosterPriceAfterTax = smallPosterPrice * (1 + salesTax);
// smallPosterPriceAfterShipping = smallPosterPriceAfterTax + shippingPrice;
// smallPosterPriceAfterShippingRounded = smallPosterPriceAfterShipping.toFixed(2);

// largePosterPriceAfterTax = largePosterPrice * (1 + salesTax);
// largePosterPriceAfterShipping = largePosterPriceAfterTax + shippingPrice;
// largePosterPriceAfterShippingRounded = largePosterPriceAfterShipping.toFixed(2);

// mugPriceAfterTax = mugPrice * (1 + salesTax);
// mugPriceAfterShipping = mugPriceAfterTax + shippingPrice;
// mugPriceAfterShippingRounded = mugPriceAfterShipping.toFixed(2);

// const maxOfThree = function(a,b,c){
//   if (a > b && a > c) {
//     return a
//   } else if (b > a && b > c) {
//     return b
//   } else {
//     return c
//   }
// }

// console.log(maxOfThree(3,1,2));

// function isCharAVowel(str) {
//   if (str === 'a' || str === 'e' || str === 'i' || str === 'o' || str === 'u') {
//     return true;
//   }
//   return false;
// }

// console.log(isCharAVowel('i'));

// const sumArray = function(arr) {
//   let result = 0;
//   for (let i = 0; i < arr.length; i++) {
//     result += arr[i]
//   }
//   return result
// }

// console.log(sumArray([6,12,18]));

// function multiplyArray(nums) {
//   let result = 1;
//   for (let num of nums) {
//     result *= num
//   }
//   return result
// }

// console.log(multiplyArray([2,4,5]));

// const numArgs = function() {
//   // console.log(arguments)
//   return arguments.length
// }

// console.log(numArgs(1,2,3,"a","r",[2,3,5],{over:4, under: 5}));

//rest collects the rest of the arguments of a function and adds them to an array-like object that you can then use. //
// This approach is more modern and generally preferred over using the arguments object for clarity and consistency. //
// The rest parameter are denoted by the three dots (...name)
// const numArgs2 = function(...args) {
//   // console.log(args);
//   return args.length;
// };

// console.log(numArgs2(1, 2, 3, "a", "r", [2, 3, 5], { over: 4, under: 5 }));

// function reversedString(str) {
//   let newString = str.split('');
//   let reversed = '';
//   for (let i = newString.length - 1; i >= 0; i--) {
//     reversed += newString[i];
//   }
//   return reversed;
// }

// console.log(reversedString('rockstar'));

// function reversedString(str) {
//   let reversed = '';
//   for (let i = str.length - 1; i >= 0; i--) {
//     reversed += str[i];
//   }
//   return reversed;
// }

// console.log(reversedString('rockstar'));

// function reversedString(str) {
//   let newString = str.split('').reverse().join("")
//   return newString;
// }

// console.log(reversedString('rockstar'));

//     function reverseUpcaseString(str) {
//   let results = '';
//   for (let i = 0; i < str.length; i++) {
//     // can use square brackets to access chars in a string
//     // but using the charAt() method is preferred
//     results = str.charAt(i).toUpperCase() + results

//   }
//   return (results);
// }

// console.log(reverseUpcaseString('rockstar'));

// const longestStringArray = function (arr) {
  
// }


// // console.log(longestStringArray(['say', 'hello', 'in', 'the', 'morning']));
// // Wrong. You cannot find the answer by manipulating the existing array. You have to create a new array to manipulate //
// // Then push the values you want into the new array //
// function stringLongerThan(arr, num) {
//   // You don't have an empty array to add values into
//   for(let i=0; i < arr.length; i++) {
//     if (arr[i].length > num) {
//       return arr[i]; // You should be pushing the new values that meet the condition into the new array and returning the new array //
//     }
//   }
// }

// console.log(stringLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));


// // Correct way to complete the function // 
// function stringsLongerThan(arr, num) {
//   const result = [];
  
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > num) {
//       result.push(arr[i]);
//     }
//   }

//   return result;
// }

// console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));
