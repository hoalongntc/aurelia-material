import {inject, bindable, customAttribute} from 'aurelia-framework';

@inject(Element)
@customAttribute('menu-active')
@bindable('current')
export class MenuActive {
  constructor(element) {
    this.element = element;
  }

  bind() { }
  currentChanged(newValue) {
    if(newValue)
      this.element.classList.add('active');
    else
      this.element.classList.remove('active');
  }
}
