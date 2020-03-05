//Capitalize first letter after _ and delete _
//string a : Character to change
//boolean b : First letter uppercase
function underper(a, b) {
  let Lower = a.toLowerCase();
  let LowerArr = Lower.split('_');
  let LowerVal = '';
  
  if(LowerArr.length > 1) {
    for(let i=0; i<LowerArr.length; i++) {
      if(b) {
        LowerArr[i] = LowerArr[i].substr(0,1).toUpperCase() + LowerArr[i].substr(1);
        LowerVal = LowerVal + LowerArr[i];
      }
      else {
        if(i != 0)
          LowerArr[i] = LowerArr[i].substr(0,1).toUpperCase() + LowerArr[i].substr(1);
        LowerVal = LowerVal + LowerArr[i];
      }
    }
  }
  else {
    LowerVal = Lower;
  }
  
  return LowerVal;
}
