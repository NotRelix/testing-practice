export const calculator = {
  add: (first, second) => {
    return first + second;
  },
  subtract: (first, second) => {
    return first - second;
  },
  multiply: (first, second) => {
    return first * second;
  },
  divide: (first, second) => {
    return Number((first / second).toFixed(1));
  }
}
