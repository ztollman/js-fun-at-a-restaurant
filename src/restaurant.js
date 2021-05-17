function createRestaurant(name){
  return{
    name: name ,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []

    }
  }
}


function addMenuItem(pizzaRestaurant, pizza){
  if (!pizzaRestaurant.menus[pizza.type].includes(pizza)){
    pizzaRestaurant.menus[pizza.type].push(pizza)
  }
}


function removeMenuItem(pizzaRestaurant, pizza, type){
  if (pizzaRestaurant.menus[type] !== undefined){
    for (var i = 0; i < pizzaRestaurant.menus[type].length; i++){
      pizzaRestaurant.menus[type].splice(i, 1);
      return `No one is eating our ${pizza} - it has been removed from the ${type} menu!`;
    }
  }
  if (!pizzaRestaurant.menus[type].includes(pizza))
       return `Sorry, we don't sell ${pizza}, try adding a new recipe!`;
    }
  
module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
