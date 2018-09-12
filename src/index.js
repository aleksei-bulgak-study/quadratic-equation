module.exports = function solveEquation(equation) {
  let firstElementPattern = /^-?\d+(?=\*x\^2)/g;
  let secondElementPattern = /\-?\d+(?=\*x[^\^])/g;
  let thirdElementPattern = /\-?\d+$/g;

  equation = equation.replace(/\s+/g, '');
  a = toDecimal(getFirstMatch(firstElementPattern, equation));
  b = toDecimal(getFirstMatch(secondElementPattern, equation));
  c = toDecimal(getFirstMatch(thirdElementPattern, equation));

  return [
    Math.round((-1*b-Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a)),
    Math.round((-1*b+Math.sqrt(Math.pow(b,2)-4*a*c))/(2*a))
  ].sort((l, r) => l-r);
}

function getFirstMatch(pattern, text){
  return pattern.exec(text).shift();
}

function toDecimal(text){
  return Number.parseInt(text, 10);
}
