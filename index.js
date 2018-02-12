var katzDeliLine = [];
var message = [];
var index=0;
var nameArr = [];
function takeANumber (katzDeliLine, name) {
  nameArr[index] = name;
  for (index=0; index < nameArr.length; index++) {
  katzDeliLine[index] = name;
  var place = katzDeliLine.length + 1;
  message[index] = `Welcome, ${nameArr[index]}. You are number ${place} in line.`
  }
  return message;
}