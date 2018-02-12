var katzDeliLine = [];
var index=0;
var nameArr = [];
function takeANumber (katzDeliLine, name) {
  nameArr = name.split(",");
  for (index=0; index < nameArr.length; index++) {
  katzDeliLine[index] = nameArr[index];
  var place = katzDeliLine.length + index;
  var message = `Welcome, ${nameArr[index]}. You are number ${place} in line.`;
  console.log(nameArr[index]);
  }
  return message;
}
var katzDeliLine = [];
var index=0;
var nameArr = [];
function takeANumber (katzDeliLine, name) {
  nameArr = name.split(",");
  for (index=0; index < nameArr.length; index++) {
  katzDeliLine[index] = nameArr[index];
  var place = katzDeliLine.length + index;
  var message = `Welcome, ${nameArr[index]}. You are number ${place} in line.`;
  console.log(nameArr[index]);
  }
  return message;
}