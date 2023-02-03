class Chef {
  constructor(name, restaurantName) {
    this.name = name;
    this.restaurant = restaurantName;
  }
greetCustomer(name, value) {
   if (value === true) {
 return `Good morning, ${name}!`;
   } else 
   return `Hello, ${name}!`
  
}

checkForFood(foodItem) {
  var breakfast = this.restaurant.menus.breakfast;
  for (var i = 0; i < 3; i++) {
    if (foodItem === breakfast[i]) {
       return `Yes, we're serving ${foodItem.name} today!`;
    }
  } 
  return `Sorry, we aren't serving ${foodItem.name} today.`;
}
}




module.exports = Chef;