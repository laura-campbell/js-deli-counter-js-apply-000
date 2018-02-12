var katzDeliLine = [];
function takeANumber (katzDeliLine, name) {
  var index=0;
  katzDeliLine[index] = name;
  var place = katzDeliLine.length + 1;
  return "Welcome, ${name}!. You are number ${place}! in line."
}