export default class Container {
  constructor() {
    this.renderElement = Container.createRenderElement();
    this.bindEvents();
  }
  static createRenderElement() {
    const Container = document.createElement("div");
    Container.classList.add("container");
    Container.innerHTML = `<div>this is container</div>`;
    return Container;
  }
  bindEvents() {
    this.renderElement.addEventListener("click", (event) => {
      console.log("this is container");
    });
  }
  render() {
    return this.renderElement;
  }
}
