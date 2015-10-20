import {bindable} from 'aurelia-framework';

export class LayoutHeader {
  @bindable layoutCnf = {};
  @bindable title = '';

  toggleSideBar(side) {
    if(this.layoutCnf.sidebar) {
      this.layoutCnf.sidebar[side] = !this.layoutCnf.sidebar[side];
    }
  }
}
