import removeAllChildNodes from "./utils/removeAllChildNodes.js";
import { Header, Container } from "./components/index.js";

export default class App {
  constructor(props) {
    this.props = props;
  }
  setup() {
    const { el } = this.props;
    this.rootElement = document.querySelector(el);

    this.Header = new Header();
    this.Container = new Container();

    const header = this.Header.render();
    const container = this.Container.render();

    this.rootElement.append(header);
    this.rootElement.append(container);

    this.bindEvents();
  }
  bindEvents() {
    this.Header.on("writePost", (payload) => {
      this.render();
    });
  }
  render() {
    removeAllChildNodes(this.rootElement);
  }
}
