import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class TrialNumberValidator {
  static validateTrialNumber(trialNumber) {
    const validators = [this.#validateEmpty, this.#validateNaN, this.#validateNegative];
    validators.forEach(validator => validator(trialNumber));
  }

  static #validateEmpty(trialNumber) {
    if (trialNumber === CONSTANTS.string.empty) throw new Error(ERROR.trialNumber.empty);
  }

  static #validateNaN(trialNumber) {
    if (Number.isNaN(Number(trialNumber))) throw new Error(ERROR.trialNumber.notANumber);
  }

  static #validateNegative(trialNumber) {
    if (Number(trialNumber) < CONSTANTS.number.zero) throw new Error(ERROR.trialNumber.negative);
  }
}

export default TrialNumberValidator;
