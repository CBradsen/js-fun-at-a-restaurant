function createRestaurant(restName) {
  var restaurant = {
    name: restName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}


function addMenuItem(restaurant, item) {
  if (item.type === "breakfast" && !restaurant.menus.breakfast.includes(item)) {
    restaurant.menus.breakfast.push(item);
  } else if (item.type === "lunch" && !restaurant.menus.lunch.includes(item)) {
    restaurant.menus.lunch.push(item);
  } else if (item.type === "dinner" && !restaurant.menus.dinner.includes(item)) {
    restaurant.menus.dinner.push(item);
  }
  return;
}

function removeMenuItem(restaurant, itemName, menutype) {
  var menu = restaurant.menus[menutype];
  for (var i = 0; i < menu.length; i++) {
    if (menu[i].name === itemName) {
      menu.splice(i, 1);
    }
    return `No one is eating our ${itemName} - it has been removed from the ${menutype} menu!`
  } 
    return `Sorry, we don't sell ${itemName}, try adding a new recipe!`
}
  


module.exports = {
  createRestaurant, 
  addMenuItem,
  removeMenuItem
}