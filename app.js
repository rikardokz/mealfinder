const search = document.getElementById("search"),
  submit = document.getElementById("submit"),
  random = document.getElementById("random"),
  mealsEl = document.getElementById("meals"),
  resultHeading = document.getElementById("result-heading"),
  single_mealEl = document.getElementById("single-meal");

// Search meal and fetch from API
function searchMeal(e) {
  e.preventDefault();
  // Clear single meal
  single_mealEl.innerHTML = "";
  // get search term
  const term = search.value;
  // check if something was submitted
  if (term.trim()) {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${term}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        resultHeading.innerHTML = `<h2>Search results for "${term}":</h2>`;
        if (data.meals === null) {
          resultHeading.innerHTML = `<p>There are no search results. Try again.</p>`;
        } else {
          mealsEl.innerHTML = data.meals.map((meal) => {
            return `<div class="meal">
                <img src="${meal.strMealThumb}"/>
            </div>`;
          });
        }
      });
  } else {
    alert("Please enter a valid search");
  }
}

// Event listeners
submit.addEventListener("submit", searchMeal);
