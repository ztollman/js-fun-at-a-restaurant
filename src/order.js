function takeOrder(order, deliveryOrders){
  deliveryOrders.push(order);
  if(deliveryOrders.length > 3){
  deliveryOrders.pop(order);
  }
};


function refundOrder(number,  deliveryOrders){
  for(var i = 0; i < deliveryOrders.length; i++ ){
  if(deliveryOrders[i].orderNumber === number){
    deliveryOrders.splice(i,1)
  }
  }
};


function listItems(deliveryOrders){
  var itemsList = []
  for(var i = 0; i < deliveryOrders.length; i++ ){
     itemsList.push(deliveryOrders[i].item)
  } return itemsList.join(', ')
};


function searchOrder(deliveryOrders ,item){
  var itemsList = [];
    for (i = 0; i < deliveryOrders.length; i++){
       itemsList.push(deliveryOrders[i].item)
    }
if (itemsList.includes(item)){
  return true
}else{
  return false
}
};




module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
