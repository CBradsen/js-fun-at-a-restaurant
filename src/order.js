function takeOrder(orderObject, typeListArray) {
  if (typeListArray.length < 3) {
   typeListArray.push(orderObject);
 } 
}

function refundOrder(orderNum, typeListArray) {
  for (var i = 0; i < typeListArray.length; i++) {
    if (typeListArray[i].orderNumber === orderNum) {
      typeListArray.splice(i, 1);
    }
  }
}

function listItems(orderArray) {
  var foodItems = "";
  for (var i = 0; i < orderArray.length; i++) {
    if (i !== orderArray.length -1) {
      foodItems += `${orderArray[i].item}, `
  } else { 
      foodItems += `${orderArray[i].item}`
  }
}
return foodItems;
}

function searchOrder(orderArray, itemName) {
  for (var i = 0; i < orderArray.length; i++) {
    if (orderArray[i].item === itemName) {
      return true;
    } 
  }
    return false;  
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

