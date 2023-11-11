import InputView from "./InputView.js";
import OutputView from "./OutputView.js";

class EventPlanner {
  #date = {};
  constructor() {
    InputView.printStart();
  }

  async date() {
    this.#date = await InputView.readDate();
  }
}

const eventPlanner = new EventPlanner();
eventPlanner.date();
