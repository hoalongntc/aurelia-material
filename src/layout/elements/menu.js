import {bindable} from 'aurelia-framework';

export class Menu {
  @bindable router;
  @bindable routeInfo;

  changeMenu(e, href) {
    if(href) this.routeInfo.current = href;
  }

  routeActivated(href) {
    return location.hash == href;
  }
}
