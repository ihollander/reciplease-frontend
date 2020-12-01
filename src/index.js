/* DOM Elements */
const recipeImage = document.querySelector("#recipe-image")
const recipeName = document.querySelector("#recipe-title")
const recipeDescription = document.querySelector("#recipe-description")
const recipeAuthor = document.querySelector("#recipe-author")
const recipeIngredients = document.querySelector("#recipe-ingredients")

/* Render Functions */
const renderIngredient = ingredientObj => {
  const li = document.createElement("li")
  li.textContent = `${ingredientObj.measurement} ${ingredientObj.name}`
  recipeIngredients.append(li)
}

const renderRecipeDetails = recipeObj => {
  recipeImage.src = recipeObj.image_url
  recipeImage.alt = recipeObj.name
  recipeName.textContent = recipeObj.name
  recipeAuthor.textContent = recipeObj.author
  recipeDescription.textContent = recipeObj.description
  recipeObj.ingredients.forEach(renderIngredient)
}

/* Fetch Functions */
// const getOneRecipe = id => {
//   fetch(`http://localhost:3000/api/v1/recipes/${id}`)
//     .then(r => r.json())
//     .then(recipeObj => {
//       renderRecipeDetails(recipeObj)
//     })
// }

const getOneRecipe = async (id) => {
  const url = `http://localhost:3000/api/v1/recipes/${id}`
  const response = await fetch(url)
  const recipeObj = await response.json()
  renderRecipeDetails(recipeObj)
}


/* Initialize */
getOneRecipe(1)