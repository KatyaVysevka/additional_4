module.exports = function multiply(first, second) {
  // your solution
  //

  var z = (first * second);
  var b = '';
  for (; z >= 1;) {
    var q = z % 10;
    z = Math.trunc(z / 10);
    b = String(q) + b;
  }
  return b;

}