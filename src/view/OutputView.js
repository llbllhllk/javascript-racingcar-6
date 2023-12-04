import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CONSTANTS from '../constants/constants.js';

const OutputView = {
  printResultHeaderString() {
    Console.print(MESSAGE.print.result);
  },

  printRacingResultString(carStatus) {
    carStatus.forEach(car => Console.print(car));
    Console.print(CONSTANTS.string.empty);
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners}`);
  },
};

export default OutputView;
