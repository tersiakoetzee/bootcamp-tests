const date = new Date(); 
function yearsAgo(year){
  const date1 = new Date();
  var date2 = (date1.getFullYear());
  
  var results = date2 - year;
  return results;
  }