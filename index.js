var katzDeliLine = [];
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  var index = 0;
  if (katzDeliLine.length<1) {
  return `There is nobody waiting to be served!`;
  }
  else {
  for (index=0; index<katzDeliLine.length; index++) {
  console.log (katzDeliLine[0]);
  katzDeliLine[0] = "";
  }
  } 
}