function nameMenuItem(food) {
  return `Delicious ${food}`
};

function createMenuItem(name,price,type){
  var menuItem = {
    name: name,
    price: price,
    type: type
  }
  return menuItem
};


var ingredients = [];

function addIngredients(ing, ingredients) {
  if (!ingredients.includes(ing)) {
     ingredients.push(ing)
  }
  return ingredients
};

function formatPrice(price) {
  return `$${price}`
};

function decreasePrice(price) {
  return price * .9
};

function createRecipe(title, ingredients, menuItemType) {
  var recipe = {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
  return recipe
};



module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
