
exports.min = function min (array) {
  if (arguments.length === 0) {return 0;}
  if (array.length === 0) {return 0;}
  let i = 0, minNumber = array[0];
  while (i < array.length) {
    if (array[i] < minNumber) {
      minNumber = array[i];
    }
    i++;
  }
  return minNumber;
}

exports.max = function max (array) {
  if (arguments.length === 0) {return 0;}
  if (array.length === 0) {return 0;}
  let i = 0, maxNumber = array[0];
  while (i < array.length) {
    if (array[i] > maxNumber) {
      maxNumber = array[i];
    }
    i++;
  }
  return maxNumber;
}

exports.avg = function avg (array) {
  if (arguments.length === 0) {return 0;}
  if (array.length === 0) {return 0;}
  let i = 0, avgNumber = 0;
  while (i < array.length) {
    avgNumber = avgNumber + array[i];
    i++;
  }
  return avgNumber/array.length;
}
