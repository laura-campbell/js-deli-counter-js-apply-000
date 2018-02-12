var katzDeliLine = [];
var index=0;
var nameArr = [];
function takeANumber (katzDeliLine, name) {
  nameArr[index] = name;
  for (index=0; index < nameArr.length; index++) {
  katzDeliLine[index] = nameArr[index];
  var place = katzDeliLine.length + nameArr(name);
  var message = `Welcome, ${nameArr[index]}. You are number ${place} in line.`
  }
  return message;
}