function findItemsOver20(itemList){
  
   var over20 = [];
   
 if (itemList.qty > 20){
   over20.push(itemList.qty);
}
  console.log(over20)
 return over20;
}

var itemList = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];


var results = findItemsOver20(itemList);

