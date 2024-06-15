/**
  under 18.5 – This is described as underweight. 
  between 18.5 and 24.9 – This is described as the 'healthy range'. 
  between 25 and 29.9 – This is described as overweight. 
  between 30 and 39.9 – This is described as obesity.
   
 */

//add error handle
//add range comments

let btnBmi = document.getElementById("btn-bmi");
let bmiRes = document.getElementById("bmi-result");

btnBmi.addEventListener("click", function () {
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;

  console.log(weight);
  let result = (Number(weight) / (Number(height) * Number(height))) * 10000;

  bmiRes.innerHTML = `Your BMI is ${result.toFixed(2)}`;
});
