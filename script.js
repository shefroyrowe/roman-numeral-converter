const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

//check input for invalid entries
const checkInput = () => {
  if (!parseInt(numberInput.value)) {
    return output.textContent = "Please enter a valid number";
  } else if (numberInput.value < 0) {
   return output.textContent = "Please enter a number greater than or equal to 1";
  } else if (numberInput.value >= 4000) {
   return output.textContent = "Please enter a number less than or equal to 3999";
  } else {
    convertToRoman(numberInput.value);
  }
};

//function converts arabic(modern) numbers/digits to roman numerals and assigns result to the text output element
function convertToRoman(num) {
  //object with roman numerals as keys/props and arabic numbers as values
  const numbers = {
    M: 1000,
    CM: 900,
    D:  500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
     }; 
     //roman numeral accumulator variable
     let result = ''; 

    for (let prop in numbers) {
      while (num >= numbers[prop]) {
        result += prop;
        num -= numbers[prop];
      }
    }
    return output.textContent = result;
}

convertBtn.onclick = checkInput;