import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printResultHeaderString() {
    Console.print(MESSAGE.print.result);
  },
};

export default OutputView;
