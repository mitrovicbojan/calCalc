/**
  under 18.5 – This is described as underweight. 
  between 18.5 and 24.9 – This is described as the 'healthy range'. 
  between 25 and 29.9 – This is described as overweight. 
  between 30 and 39.9 – This is described as obesity.

  function isInt(value) {
    var er = /^-?[0-9]+$/;
    return er.test(value);
}
   
 */

//add error handle
//add range comments

let btnBmi = document.getElementById("btn-bmi");
let bmiRes = document.getElementById("bmi-result");

btnBmi.addEventListener("click", function () {
  let weight = Number(document.getElementById("weight").value);
  let height = Number(document.getElementById("height").value);

  console.log(typeof weight);
  console.log(typeof height);

  // if (
  //   (typeof weight != "number" && typeof height != "number") ||
  //   (weight <= 0 && height <= 0)
  // ) {
  //   document.getElementById("weight").style.borderColor = "red";
  // }

  let result = (weight / (height * height)) * 10000;

  bmiRes.innerHTML = `Your BMI is ${result.toFixed(2)}`;
});
