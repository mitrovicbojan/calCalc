const btnSearch = document.getElementById("search-button");
const mealList = document.getElementById("meal-box");
const recipeModal = document.querySelector("recipe-details");
const mealDispaly = document.getElementById("recipe-details-box");
btnSearch.addEventListener("click", getRecpies);

mealList.addEventListener("click", getInstructions);
function getRecpies() {
  let ingridientSearchText = document
    .getElementById("ingridients-search")
    .value.trim();
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingridientSearchText}`;
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("not a valid request");
      return response.json();
    })
    .then((data) => {
      let html = "";
      if (data.meals) {
        mealList.classList.remove("notFound");
        data.meals.forEach((meal) => {
          html += `
          <div class="meal-item" data-id="${meal.idMeal}">
            <div class="meal-item-img">
              <img
                class="meal-img"
                src="${meal.strMealThumb}"
                alt="Image of ${meal.idMeal}"
              />
            </div>
            <h3 class="heading-tertiary meal-title">${meal.strMeal}</h3>
            <a href="##" class="recipe-btn">See recipe</a>
          </div>
          `;
        });
      } else {
        html = "Sorry, no results were found!";
        mealList.classList.add("notFound");
      }

      mealList.innerHTML = html;
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function closeModal() {
  mealDispaly.parentElement.classList.remove("openInstructions");
}
//close modal on click outside (needs fixing)
document.addEventListener("click", (e) => {
  if (!mealDispaly.contains(e.target)) {
    mealDispaly.parentElement.classList.remove("openInstructions");
  }
});

function getInstructions(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement;

    fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`
    )
      .then((response) => response.json())
      .then((data) => recipeInstruction(data.meals));
  }
}

function recipeInstruction(meal) {
  console.log(meal);
  meal = meal[0];
  let html = `  
            <p class="recipe-category">${meal.strCategory}</p>
            <h2 class="recipe-title">${meal.strMeal}</h2>            
            <div class="instructions">
              
              <div class="ingredient-box">
                <h3 class="instructions-title">Ingredients:</h3>
                <ul class="ingredient-list">
                  <li >${meal.strMeasure1} ${meal.strIngredient1}</li>
                  <li >${meal.strMeasure2} ${meal.strIngredient2}</li>
                  <li >${meal.strMeasure3} ${meal.strIngredient3}</li>
                  <li >${meal.strMeasure4} ${meal.strIngredient4}</li>
                  <li >${meal.strMeasure5} ${meal.strIngredient5}</li>
                  <li >${meal.strMeasure6} ${meal.strIngredient6}</li>
                  <li >${meal.strMeasure7} ${meal.strIngredient7}</li>
                  <li >${meal.strMeasure8} ${meal.strIngredient8}</li>
                  <li >${meal.strMeasure9} ${meal.strIngredient9}</li>
                  <li >${meal.strMeasure10} ${meal.strIngredient10}</li>
                  <li >${meal.strMeasure11} ${meal.strIngredient11}</li>
                  <li >${meal.strMeasure12} ${meal.strIngredient12}</li>
                  <li >${meal.strMeasure13} ${meal.strIngredient13}</li>
                  <li >${meal.strMeasure14} ${meal.strIngredient14}</li>
                  <li >${meal.strMeasure15} ${meal.strIngredient15}</li>
                  <li >${meal.strMeasure16} ${meal.strIngredient16}</li>
                  <li >${meal.strMeasure17} ${meal.strIngredient17}</li>
                  <li >${meal.strMeasure18} ${meal.strIngredient18}</li>
                  <li >${meal.strMeasure19} ${meal.strIngredient19}</li>
                  <li >${meal.strMeasure20} ${meal.strIngredient20}</li>
                </ul>
              </div>
              <div class="instructions-box">
                <h3 class="instructions-title">Instructions:</h3>
                <p class="recipe-description">${meal.strInstructions}</p>
                <div class="recipe-video">
                  <a href="${meal.strYoutube}" class="video-link" target="_blank" rel="noopener noreferrer">Watch Video</a>
                </div>
              </div>            
            </div>            
            
         
  `;
  mealDispaly.innerHTML = html;
  mealDispaly.parentElement.classList.add("openInstructions");
}
