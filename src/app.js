import {Redirect} from 'aurelia-router';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.addPipelineStep('authorize', RouteChanged);
    config.map([
      { route: ['', 'dashboard'], name: 'dashboard', moduleId: 'dashboard',
        nav: true, title: 'Home'},
      { route: 'typography', name: 'typography', moduleId: 'components/typography',
        nav: true, title: 'Typography'},
      { route: 'widget-templates', name: 'widget-templates', moduleId: 'components/widgets/widget-templates',
        nav: true, title: 'Widget templates'},
      { route: 'widgets', name: 'widgets', moduleId: 'components/widgets/widgets',
        nav: true, title: 'Widgets'}
    ]);

    this.router = router;
  }

  layoutCnf = {
    sidebar: {
      left: false,
      right: false
    },
    type: '0'
  };
  routeInfo = {
    current: ''
  };

  changeRoute(route) {
    this.routeInfo.current = route;
  }
}

class RouteChanged {
  run(routingContext, next) {
    console.log(routingContext.nextInstruction.config.name);
    return next();
  }
}
