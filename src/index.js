
exports.min = function min (array) {
  if (arguments.length === 0) {return 0;}
  if (array.length === 0) {return 0;}
  return array.sort(function(a, b) { return a - b; })[0];
}

exports.max = function max (array) {
  if (arguments.length === 0) {return 0;}
  if (array.length === 0) {return 0;}
  return array.sort(function(a, b) { return b - a; })[0];
}

exports.avg = function avg (array) {
  if (arguments.length === 0) {return 0;}
  if (array.length === 0) {return 0;}
  return array.reduce((sum, item) => sum + item, 0)/array.length;
}
