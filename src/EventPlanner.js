import InputView from "./InputView.js";

class EventPlanner {
  #date = [];
  #menu = {};
  constructor() {
    InputView.printStart();
  }

  async date() {
    this.#date = await InputView.readDate();
    this.#menu = await InputView.readMenu();
  }
}

const eventPlanner = new EventPlanner();
eventPlanner.date();
