"use strict";
//once the page has loaded a listner is created for a button
$(document).ready(function() {
  $('#number-submit1').on("click", convertNumber);
  $('#number-submit2').on("click", secondMethod);
  $('#number-submit3').on("click", thirdMethod);
  $('#number-submit4').on("click", forthMethod);
  // $('#numeral-submit').on("click", numeralsToNumbers);
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
  if(integer){
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

const romArr = [["I","II","III","IV","V","VI","VII","VIII","IX"],
                ["X","XX","XXX","X","L","LX","LXX","LXXX","XC"],
                ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                ["M","MM","MMM","MMMM","V\u0305","V\u0305M","V\u0305MM","V\u0305MMM","V\u0305MMMM"],
                ["X\u0305","X\u0305X\u0305","X\u0305X\u0305X\u0305","X\u0305X\u0305X\u0305X\u0305","L\u0305","L\u0305X\u0305","L\u0305X\u0305X\u0305","L\u0305X\u0305X\u0305X\u0305","L\u0305X\u0305X\u0305X\u0305X\u0305"],
                ["C\u0305","C\u0305C\u0305","C\u0305C\u0305C\u0305","C\u0305C\u0305C\u0305C\u0305","D\u0305","D\u0305C\u0305","D\u0305C\u0305C\u0305","D\u0305C\u0305C\u0305C\u0305","D\u0305C\u0305C\u0305C\u0305C\u0305"],
                ["M\u0305","M\u0305M\u0305","M\u0305M\u0305M\u0305","M\u0305M\u0305M\u0305M\u0305","M\u0305M\u0305M\u0305M\u0305M\u0305","M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305",
                "M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305","M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305","M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305M\u0305"]];


function thirdMethod() {
  let cesar = getNumber3(event);
  let numArr = organiseNumbers(cesar);
  let parma = changeToNumerals(numArr);
  let romanFormatted = formatArray(parma);

  showResult3(cesar, romanFormatted);
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
  for( x=0 ; x<num.length ; x++) {
      win.unshift(romArr[x][num[x]-1]);
    }
    return win;
}

//displays the result on the page only if the input is a number.
function showResult3(number, result) {
  if (number>0) {
    $('#results3').html($('<p>' + number + ' = ' + result + '</p>'));
  }
}

//-----------------------------------------------------------------
// 4th method

const romanArr = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
// why are the last two entries of romanArr in white not yellow? ************************
const numberArr = [1000000,900000,500000,400000,100000,90000,50000,40000,10000,9000,5000,4000,1000,900,500,400,100,90,50,40,10,9,5,4,1]

function forthMethod() {
  let numero = getNumber4(event);
  let answerArr = switchToNumerals(numero);

  showResult4(numero, answerArr);
}

//gets a number from the input field
function getNumber4(event) {
//  const xx = 453653;
  event.preventDefault();
//  debugger;
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
  let answer4 = [[],[]];

  //work through the number and numeral arrays - subtracting the working amount
  //and adding the numerals to the answer4 array.
  for( x=0 ; x<numberArr.length ; x++) {
    while (num >= numberArr[x] && num >= 4000) {
        answer4[0] += romanArr[x];
      num -= numberArr[x];
    }
    while (num >= numberArr[x] && num <4000) {
      answer4[1] += romanArr[x];
      num -= numberArr[x];
    }
    }

    return answer4;
}


//displays the result on the page only if the input is a number.
function showResult4(number, result) {
  if (number>0) {
    $('#results4').html($('<p>' + number + ' = <span style="text-decoration: overline">' + result[0] + '</span>' + result[1] +'</p>'));
  }
}


//-------------------------------------------------------------------
// //convert it back....
// const romanNum = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
//
// function numeralsToNumbers() {
//   let numeralGiven = getNumerals(event);
//   let correctOrder = checkOrder(numeralGiven);
// }
//
// // gets the numerals from the input field
// function getNumerals(event) {
//
//   event.preventDefault();
//   let input = document.getElementById("numeral-input").value;
//   console.log(input);
//   let divided = input.split('');
//   console.log(divided);
//
//     }
//   }
// }
//
// function checkOrder(rom) {
// console.log(rom);
// }
