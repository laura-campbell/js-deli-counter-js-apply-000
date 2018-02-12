var katzDeliLine = [];
function takeANumber (katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing (katzDeliLine) {
  for (index=0; index<katzDeliLine.length; index++) {
  console.log (katzDeliLine[0]);
  katzDeliLine[0] = "";
  }
}