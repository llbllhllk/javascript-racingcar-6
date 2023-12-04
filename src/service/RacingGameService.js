import CONSTANTS from '../constants/constants.js';
import Car from '../domain/Car.js';
import generateRandomNumber from '../utils/generateRandomNumber.js';

class RacingGameService {
  #cars;

  constructor() {
    this.#cars = [];
  }

  createCar(carNames) {
    this.#cars.push(...carNames.map(carName => new Car(carName)));
  }

  moveCar() {
    return this.#cars.map(car => {
      const randomNumber = generateRandomNumber();
      car.move(randomNumber);

      return car.status();
    });
  }

  findWinners() {
    const max = this.#calculateMaxPositionLength();

    return this.#cars
      .map(car => car.findWinner(max))
      .filter(Boolean)
      .join(CONSTANTS.winners.separator);
  }

  #calculateMaxPositionLength() {
    return Math.max(...this.#carsStatus().map(car => car[CONSTANTS.car.carPositionIndex].length));
  }

  #carsStatus() {
    return this.#cars.map(car => car.status().split(CONSTANTS.car.carStatusSeparator));
  }
}

export default RacingGameService;
