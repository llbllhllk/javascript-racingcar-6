import InputView from '../view/inputView.js';

class RacingGameController {
  async gameStart() {
    await this.#inputCarNames();
  }

  async #inputCarNames() {
    const carNames = await InputView.readCarNames();
  }
}

export default RacingGameController;
