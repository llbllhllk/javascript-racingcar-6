import CONSTANTS from '../constants/constants.js';
import RacingGameService from '../service/RacingGameService.js';
import OutputView from '../view/OutputView.js';
import InputView from '../view/inputView.js';

class RacingGameController {
  #racingGameService;

  constructor() {
    this.#racingGameService = new RacingGameService();
  }

  async startGame() {
    return await this.#inputInfo();
  }

  async #inputInfo() {
    const carNames = await InputView.readCarNames();
    const trialNumber = await InputView.readTrialNumber();
    this.#racingGameService.createCar(carNames);

    return this.#printRacingResult(trialNumber);
  }

  #printRacingResult(trialNumber) {
    OutputView.printResultHeaderString();
    Array.from({ length: trialNumber }, () => {
      const carStatus = this.#racingGameService.moveCar();
      OutputView.printRacingResultString(carStatus);
    });

    return this.#printWinnersResult();
  }

  #printWinnersResult() {
    const winners = this.#racingGameService.findWinners().join(CONSTANTS.winners.separator);
    OutputView.printWinners(winners);
  }
}

export default RacingGameController;
