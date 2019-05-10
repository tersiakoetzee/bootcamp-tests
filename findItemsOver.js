function findItemsOver(list){
  
  var over = [];
for(var i=0;i<list.length;i++){
   var itemList = list[i]
   console.log(itemList.qty)
 if (itemList > over){
   over.push(list.qty);
}
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
findItemsOver20(list);