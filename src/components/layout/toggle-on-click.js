import {inject, bindable, customAttribute} from 'aurelia-framework';
import $ from 'github:components/jquery@2.1.4'

@inject(Element)
@customAttribute('toggle-on-click')
export class ToggleOnClickCustomAttribute {  
  constructor(element) {
    this.element = $(element);
    this.element.click(this.itemClicked.bind(this));
  }

  itemClicked() {
    this.element.parent().toggleClass(this.value);
    this.element.parent().find('ul').stop(true, false).slideToggle(200);  
  }
}