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

//Title dot display
//Dom sel : Selector
function titleDotLine(sel) {
  document.querySelectorAll(sel).forEach(o => {
    o.style.width = o.offsetWidth-4 + "px";
    o.style.textOverflow = "ellipsis";
    o.style.whiteSpace = "nowrap";
    o.style.overflow = "hidden";
    o.style.display = "inline-block";
  });
}

//closure ex
function add_maker(a){
  return function(b) {
    return a + b;
  }
}
var add = add_maker(10);
console.log(add(20)); //30
