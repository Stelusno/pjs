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

function saleHotDogs() {
  if (n < 5) {
    return 100;
  } else if (n >= 5 && n < 10) {
    return 95;
  } else if (n >= 10) {
    return 90;
  } else 0;
}

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

// console.log(reverseString('hello'));

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

//   // Reduce the remaining balance by the payment amount
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

const myArray = ['a', 'e', 'i', 'o', 'u'];

const printArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    return arr[i]; 
  }
};

printArray(myArray);

function printArray2(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); 
  }
} 

printArray2(myArray); 


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

// doucument.querySelector('h1').innerHTML = 'Visit my <a href='http://www.coolsite.net'>site</a>';
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


const h1El = document.getElementById('title'); 
h1El.remove(); 

const h1El2 = document.querySelector('#title'); 
h1El.remove(); 

document.getElementById('title').remove();

document.querySelector('#title').remove(); 

const h1titleEl = document.createElement('h1');
//Below is incorrect. You don't have to query for the h1 tag you just created.//
//You can just access it through the variable h1titleEl.innerText//
h1titleEl.querySelector('h1').innerText = 'Welcome Players. Begin the Roman Games';
document.body.appendChild(h1titleEl); 


//This would work. 
h1titleEl.innerText = 'Welcome Players. Begin the Roman Games';
document.body.appendChild(h1titleEl);