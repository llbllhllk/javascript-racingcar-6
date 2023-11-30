import InputView from '../view/inputView.js';

class RacingGameController {
  async gameStart() {
    await this.#inputCarNames();
  }

  async #inputCarNames() {
    const carNames = await InputView.readCarNames();
    return this.#inputTrialNumber();
  }

  async #inputTrialNumber() {
    const trialNumber = await InputView.readTrialNumber();
  }
}

export default RacingGameController;
