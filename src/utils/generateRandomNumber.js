import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';

const generateRandomNumber = () => {
  return Random.pickNumberInRange(CONSTANTS.range.from, CONSTANTS.range.to);
};

export default generateRandomNumber;
