import CONSTANTS from '../constants/constants.js';

class Car {
  #carName;

  #position;

  constructor(carName) {
    this.#carName = carName;
    this.#position = [];
  }

  move(randomNumber) {
    if (this.#shouldCarMove(randomNumber)) this.#position.push(CONSTANTS.car.move);
  }

  status() {
    return `${this.#carName} : ${this.#position.join('')}`;
  }

  #shouldCarMove(randomNumber) {
    return randomNumber >= CONSTANTS.car.moveCondition;
  }
}

export default Car;
