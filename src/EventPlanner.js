import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class EventPlanner {
  #date = [];
  #menu = {};
  constructor() {
    InputView.printStart();
  }

  async event() {
    this.#date = await InputView.readDate();
    this.#menu = await InputView.readMenu();
    OutputView.printEvent(this.#date, this.#menu);
  }
}

export default EventPlanner;
