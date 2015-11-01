//清除键
var clearKey = $("span.clear");
//显示屏
var screenCal = $(".screen");
//数字键
var numberKey = $("span.number-key");
//运算键
var operatorKey = $("span.operator");
//等号
var evalKey = $("span.eval");

//显示屏内容
var sNumber = "";
//运算符
var sOperator = "";
//是否要清除输入框中已有的内容
var clearScreen = false;
//是否第一次输入
var isFirstInput = true;

function calculate(number1, number2, sOperator){
  console.log(number1 + "," + number2);
  var result = 0;
  switch(sOperator) {
    case "+":
      result = number1 + number2;
      break;
    case "-":
      result = number1 - number2;
      break;
    case "÷": 
      result = number1 / number2;
      break;
    case "×":
      result = number1 * number2;
      break;
    default:
      result = number2;
  }
  return result;
}
//字符串转数字
function parseToNumber(str) {
  if(str.indexOf(".") > 0){
    return parseFloat(str);
  }else if(str.indexOf(".") == 0){
    return parseFloat(0 + str);
  }else{
    return parseInt(str); 
  }
}

//输入
function doInput(){
  var input = $(this).data("input");
  var screenVal = screenCal.text();
  switch(input){
    case "=":
      screenCal.text(calculate(parseToNumber(sNumber), parseToNumber(screenVal), sOperator));
      sNumber = "";
      sOperator = "";
      clearScreen = true;
      isFirstInput = true;
      break;
    case "+":
    case "-":
    case "÷":
    case "×":
      clearScreen = true;

      if(sNumber.length != 0){
        screenCal.text(calculate(parseToNumber(sNumber),parseToNumber(screenVal),sOperator));
      }
      sOperator = input;
      sNumber = screenVal;
      break;
    case "c":
      screenCal.text("0");
      sNumber = "";
      sOperator = "";
      break;
    default:   //数字
      if(clearScreen){
        sNumber = screenVal;
        screenCal.empty();
        clearScreen = false;
      }
      if (isFirstInput) {
        screenCal.empty().append(input);
        isFirstInput = false;  
      }else {
        screenCal.append(input);
      }
      break;
  }
}

$(document).ready(function(){
  $(".clear,.number-key,.operator,.eval").on("click",doInput);
});