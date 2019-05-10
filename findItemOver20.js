function findItemsOver20(list){
  
  var over20 = [];
for(var i=0;i<list.length;i++){
   var itemList = list[i]
  //  console.log(itemList.qty)
 if (itemList > 20){
   over20.push(itemList.qty);
}
}
  // console.log(over20)
  return over20;
}

var list = [
  {name : 'apples', qty : 10},
  {name : 'pears', qty : 37},
  {name : 'bananas', qty : 27},
  {name : 'apples', qty : 3},
];

findItemsOver20(list);