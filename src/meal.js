function nameMenuItem(itemName) {
menuItemName = `Delicious ${itemName}`;
return menuItemName;
}

function createMenuItem(name, price, type) {
  return {
  name: name,
  price: price,
  type: type
  }
}

var ingredients = []

function addIngredients(item, ingredientsList) {
  if (ingredientsList.includes(item) === false) {
      ingredientsList.push(item);
  }
}

function formatPrice(price) {
  return `$${price}`;
}

function decreasePrice(price) {
  return price *= 0.9
}

function createRecipe(title, ingredients, type) {
  return {
    title: title,
    ingredients: ingredients,
    type: type
  }

}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


