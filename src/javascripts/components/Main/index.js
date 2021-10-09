export default class Main {
  constructor() {
    this.renderElement = Main.createRenderElement();
    this.bindEvents();
  }
  static createRenderElement() {
    const mainContainer = document.createElement("div");
    mainContainer.classList.add("main");
    mainContainer.innerHTML = `<div>input your location</div>`;
    return mainContainer;
  }
  bindEvents() {
    this.renderElement.addEventListener("click", (event) => {
      console.log("event");
    });
  }
  render() {
    return this.renderElement;
  }
}
