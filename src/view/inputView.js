import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.read.carNames);

    return carNames;
  },

  async readTrialNumber() {
    const trialNumber = await Console.readLineAsync(MESSAGE.read.trialNumber);

    return trialNumber;
  },
};

export default InputView;
