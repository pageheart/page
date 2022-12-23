//input타입별로 maxlength가 먹지 않는게 있어서 강제처리
$("input").ready(()=>{
  $("input").each((e,i)=>{
    if($(i).prop("maxlength") > 0) {
      $(i).on("keyup",(ev) => {
        if(ev.target.value.length > $(i).prop("maxlength")-1) {
          ev.target.value = ev.target.value.substr(0,$(i).prop("maxlength"));
        }
      });
    }
  });
});

//데이터 변환을 위한 TAG Name배열을 받아서 해당태그의 value를 JSON String형태로 반환
function tagDataToJSON(tagArr, addJSON) {
  let setData = {};
  let tagData = {};
  try {
    if(Array.isArray(tagArr) && tagArr.length > 0) {
      tagArr.forEach( ele =>{
        document.querySelectorAll(ele).forEach( e => {
          if(e.name != "") {
            if(ele == 'select') {
              tagData[e.name] = {"type":"select", "value":e.value};
            }
            else {
              switch(e.type) {
                case 'hidden' : 
                  tagData[e.name] = {"type":e.type, "value":e.value};
                  break;
                case 'checkbox' : 
                  if(e.checked)
                    tagData[e.name] = {"type":e.type, "value":e.value};
                  break;
                case 'radio' :
                  if(e.checked)
                    tagData[e.name] ={"type":e.type, "value":e.value};
                  break;
                default :
                  tagData[e.name] ={"type":e.type, "value":e.value};
              }
            }
          }
        });
      });
      setData.tagData = tagData;
    } 

    if(addJSON) {
      let bool = true;
      try {
        JSON.stringify(addJSON)
      }
      catch(e) {
        bool = false;
      }
      if(bool) setData.jsonData = addJSON;
    }
  }
  catch(e) {
    console.log(e);
  }
  return Object.keys(tagData).length < 1 ? '' : JSON.stringify(setData);
}

//tagDataToJSON에서 변환된 JSON String을가져와서 각 태그별 데이터 세팅
//jsonStr 세팅될 JSON
//notSetTagNmArr 세팅되지 말아야할 tagNm Array
function tagDataSet(jsonStr, notSetTagNmArr) {
  function tagNmBool(tagNm, tagNmArr) {
    let bool = true;
    if(tagNmArr && Array.isArray(tagNmArr)) {
      tagNmArr.forEach(e=>{
        if(tagNm == e) bool = false;
      });
    }
    return bool;
  }
  return new Promise(function(resolve, reject) {
    if(jsonStr && jsonStr.trim() != '') {
      try {
        let returnData = {};
        jsonStr = JSON.parse(jsonStr);
        if(jsonStr.tagData) {
          let tagData = jsonStr.tagData;
          Object.keys(tagData).forEach(e=>{
            if(tagNmBool(e,notSetTagNmArr)) {
              switch(tagData[e].type) {
              case 'checkbox' :
                $("input[name="+e+"]").prop("checked",true);
                break;
              case 'textarea' :
                $("textarea[name="+e+"]").val(tagData[e].value);
                break;
              case 'select' :
                $("select[name="+e+"]").val(tagData[e].value);
                break;
              case 'radio' :
                $.each($("input[name="+e+"]"),(i,el) => {
                  if(el.value ==tagData[e].value) $("input[name="+e+"]").eq(i).prop("checked",true); 
                });
                break;
              default :
                $("input[name="+e+"]").val(tagData[e].value);
              }
            }
          });
          returnData.tagData = true;
        }
        else {
          returnData.tagData = false;
        }

        if(jsonStr.jsonData) {
          returnData.jsonData = jsonStr.jsonData;
        }
        resolve(returnData);
      }
      catch(e) {
        reject(e);
      }
    }
    else {
      reject({errCd : "904", errMsg : "세팅 할 데이터가 존재하지 않습니다."});
    }
  });
}
