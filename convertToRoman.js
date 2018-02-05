$(document).ready(function(){
  $('.number-submit').on("click", convertNumber);
});

function convertNumber() {
  let number = getNumber(event);
  let roman = convertToRoman(number);
  let romanFormatted = formatArray(roman);
  showAnswer(number, romanFormatted);
  console.log(romanFormatted);
}

function getNumber(event){
   event.preventDefault();
  let input = document.getElementById("numberInput").value;
return input;
}


function convertToRoman(num) {
  var rom = [];
  while (num>=900) {
    if(num>=1000) {
      rom.push("M");
      num = num - 1000;
    } else {
      rom.push("CM");
      num = num - 900;
    }
  }
  while (num>=400) {
    if(num>=500) {
      rom.push("D");
      num = num - 500;
    } else {
      rom.push("CD");
      num = num - 400;
    }
  }
  while (num>=90) {
    if(num>=100){
      rom.push("C");
      num = num - 100;
    } else {
      rom.push("XC");
      num = num - 90;
    }
  }
  while (num>=40) {
    if(num>=50){
      rom.push("L");
      num = num - 50;
    } else {
      rom.push("XL");
      num = num - 40;
    }
  }
  while (num>=9) {
    if(num>=10){
      rom.push("X");
      num = num - 10;
    } else {
      rom.push("IX");
      num = num - 9;
    }
  }
  while (num>=4) {
    if(num>=5){
      rom.push("V");
      num = num - 5;
    } else {
      rom.push("IV");
      num = num - 4;
    }
  }
  while (num>=1) {
    if(num>=1){
      rom.push("I");
      num = num - 1;
    }
  }
 return rom;
}

function formatArray(roman) {
  let sense = roman.join('');
  return sense;
}

function showAnswer(number, answer) {
  $('#results').html($('<p>' + number + '</p><p> = </p><p>' + answer + '</p>'));
}
