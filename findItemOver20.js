function findItemsOver20(list){
  
   var over20 = [];
   var itemList = list
 if (itemList > 20){
   over20.push(itemList.qty);
}
 return over20;
}
