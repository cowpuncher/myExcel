export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.components = options.components || []
  }

  getRoot() {
    const $root = document.createElement('div')

    this.components.forEach( Component => {
      // Создаем компоненту
      const component = new Component()
      // Выводим HTML
      $root.insertAdjacentHTML('beforeend', component.toHTML())
    });

    return $root
  }

  render() {
    this.$el.append(this.getRoot())
  }
}
