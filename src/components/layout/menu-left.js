import {bindable} from 'aurelia-framework';

export class Menu {
  @bindable router;
  @bindable routeInfo;

  abc(e, href) {
  	console.log('clicked');
    if(href) this.routeInfo.current = href;
  }

  routeActivated(href) {
    return location.hash == href;
  }
}
