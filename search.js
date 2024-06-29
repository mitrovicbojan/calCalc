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
    .then((response) => response.json())
    .then((data) => {
      let html = "";
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
      mealList.innerHTML = html;
    });
}

function closeModal() {
  mealDispaly.parentElement.classList.remove("openInstructions");
}

function getInstructions(e) {
  e.preventDefault();
  if (e.target.classList.contains("recipe-btn")) {
    let mealItem = e.target.parentElement;
    // console.log(mealItem.dataset.id);
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
              <h3 class="instructions-title">Instructions</h3>
              <p class="recipe-description">${meal.strInstructions}</p>
            </div>
            <div class="recipe-image">
              <img
                class="recipe-details-img"
                src="${meal.strMealThumb}"
                alt="food"
              />
            </div>
            <div class="recipe-video">
              <a href="${meal.strYoutube}" class="video-link">Watch Video</a>
            </div>
         
  `;
  mealDispaly.innerHTML = html;
  mealDispaly.parentElement.classList.add("openInstructions");
}
