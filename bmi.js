/**
  under 18.5 – This is described as underweight. 
  between 18.5 and 24.9 – This is described as the 'healthy range'. 
  between 25 and 29.9 – This is described as overweight. 
  between 30 and 39.9 – This is described as obesity.
 */

let btnBmi = document.getElementById("btn-bmi");
let bmiRes = document.getElementById("bmi-result");
let bmiRange = document.getElementById("bmi-range");
let weight = document.getElementById("weight");
let height = document.getElementById("height");

let weightVal;
let heightVal;

//get input values
weight.addEventListener("input", function () {
  weightVal = parseFloat(weight.value);
});

height.addEventListener("input", function () {
  heightVal = parseFloat(height.value);
});

// check if input has numbers (returns boolean)
function checkInt(value) {
  return /^[0-9]+(\.[0-9]+)?$/.test(value);
}

//check BMI range
function handleBmiRange(val) {
  let resultRange = Number(val);

  if (resultRange < 18.5) {
    bmiRange.innerText = "This is described as underweight.";
  }
  if (resultRange >= 18.5 && resultRange <= 24.9) {
    bmiRange.innerText = "This is described as the 'healthy range'.";
  }
  if (resultRange >= 25 && resultRange <= 29.9) {
    bmiRange.innerText = "This is described as overweight.";
  }
  if (resultRange >= 30) {
    bmiRange.innerText = "This is described as obesity.";
  }
}

//calculate BMI
function caclBmi() {
  let result = ((weightVal / (heightVal * heightVal)) * 10000).toFixed(2);
  handleBmiRange(result);
  bmiRes.innerHTML = `Your BMI is ${result}`;
}

//clear error style and message
function clearError() {
  weight.style.border = "";
  height.style.border = "";
  bmiRes.innerHTML = "";
  bmiRes.style.color = "";
}

// add error style and message
function handleErr() {
  height.style.border = "1px solid red";
  weight.style.border = "1px solid red";
  bmiRes.innerHTML = "Whoops! Please insert numbers.";
  bmiRes.style.color = "#c92a2a";
}

//display result on click
btnBmi.addEventListener("click", function () {
  if (checkInt(weightVal) && checkInt(heightVal)) {
    clearError();
    caclBmi();
    weight.value = "";
    height.value = "";
  } else {
    handleErr();
  }
});
