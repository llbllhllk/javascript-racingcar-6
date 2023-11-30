import RacingGameController from './controller/RacingGameController.js';

class App {
  #racingGameController;

  constructor() {
    this.#racingGameController = new RacingGameController();
  }

  async play() {
    await this.#racingGameController.gameStart();
  }
}

export default App;

const app = new App();
app.play();
