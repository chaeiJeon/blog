import { Main } from "./components/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }
  setup() {
    const { el } = this.props;
    this.rootElement = document.querySelector(el);

    this.Main = new Main();
    const mainView = this.Main.render();
    this.rootElement.append(mainView);
  }
}
