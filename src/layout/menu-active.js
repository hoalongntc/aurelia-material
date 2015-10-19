import {inject, bindable, customAttribute} from 'aurelia-framework';

@inject(Element)
@customAttribute('menu-active')
@bindable('current')
export class SidebarMenu {
  constructor(element) {
    this.element = element;
  }

  bind() {
    console.log('init element');
  }

  currentChanged(newValue) {
    console.log('New route ' + newValue);
  }
}
