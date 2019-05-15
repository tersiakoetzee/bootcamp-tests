function findItemsOver(itemList){
  
  var over = [];
  
if (itemList.qty > 20){
  over20.push(itemList.qty);
}

  console.log(over)
  return over;
}

var list = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];
var re = findItemsOver(itemList);
var results = [
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
];