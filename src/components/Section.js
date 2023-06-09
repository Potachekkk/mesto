export class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItem(item) {
    this.addItem(this._renderer(item))
  }

  addItem(element) {
    this._container.prepend(element);
  }

  renderItems() {
    this._items.forEach((item) => {
      this.renderItem(item);
    });
  }
}
