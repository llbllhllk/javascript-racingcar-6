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
}

export default RacingGameService;
