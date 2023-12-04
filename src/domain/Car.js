import CONSTANTS from '../constants/constants.js';

class Car {
  #name;

  #position;

  constructor(carName) {
    this.#name = carName;
    this.#position = [];
  }

  move(randomNumber) {
    if (this.#shouldCarMove(randomNumber)) this.#position.push(CONSTANTS.car.move);
  }

  status() {
    return `${this.#name} : ${this.#position.join(CONSTANTS.string.empty)}`;
  }

  findWinner(max) {
    if (this.#hasPositionGreaterThanMax(max)) return this.#name;
  }

  #hasPositionGreaterThanMax(max) {
    return this.#position.length >= max;
  }

  #shouldCarMove(randomNumber) {
    return randomNumber >= CONSTANTS.car.moveCondition;
  }
}

export default Car;
