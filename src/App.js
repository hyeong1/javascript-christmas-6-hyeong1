import EventPlanner from "./EventPlanner.js";

class App {
  async run() {
    new EventPlanner().event();
  }
}

export default App;
