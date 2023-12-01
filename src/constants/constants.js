const carNames = Object.freeze({
  separator: ',',
  maxLength: 5,
});

const string = Object.freeze({
  empty: '',
});

const number = Object.freeze({
  zero: 0,
});

const range = Object.freeze({
  from: 0,
  to: 9,
});

const car = Object.freeze({
  moveCondition: 4,
  move: '-',
});

const CONSTANTS = Object.freeze({
  number,
  string,
  carNames,
  range,
  car,
});

export default CONSTANTS;
