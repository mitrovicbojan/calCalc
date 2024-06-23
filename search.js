const url = "https://www.themealdb.com/api/json/v1/1/filter.php?i=pork";
const btnSearch = document.getElementById("search-button");
const mealList = document.getElementById("meal-box");

btnSearch.addEventListener("click", getRecpies);

function getRecpies() {
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
