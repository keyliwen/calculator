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

//计算
function calculate(number1, number2, sOperator){
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

//输入
function doInput(){
  var input = this.data();
  switch(input){
    case "=":
      screenCal.text(parseInt(sNumber), parseInt(input), sOperator);
      sNumber = "";
      sOperator = "";
      clearScreen = true;
      break;
    case "-":
  }
}
