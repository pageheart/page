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

//phone number setting format : 000-0000-0000
function phoneNumCk(str) {
  if(str !== undefined && str.length > 0) {
    if(Number(str.charAt(str.length-1)) > -1) {
      str = str.replace(/-/g,'');
      if(str.length >= 4 && str.length < 7) {
        if(str.indexOf('-') < 0) {
          str = str.substr(0,3) + '-' + str.substr(3);
        }
      }
      else if(str.length >= 7 && str.length < 11) {
        if(str.indexOf('-') < 0 || str.indexOf('-') > 6) {
          str = str.substr(0,3) + '-' + str.substr(3);
        }
        if(str.indexOf('-',7) < 0) {
          str = str.substr(0,7) + '-' + str.substr(7);
        }
      }
      else if(str.length >= 11) {
        str = str.substr(0,3) + '-' + str.substr(3,4) + '-' + str.substr(7);
      }
    }
    else {
      if(str.length > 13) {
        str = str.substr(0,13);
      }
      
      let cnt = str.length;
      for(let i=cnt; i>=0; i--) {
        if(Number(str.charAt(i-1)) > -1) {
          break;
        }
        else {
          str = str.substr(0,i-1);
        }
      }
    }
    
    return str;
  }

    
