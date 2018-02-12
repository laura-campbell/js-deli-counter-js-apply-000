var katzDeliLine = [];
var name = [];
var message = [];
var index;
function takeANumber (katzDeliLine, name) {
  for (index=0; index <= name.length; index++) {
  katzDeliLine[index] = name;
  var place = katzDeliLine.length;
  message[index] = `Welcome, ${name[index]}. You are number ${place} in line.`
  }
  return message;
}