function mostProfitableDepartment(salesData){
    var successfulDept = "";
    var highestSale = 0;
    for (var i in salesData){
      var aSalesEntry = salesData[i];
      var currentSale = aSalesEntry.sales;
  
      var currentDepartment = aSalesEntry.department;
  
      if (currentSale > highestSale){
        highestSale = currentSale;
        successfulDept = currentDepartment;
  
      }
    }
    return successfulDept;
  }
  
  function mostProfitableDay(data){
    var wednesdaySum = 0;
    var wednesdaySumArray = [];
    var compare = 0;
    var successfulDept = "";
    var highestSale = 0;
    for (var i in data){
      var aSalesEntry = data[i];
      var currentSale = aSalesEntry.sales;
      var currentDay = aSalesEntry.day;
  
      if (currentDay.startsWith("W")){
       wednesdaySum += currentSale
        wednesdaySumArray.push(wednesdaySum);
        //console.log(wednesdaySumArray);
       for (var i=0;i<wednesdaySumArray.length;i++){
  var aRow = wednesdaySumArray[i];
         console.log(aRow);}
        }
    }
}