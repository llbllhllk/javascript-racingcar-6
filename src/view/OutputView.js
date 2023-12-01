import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printResultHeaderString() {
    Console.print(MESSAGE.print.result);
  },

  printRacingResultString(carStatus) {
    carStatus.forEach(car => Console.print(car));
    Console.print('');
  },
};

export default OutputView;
