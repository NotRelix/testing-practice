function getAverage(array) {
  const total = array.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return total / array.length;
}

function getMin(array) {
  let min = array[0];
  array.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });
  return min;
}

function getMax(array) {
  let max = array[0];
  array.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });
  return max;
}

export function analyzeArray(array) {
  const average = getAverage(array);
  const min = getMin(array);
  const max = getMax(array);
  const length = array.length;
  return {
    average,
    min,
    max,
    length,
  }
}
