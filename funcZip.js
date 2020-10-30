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

//the coordinates of the remaining one point needed to create a rectangle.
//Array arr : [[1, 5], [3, 5], [3, 11]]
//output : [1, 11]
function rectangle(arr) {
  var x = [];
  var y = [];

  arr.forEach(
    (o) => {
      o.forEach(
        (o,i,a) => {
          if(i === 0) {
            const temp = x.findIndex(o => o === a[i]);
            if(temp > -1) 
              x.splice(temp,1);
            else 
              x.push(a[i]);
          }
          else if(i === 1) {
            const temp = y.findIndex(o => o === a[i]);
            if(temp > -1) 
              y.splice(temp,1);
            else 
              y.push(a[i]);
          }
        }
      )
    }
  );

  var answer = [];

  answer.push(x[0]);
  answer.push(y[0]);

  return answer;

}

//class field same name copy
function objectFieldCopy(obj, copyObj) {
  if(obj === undefined || copyObj === undefined) 
    return copyObj;
  
  let fields = Object.getOwnPropertyNames(copyObj);
  
  if(fields.length > 0) {
    for(let key in obj) {
      fields.forEach(o => {
        if(key === field) {
          copyObj[field] = obj[key];
        }
      });
    }
  }
  
  return copyObj;
}
    
