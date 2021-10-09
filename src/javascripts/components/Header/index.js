export default class Header {
  constructor() {
    this.renderElement = Header.createRenderElement();
    this.bindEvents();
  }
  static createRenderElement() {
    const HeaderContainer = document.createElement("div");
    const writePostButton = document.createElement("button");

    HeaderContainer.classList.add("header");
    writePostButton.classList.add("write-post");

    writePostButton.innerHTML = "새글쓰기";

    HeaderContainer.appendChild(writePostButton);
    return HeaderContainer;
  }
  bindEvents() {
    this.renderElement.addEventListener("click", (event) => {
      const { target } = event;
      const isWritePostButton = target.tagName === "BUTTON";
      //버튼은 새글쓰기 버튼밖에 없으니까
      if (isWritePostButton) {
        this.emit("writePost", {});
      }
    });
  }
  on(eventName, callback) {
    console.log("on");
    this.events = this.events ? this.events : {};
    this.events[eventName] = callback;
  }
  emit(eventName, payload) {
    this.events[eventName] && this.events[eventName](payload);
  }
  render() {
    return this.renderElement;
  }
}
