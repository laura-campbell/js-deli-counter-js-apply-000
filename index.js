var katzDeliLine = [];
var name = [];
function takeANumber (katzDeliLine, name) {
  for (index=0; index =name.length > 0; index++)
  katzDeliLine[index] = name;
  var place = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${place} in line.`
}