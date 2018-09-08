"use strict";
//once the page has loaded a listner is created for a button
$(document).ready(function() {
  $('#number-submit1').on("click", convertNumber);
  $('#number-submit2').on("click", secondMethod);
  $('#number-submit3').on("click", thirdMethod);
  $('#number-submit4').on("click", forthMethod);
  $('#numeral-submit').on("click", numeralsToNumbers);
});


//this the main control function
function convertNumber() {
  let number = getNumber(event);
  let roman = convertToRoman(number);
  let romanFormatted = formatArray(roman);

  showResult1(number, romanFormatted);
}

//gets a number from the input field
function getNumber(event) {
  event.preventDefault();
  let input = document.getElementById("number-input1").value;
  if (isNaN(input)) {
    alert("you must enter a NUMBER");
    document.getElementById("number-input1").value = '';
  } else {
    return input;
  }
}

//this function creates an array of letters to determine a given
//number into roman numerals
function convertToRoman(num) {
  let rom = [];
  while (num >= 500000) {
    if (num >= 1000000) {
      rom.push("M\u0305");
      num = num - 1000000;
    } else {
      rom.push("D\u0305");
      num = num - 500000;
    }
  }
  while (num >= 50000) {
    if (num >= 100000) {
      rom.push("C\u0305");
      num = num - 100000;
    } else {
      rom.push("L\u0305");
      num = num - 50000;
    }
  }
  while (num >= 5000) {
    if (num >= 10000) {
      rom.push("X\u0305");
      num = num - 10000;
    } else {
      rom.push("V\u0305");
      num = num - 5000;
    }
  }
  while (num >= 900) {
    if (num >= 1000) {
      rom.push("M");
      num = num - 1000;
    } else {
      rom.push("CM");
      num = num - 900;
    }
  }
  while (num >= 400) {
    if (num >= 500) {
      rom.push("D");
      num = num - 500;
    } else {
      rom.push("CD");
      num = num - 400;
    }
  }
  while (num >= 90) {
    if (num >= 100) {
      rom.push("C");
      num = num - 100;
    } else {
      rom.push("XC");
      num = num - 90;
    }
  }
  while (num >= 40) {
    if (num >= 50) {
      rom.push("L");
      num = num - 50;
    } else {
      rom.push("XL");
      num = num - 40;
    }
  }
  while (num >= 9) {
    if (num >= 10) {
      rom.push("X");
      num = num - 10;
    } else {
      rom.push("IX");
      num = num - 9;
    }
  }
  while (num >= 4) {
    if (num >= 5) {
      rom.push("V");
      num = num - 5;
    } else {
      rom.push("IV");
      num = num - 4;
    }
  }
  while (num >= 1) {
    if (num >= 1) {
      rom.push("I");
      num = num - 1;
    }
  }
  return rom;
}

//combines each array entry into one string value
function formatArray(roman) {
  let sense = roman.join('');
  return sense;
}

//displays the result on the page only if the input is a number.
function showResult1(number, answer) {
  if (number > 0) {
    $('#results1').html($('<p>' + number + ' = ' + answer + '</p>'));
  }
}


//----------------------------------------------------------------


function secondMethod() {
  let integer = getOtherNumber(event);
  if (integer) {
    let organise = organiseNumbers(integer);
    let numerals = convertToNumerals(organise);
    let numeralFormatted = formatArray(numerals);

    showResult2(integer, numeralFormatted);
  }
}

//gets a number from the input field
function getOtherNumber(event) {
  event.preventDefault();
  let input = document.getElementById("number-input2").value;
  if (isNaN(input)) {
    alert("you must enter a NUMBER");
    document.getElementById("number-input2").value = '';
  } else {
    return input;
  }
}

//splits the number into inividual integers in an array-
//then reverses the order of the array.
function organiseNumbers(integer) {
  let format = integer.split("").reverse();
  return format;
}

//converts each integer into roman numerals
function convertToNumerals(number) {
  let roman = [];
  switch (number[0]) {
    case "1":
      roman.unshift("I");
      break;
    case "2":
      roman.unshift("II");
      break;
    case "3":
      roman.unshift("III");
      break;
    case "4":
      roman.unshift("IV");
      break;
    case "5":
      roman.unshift("V");
      break;
    case "6":
      roman.unshift("VI");
      break;
    case "7":
      roman.unshift("VII");
      break;
    case "8":
      roman.unshift("VIII");
      break;
    case "9":
      roman.unshift("IX");
      break;
  }
  switch (number[1]) {
    case "1":
      roman.unshift("X");
      break;
    case "2":
      roman.unshift("XX");
      break;
    case "3":
      roman.unshift("XXX");
      break;
    case "4":
      roman.unshift("XL");
      break;
    case "5":
      roman.unshift("L");
      break;
    case "6":
      roman.unshift("LX");
      break;
    case "7":
      roman.unshift("LXX");
      break;
    case "8":
      roman.unshift("LXXX");
      break;
    case "9":
      roman.unshift("XC");
      break;
  }
  switch (number[2]) {
    case "1":
      roman.unshift("C");
      break;
    case "2":
      roman.unshift("CC");
      break;
    case "3":
      roman.unshift("CCC");
      break;
    case "4":
      roman.unshift("CD");
      break;
    case "5":
      roman.unshift("D");
      break;
    case "6":
      roman.unshift("DC");
      break;
    case "7":
      roman.unshift("DCC");
      break;
    case "8":
      roman.unshift("DCCC");
      break;
    case "9":
      roman.unshift("CM");
      break;
  }
  switch (number[3]) {
    case "1":
      roman.unshift("M");
      break;
    case "2":
      roman.unshift("MM");
      break;
    case "3":
      roman.unshift("MMM");
      break;
    case "4":
      roman.unshift("MMMM");
      break;
    case "5":
      roman.unshift("V\u0305");
      break;
    case "6":
      roman.unshift("V\u0305M");
      break;
    case "7":
      roman.unshift("V\u0305MM");
      break;
    case "8":
      roman.unshift("V\u0305MMM");
      break;
    case "9":
      roman.unshift("V\u0305MMMM");
      break;
  }
  switch (number[4]) {
    case "1":
      roman.unshift("X\u0305");
      break;
    case "2":
      roman.unshift("X\u0305X\u0305");
      break;
    case "3":
      roman.unshift("X\u0305X\u0305X\u0305");
      break;
    case "4":
      roman.unshift("X\u0305X\u0305X\u0305X\u0305");
      break;
    case "5":
      roman.unshift("L\u0305");
      break;
    case "6":
      roman.unshift("L\u0305X\u0305");
      break;
    case "7":
      roman.unshift("L\u0305X\u0305X\u0305");
      break;
    case "8":
      roman.unshift("L\u0305X\u0305X\u0305X\u0305");
      break;
    case "9":
      roman.unshift("L\u0305X\u0305X\u0305X\u0305X\u0305");
      break;
  }
  switch (number[5]) {
    case "1":
      roman.unshift("C\u0305");
      break;
    case "2":
      roman.unshift("C\u0305C\u0305");
      break;
    case "3":
      roman.unshift("C\u0305C\u0305C\u0305");
      break;
    case "4":
      roman.unshift("C\u0305C\u0305C\u0305C\u0305");
      break;
    case "5":
      roman.unshift("D\u0305");
      break;
    case "6":
      roman.unshift("D\u0305C\u0305");
      break;
    case "7":
      roman.unshift("D\u0305C\u0305C\u0305");
      break;
    case "8":
      roman.unshift("D\u0305X\u0305C\u0305C\u0305");
      break;
    case "9":
      roman.unshift("D\u0305C\u0305C\u0305C\u0305C\u0305");
      break;
  }
  switch (number[6]) {
    case "1":
      roman.unshift("M\u0305");
      break;
    case "2":
      roman.unshift("M\u0305M\u0305");
      break;
    case "3":
      roman.unshift("M\u0305M\u0305M\u0305");
      break;
    case "4":
      roman.unshift("M\u0305M\u0305M\u0305M\u0305");
      break;
    case "5":
      roman.unshift("M\u0305M\u0305M\u0305M\u0305M\u0305");
      break;
    case "6":
      roman.unshift("M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305");
      break;
    case "7":
      roman.unshift("M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305");
      break;
    case "8":
      roman.unshift("M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305");
      break;
    case "9":
      roman.unshift("M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305");
      break;
  }
  return roman;
}

//displays the result on the page only if the input is a number.
function showResult2(number, result) {
  $('#results2').html($('<p>' + number + ' = ' + result + '</p>'));
}

//-----------------------------------------------------------------
// third method

const romArr = [
  ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
  ["X", "XX", "XXX", "X", "L", "LX", "LXX", "LXXX", "XC"],
  ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
  ["M", "MM", "MMM", "MMMM", "V\u0305", "V\u0305M", "V\u0305MM", "V\u0305MMM", "V\u0305MMMM"],
  ["X\u0305", "X\u0305X\u0305", "X\u0305X\u0305X\u0305", "X\u0305X\u0305X\u0305X\u0305", "L\u0305", "L\u0305X\u0305", "L\u0305X\u0305X\u0305", "L\u0305X\u0305X\u0305X\u0305", "L\u0305X\u0305X\u0305X\u0305X\u0305"],
  ["C\u0305", "C\u0305C\u0305", "C\u0305C\u0305C\u0305", "C\u0305C\u0305C\u0305C\u0305", "D\u0305", "D\u0305C\u0305", "D\u0305C\u0305C\u0305", "D\u0305C\u0305C\u0305C\u0305", "D\u0305C\u0305C\u0305C\u0305C\u0305"],
  ["M\u0305", "M\u0305M\u0305", "M\u0305M\u0305M\u0305", "M\u0305M\u0305M\u0305M\u0305", "M\u0305M\u0305M\u0305M\u0305M\u0305", "M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305",
    "M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305", "M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305", "M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305"
  ]
];


function thirdMethod() {
  let cesar = getNumber3(event);
  if (cesar) {
    let numArr = organiseNumbers(cesar);
    let parma = changeToNumerals(numArr);
    let romanFormatted = formatArray(parma);

    showResult3(cesar, romanFormatted);
  }
}

// //gets a number from the input field
function getNumber3(event) {
  event.preventDefault();
  let input = document.getElementById("number-input3").value;
  if (isNaN(input)) {
    alert("you must enter a NUMBER");
    document.getElementById("number-input3").value = '';
  } else {
    return input;
  }
}

// now that's much better!
function changeToNumerals(num) {
  let win = [];
  for (let x = 0; x < num.length; x++) {
    win.unshift(romArr[x][num[x] - 1]);
  }
  return win;
}

//displays the result on the page only if the input is a number.
function showResult3(number, result) {
  if (number > 0) {
    $('#results3').html($('<p>' + number + ' = ' + result + '</p>'));
  }
}

//-----------------------------------------------------------------
// 4th method

const romanArr = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V",
  "IV", "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX",
  "V", "IV", "I"
]
const numberArr = [1000000, 900000, 500000, 400000, 100000, 90000, 50000, 40000,
  10000, 9000, 5000, 4000, 1000, 900, 500, 400, 100, 90, 50, 40,
  10, 9, 5, 4, 1
]

function forthMethod() {
  let numero = getNumber4(event);
  let answerArr = switchToNumerals(numero);

  showResult4(numero, answerArr);
}

//gets a number from the input field
function getNumber4(event) {

  event.preventDefault();

  let input = document.getElementById("number-input4").value;
  if (isNaN(input)) {
    alert("you must enter a NUMBER");
    document.getElementById("number-input4").value = '';
  } else {
    return input;
  }
}

// now that's even better!
function switchToNumerals(num) {
  //create variable that will hold the numerals for values over 4000 and vallues
  //less than 4000. so that when displaying them, an 'overscore' can show that
  //the value is a multiple of 1000.
  let answer4 = [
    [],
    []
  ];

  //work through the number and numeral arrays - subtracting the working amount
  //and adding the numerals to the answer4 array.
  for (let x = 0; x < numberArr.length; x++) {
    while (num >= numberArr[x] && num >= 4000) {
      answer4[0] += romanArr[x];
      num -= numberArr[x];
    }
    while (num >= numberArr[x] && num < 4000) {
      answer4[1] += romanArr[x];
      num -= numberArr[x];
    }
  }

  return answer4;
}


//displays the result on the page only if the input is a number.
function showResult4(number, result) {
  if (number > 0) {
    $('#results4').html($('<p>' + number + ' = <span style="text-decoration: overline">' + result[0] + '</span>' + result[1] + '</p>'));
  }
}


//-------------------------------------------------------------------
// //convert it back....

//controller
function numeralsToNumbers() {
  let numeralsGiven = getNumerals(event);
  if (numeralsGiven) {
    //change numeral string into an array of letters
    let numeralsArray = breakAndCapitalise(numeralsGiven);
    //pair any numerals that belong together
    let pairedNumerals = pairNumerals(numeralsArray);
    //check to see that numerals are in a valid order

    let validOrder = checkNumeralOrder(pairedNumerals);
    if (validOrder) {
      let convertedAmount = changeNumeralsToNumbers(validOrder);

      showResult5(numeralsGiven.toUpperCase(), convertedAmount);
    }
  }
}

// gets the numerals from the input field
function getNumerals(event) {
  event.preventDefault();

  let input = document.getElementById("numeral-input").value;

  //regex test for Roman Numerals
  const numeralRegex = /^[mdclxvi]*$/gi;
  if (!numeralRegex.test(input)) {
    alert("you must enter a ROMAN NUMERAL");
    document.getElementById("numeral-input").value = '';
  } else {
    return input;
  }
}


//change numeral string into an array of letters
function breakAndCapitalise(rom) {
  return rom.toUpperCase().split('');
}

//pair numerals that belong together
function pairNumerals(arr) {
  let filteredArray = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "M":
      case "D":
      case "L":
      case "V":
        filteredArray.push(arr[i]);
        break;
      case "C":
        if (arr[i + 1] === "M" || arr[i + 1] === "D") {
          filteredArray.push(arr[i] + arr[i + 1]);
          i++;
        } else {
          filteredArray.push(arr[i]);
        }
        break;
      case "X":
        if (arr[i + 1] === "C" || arr[i + 1] === "L") {
          filteredArray.push(arr[i] + arr[i + 1]);
          i++;
        } else {
          filteredArray.push(arr[i]);
        }
        break;
      case "I":
        if (arr[i + 1] === "X" || arr[i + 1] === "V") {
          filteredArray.push(arr[i] + arr[i + 1]);
          i++;
        } else {
          filteredArray.push(arr[i]);
        }
        break;
    }
  }
  return filteredArray;
}



function checkNumeralOrder(rom) {
  //array of Numerals in decending order of value
  const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  const nonRepeaters = ["CM", "D", "CD", "XC", "L", "XL", "IX", "V", "IV"]
  const condition1 = (val1, val2, cond1, cond2) => romanNum.indexOf(val1) === cond1 && romanNum.indexOf(val2) === cond2 && val2 !== undefined;
  const condition2 = (val1, val2, cond1, cond2, cond3) => romanNum.indexOf(val1) === cond1 &&
    romanNum.indexOf(val2) < cond2 && val2 !== undefined ||
    romanNum.indexOf(val1) === cond3 && romanNum.indexOf(val2) < cond2 && val2 !== undefined;
  let correctOrderCounter = 0;

  //cycle through each value in the array. cross checking our given array with
  //an array of roman numerals in value order.
  for (let x = 0; x < rom.length; x++) {
    //if the value of the numeral is less than that of the next one in the array
    //then it is an invalid order - show an alert and clear input field
    if (romanNum.indexOf(rom[x]) > romanNum.indexOf(rom[x + 1]) && rom[x + 1] !== undefined) {
      alert("This is an invalid order of Roman Numerals. wrong order, numerals should be in decending order.");
      wipeInput();
      break;
    }
    //there are certain numerals that must not be iterated twice in succession
    else if (nonRepeaters.indexOf(rom[x]) >= 0 && rom[x] === rom[x + 1] &&
      rom[x + 1] !== undefined) {
      alert("This is an invalid order of Roman Numerals. Some numerals can't repeat like that.");
      wipeInput();
      break;
    }
    //900(CM) or 400(CD) cannot be follwed by 500(D) or 400 (CD) or 100(C)
    else if (condition2(rom[x], rom[x + 1], 1, 5, 3)) {
      alert("This is an invalid order of Roman Numerals. 900 or 400 can't be followed by a 500,400 or 100.");
      wipeInput();
      break;
    }
    //500 can't be followed by a 400
    else if (condition1(rom[x], rom[x + 1], 2, 3)) {
      alert("This is an invalid order of Roman Numerals. no 400 after 500.");
      wipeInput();
      break;
    }
    //90(XC) or 40(XL) cannot be followed by 50(L), 40(XL), or 10(X)
    else if (condition2(rom[x], rom[x + 1], 5, 9, 7)) {
      alert("This is an invalid order of Roman Numerals. 90 or 40 can't be followed by 50, 40 or 10.");
      wipeInput();
      break;
    }
    //50(L) can't be followed by a 40(IV)
    else if (condition1(rom[x], rom[x + 1], 6, 7)) {
      alert("This is an invalid order of Roman Numerals. No 40 after 50.");
      wipeInput();
      break;
    }
    //9(IX) cannot be followed by a 5(V) or a 4(IV)
    else if (condition2(rom[x], rom[x+1], 9, 13, 11)) {
      alert("This is an invalid order of Roman Numerals. 9 or 4 can't by followed by a 5,4 or 1.");
      wipeInput();
      break;
    }
    //C(100), X(10) and I(1) can be repeated only 3 times.
    else if (rom[x] === "C" && rom[x + 1] === "C" && rom[x + 2] === "C" && rom[x + 3] === "C" ||
      rom[x] === "X" && rom[x + 1] === "X" && rom[x + 2] === "X" && rom[x + 3] === "X" ||
      rom[x] === "I" && rom[x + 1] === "I" && rom[x + 2] === "I" && rom[x + 3] === "I") {
      alert("This is an invalid order of Roman Numerals. you cant repeat C,X or I more than three times.");
      wipeInput();
      break;
    } else {
      correctOrderCounter++;
    }
  }
  if (correctOrderCounter === rom.length) {
    return rom;
  }
}

//clears the input field
function wipeInput() {
  document.getElementById("numeral-input").value = '';
}


//using two arrays side by side convert the numerals to numbers
function changeNumeralsToNumbers(rom) {
  const romanNum = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
  const numberArr = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let arrIntoNumbers = [];

  for (let x = 0; x < rom.length; x++) {
    let place = romanNum.indexOf(rom[x]);
    arrIntoNumbers.push(numberArr[place]);
  }

  //add up the values of the array
  const reducer = (acc, cur) => acc + cur;
  return arrIntoNumbers.reduce(reducer);
}

//display results in the DOM
function showResult5(rom, num) {
  if (num > 0) {
    $('#results5').html($('<p>' + rom + ' = ' + num + '</p>'));
  }
}
