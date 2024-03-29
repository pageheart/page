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

//Check the presence of keys in the object
function objHasKey(obj, key) {
  let result = false;
  
  if(obj != undefined && obj instanceof Object) {
    result = Object.keys(obj).some(
      o => {
        if(o == key) {
          return true;
        }
        else if(obj[o].constructor.name == "Object") {
          result = this.objHasKey(obj[o], key);
          if(result) return true;
        }
      }
    );
  }
  
  return result;
}
  
//Check Between Day
function dateBetween(inDate, inBtDay) {
  let inputDate = new Date(replaceAll(replaceAll(inDate, '.', '-'), ' ', 'T'));
  let toDate = new Date();
  let betweenDay = (toDate.getTime() - inputDate.getTime()) / (1000*60*60*24);
  
  if(betweenDay < inBtDay) return true;
  else return false;
}
  
//maxlength Check
document.addEventListener("DOMContentLoaded", function(){
    document.querySelectorAll("input").forEach(e=>{
        if(e.getAttribute("maxlength")) {
            e.addEventListener("keyup", (ev)=>{
                if(ev.target.value.length > e.getAttribute("maxlength")) {
                    ev.target.value = ev.target.value.substr(0,e.getAttribute("maxlength"));
                }
            });
        }
    });
});

  
//number 초기화
function numberInit(num) {
  if(isNaN(Number(num))) num = 0;
  return Number(num);
}

//특수문자 HTML태그형식으로 변경
function convertStrToHtml(str) {
  str = str.replace(/\"/g,'&quot;');
  str = str.replace(/\'/g,'&#39;');
  str = str.replace(/,/g,'&#44;');

  return str;
}

//HTML태그형식문자를 특수문자로 변경
function convertHtmlToStr(str) {
  str = str.replace(/&quot;/g,'\"');
  str = str.replace(/&#39;/g,'\'');
  str = str.replace(/&#44;/g,',');

  return str;
}

//소수점 자릿수처리
//호출예시 : numberToFiexed(30.33, 1)
//예시결과값 : 30.3
function numberToFiexed(num, positional) {
  let result = num;

  if(num.toString().indexOf('.') >= 0) {
    let numArr = num.toString().split('.');
    if(positional <= 0) {
      result = numArr[0]; 
    }
    else {
      result = numArr[0] +'.'+ numArr[1].substr(0,positional); 
    }
  }

  return result;
}

//yyyyMMddHH
let curDate = setDate.getFullYear() + ((setDate.getMonth()+1) < 10 ? '0'+(setDate.getMonth()+1) : (setDate.getMonth()+1)) + (setDate.getDate() < 10 ? '0'+setDate.getDate() : setDate.getDate()) + (setDate.getHours() < 10 ? '0'+setDate.getHours() : setDate.getHours());

//observe
let target = document.getElementById("MOprogressLayer");
var observer = new MutationObserver(mutations => { 
		mutations.forEach(mutation=> {
			console.log(mutation.target.style.display);
			document.getElementById("MOprogressLayerDim").style.display = mutation.target.style.display;
		}) 
	});
var options = { attributes:true, attributeFilter:['style'] };
observer.observe(target, options);

/**
 * @alias 두 날짜간 일자 차이를 리턴
 * @param date1:시작일자
 * @param date2:종료일자
 * @return String
 */
function getDayBetween(date1,date2) {
	if(!date1 || !date2) {
		return ;
	}
	
	date1 = date1.replace(/[^0-9]/g, "");
	date2 = date2.replace(/[^0-9]/g, "");
	var dt1m = Number(date1.substring(4, 6)) - 1;
	var dt2m = Number(date2.substring(4, 6)) - 1;

	var dt1 = new Date(date1.substring(0, 4), dt1m, date1.substring(6, 8));
	var dt2 = new Date(date2.substring(0, 4), dt2m, date2.substring(6, 8));
	var interval = dt2 - dt1;
	
	var day = 1000*60*60*24;
	
	return parseInt(interval / day, 10);
}

/**
 * @alias 현재 날짜 가져오기(클라이언트)
 * @param sprt : 출력구분자
 * @exp 
 * getToday("-");
 */
function getToday(sprt) {
	var d = new Date();
	var YY = d.getFullYear();
	var MM = d.getMonth()+1;
	var DD = d.getDate();
	if(MM < 10) {
		MM = "0" + MM;
	}
	if(DD < 10) {
		DD = "0" + DD;
	}
	if(sprt != undefined) {
		return YY + sprt + MM + sprt + DD;
	} else {
		return "" + YY + MM + DD;
	}
}	
