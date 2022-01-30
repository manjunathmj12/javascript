// //---------------------ASSIGNMENTS----------------------
// // 1.calculating the bmi for mark and john
// let massM, massJ;
// let heightM, heightJ;
// let marksBMI, johnsBMI;
// massM = 95;
// heightM = 1.88;
// massJ = 85;
// heightJ = 1.76;
// marksBMI = massM / heightM ** 2;
// johnsBMI = massJ / heightJ ** 2;
// let markHigherBMI = marksBMI > johnsBMI;
// if (marksBMI > johnsBMI) {
//   console.log(`Mark's BMI is higher than John's!`);
// } else {
//   console.log(`John's BMI is higher than Mark's!`);
// }
// console.log(`marks BMI is ${marksBMI} and john BMI is ${johnsBMI}`);

// //2.calculating the average score between the two teams
// const dFirstScore = 97;
// const dSecondScore = 90;
// const dThirdScore = 98;
// const kFirstScore = 80;
// const kSecondScore = 95;
// const kThirdScore = 123;
// const dolphinsScore = (dFirstScore + dSecondScore + dThirdScore) / 3;
// const koalasScore = (kFirstScore + kSecondScore + kThirdScore) / 3;
// console.log(
//   ` dolphins score is ${dolphinsScore} and koalas score is ${koalasScore}`
// );
// if (dolphinsScore > koalasScore && dolphinsScore >= 100) {
//   console.log(`Dolphins won the game`);
// } else if (koalasScore > dolphinsScore && koalasScore >= 100) {
//   console.log(`koalas won the game `);
// } else if (dolphinsScore === koalasScore) {
//   console.log(`draw game `);
// } else {
//   console.log("no one won the game");
// }

// //4.calculating average between two team using functions
// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };
// function checkWinner() {
//   const dolphinsScore = calcAverage(07, 3, 71);
//   const koalasScore = calcAverage(65, 54, 49);
//   console.log(dolphinsScore, koalasScore);
//   if (dolphinsScore >= 2 * koalasScore) {
//     console.log("dolphins won the game");
//   } else if (koalasScore >= 2 * dolphinsScore) {
//     console.log("koalas won the game");
//   } else {
//     console.log("no one won the game");
//   }
// }
// console.log(checkWinner());

// //5.calculating bmi using objects for each of them
// const mark = {
//   fullName: "Mark Miller",
//   weight: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//   },
// };
// const john = {
//   fullName: "John Smith",
//   weight: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.weight / this.height ** 2;
//   },
// };
// mark.calcBMI();
// john.calcBMI();
// if (john.bmi > mark.bmi) {
//   console.log(
//     `${john.fullName} BMI ${john.bmi} is higher than ${mark.fullName} BMI `
//   );
// } else {
//   console.log(
//     `${mark.fullName} BMI ${mark.bmi} is higher than ${john.fullName} BMI ${john.bmi}`
//   );
// }

// // ___________________day 5 ___________________
// // template literals
// const i = 5;
// console.log(` we can add string and as well as access the variables ${i}`);
// // Number() function
// const value1 = prompt("enter the number"); //default it takes the value in string
// const value2 = Number(prompt("enter the number"));
// console.log(
//   `1st input ${value1} ${typeof value1} , 2nd input ${value2} ${typeof value2} `
// );

// //equality
// const item1 = 35;
// const item2 = "35";
// console.log(item1 == item2 ? "same" : "not same");
// console.log(item1 === item2 ? "same" : "not same"); // strict equality

// //prompt() fucntion
// const value1 = prompt("enter the number");

// // if
// const item1 = 35;
// const item2 = "35";
// if (item1 === item2) {
//   console.log("same");
// } else {
//   console.log("not same");
// }

// //if else if
// const item1 = 35;
// const item2 = "35";
// if (item1 === item2) {
//   console.log("same");
// } else if (item1 == item2) {
//   console.log("same without strict equality");
// } else {
//   console.log("not same");
// }

// //logical operators
// const firstInput = Number(prompt("enter the number"));
// const secondInput = Number(prompt("enter the number"));
// if (firstInput === secondInput && secondInput < 100) {
//   console.log("same");
// } else if (firstInput < secondInput || secondInput > 100) {
//   console.log("2nd input is more");
// } else {
//   console.log("1st input is more");
// }

// //--------------------day 7--------------------
// // objects
// const book = {
//   name: "surya",
//   price: 28,
//   size: "long",
// };

// // retrieving objects
// const book = {
//   bookName: "surya",
//   price: 28,
//   size: "long",
// };
// console.log(`${book.bookName}`);
// console.log(book["bookName"]);

// //adding elements into the array
// book.author = "chandra";
// console.log(book);

// //objects methods
// const book = {
//   bookName: "surya",
//   price: 28,
//   size: "long",
//   finalPrice: function (price) {
//     return price * 1.2;
//   },
// };
// console.log(`${book.finalPrice(28)}`);

// //this keyword
// const book = {
//   bookName: "surya",
//   price: 28,
//   size: "long",
//   finalPrice: function () {
//     return this.price * 1.2;
//   },
// };
// console.log(`${book.finalPrice()}`);

// // jonas is 46 year old teacher , and he has  a drivers licnece
// const manjunath = {
//   firstName: "manju",
//   lastName: "nath",
//   job: "student",
//   birthYear: 2001,
//   hasDriverLicense: false,
//   calAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.birthYear;
//   },
//   getsummary: function () {
//     return ` ${this.firstName} is ${(this.calAge(), this.age)} year old ${
//       this.job
//     } , and he has ${this.hasDriverLicense ? "a" : "no"} driver license`;
//   },
// };
// console.log(manjunath.getsummary());

// //loops
// //for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(`javasscript ${i}`);
// }

// //adding elements into the array using for loop
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const subNumbers = [];
// for (let i = 1; i <= numbers.length; i++) {
//   if (i % 2 === 0) {
//     subNumbers.push(i);
//   }
// }
// console.log(subNumbers);

// //continue and break
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const subNumbers = [];
// for (let i = 1; i <= numbers.length; i++) {
//   if (i % 2 === 0) {
//     continue;
//   } else if (i === 7) {
//     break;
//   }
//   subNumbers.push(i);
// }
// console.log(subNumbers);

// //nested loops
// for (let i = 1; i <= 10; i++) {
//   console.log(`level 1 ${i} `);
//   for (let j = 1; i <= 3; i++) {
//     console.log(`level 2 ${j}`);
//   }
// }

// //while loop
// let i = 1;
// while (i <= 10) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
//   i++;
// }

//// (TDZ)
//// variable declaration
// console.log(firstName);
// console.log(age);
// console.log(year);

// var firstName = "mj";
// let age = 20;
// const year = 2001;
