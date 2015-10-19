import {bootstrap} from 'github:twbs/bootstrap@3.3.5';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard',      moduleId: 'dashboard',      nav: true, title: 'Home' },
      { route: 'users',           name: 'users',          moduleId: 'users',          nav: true, title: 'Github Users' },
      { route: 'child-router',    name: 'child-router',   moduleId: 'child-router',   nav: true, title: 'Child Router' }
    ]);

    this.router = router;
    this.layoutCnf = {
      sidebar: {
        left: false,
        right: false
      },
      type: '0'
    };
  }
}
