var katzDeliLine = [];
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  var index = 0;
  var customer;
  if (katzDeliLine.length<1) {
  return `There is nobody waiting to be served!`;
  }
  else {
  for (index=0; index<katzDeliLine.length; index++) {
  customer = katzDeliLine[0];
  katzDeliLine.splice(0,1);
  return `Currently serving ${customer}.`;
  }
}
}
function currentLine (katzDeliLine) {
  var list;
  var index;
  for (index=0; index<katzDeliLine.length; index++) {
  order = `${index + 1}. ${katzDeliLine[index]},`;
  list += order;
  }
  return `The line is currently ${list}`;
}