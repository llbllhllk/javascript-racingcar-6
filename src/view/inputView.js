import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CarNamesValidator from '../validators/CarNamesValidator.js';
import TrialNumberValidator from '../validators/TrialNumberValidator.js';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.read.carNames);
    CarNamesValidator.validateCarNames(carNames);

    return carNames
      .split(',')
      .map(car => car.trim())
      .filter(Boolean);
  },

  async readTrialNumber() {
    const trialNumber = await Console.readLineAsync(MESSAGE.read.trialNumber);
    TrialNumberValidator.validateTrialNumber(trialNumber);

    return Number(trialNumber);
  },
};

export default InputView;
