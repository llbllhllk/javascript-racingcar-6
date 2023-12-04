import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class CarNamesValidator {
  static validateCarNames(carNames) {
    const validators = [
      this.#validateEmpty,
      this.#validateSeparator,
      this.#validateDuplicated,
      this.#validateMaxLength,
    ];
    validators.forEach(validator => validator(carNames));
  }

  static #validateEmpty(carNames) {
    if (carNames.length === CONSTANTS.number.zero) throw new Error(ERROR.carNames.empty);
  }

  static #validateDuplicated(carNames) {
    const formattedCarNames = carNames
      .split(CONSTANTS.carNames.separator)
      .map(car => car.trim())
      .filter(Boolean);
    if (formattedCarNames.length !== new Set(formattedCarNames).size)
      throw new Error(ERROR.carNames.duplicated);
  }

  static #validateMaxLength(carNames) {
    const formattedCarNames = carNames
      .split(CONSTANTS.carNames.separator)
      .map(car => car.trim())
      .filter(Boolean);
    formattedCarNames.forEach(car => {
      if (car.length > CONSTANTS.carNames.maxLength) throw new Error(ERROR.carNames.maxLength);
    });
  }

  static #validateSeparator(carNames) {
    const formattedCarNames = carNames.split(CONSTANTS.carNames.separator).map(car => car.trim());
    const emptyCarNamesCount = formattedCarNames.filter(car => !car.trim()).length;
    if (emptyCarNamesCount > CONSTANTS.number.zero) throw new Error(ERROR.carNames.separator);
  }
}

export default CarNamesValidator;
