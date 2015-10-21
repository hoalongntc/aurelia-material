export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([{
      route: ['', 'dashboard'], name: 'dashboard', moduleId: 'components/dashboard/index', nav: true, title: 'Home'}, 
      {route: 'typography', name: 'typography', moduleId: 'components/typography/index', nav: true, title: 'Typography'}, 
      {route: 'widget-templates', name: 'widget-templates', moduleId: 'components/widgets/templates', nav: true, title: 'Widget templates'},
      {route: 'widgets', name: 'widgets', moduleId: 'components/widgets/widgets', nav: true, title: 'Widgets'}, 
      {route: 'form-elements', name: 'form-elements', moduleId: 'components/form/elements', nav: true, title: 'Form Elements'},
      {route: 'form-components', name: 'form-components', moduleId: 'components/form/components', nav: true, title: 'Form Components'}, 
      {route: 'form-examples', name: 'form-examples', moduleId: 'components/form/examples', nav: true, title: 'Form Examples'}, 
      {route: 'form-validations', name: 'form-validations', moduleId: 'components/form/validations', nav: true, title: 'Form Validations'}
    ]);
    this.router = router;
  }

  layoutCnf = {
    sidebar: {
      left: false,
      right: false
    },
    type: '0'
  }

  routeInfo = {
    current: location.hash,
    menu: [
      {href: '#/dashboard', title: 'Home', icon: 'zmdi zmdi-home'},
      {href: '#/typography', title: 'Typography', icon: 'zmdi zmdi-format-underlined'},
      {title: 'Widgets', icon: 'zmdi zmdi-widgets', children: [
        {href: '#/widget-templates', title: 'Widget templates'}, 
        {href: '#/widgets', title: 'Widgets'}
      ]},
      {title: 'Forms', icon: 'zmdi zmdi-collection-text', children: [
        {href: '#/form-elements', title: 'Form Elements'}, 
        {href: '#/form-components', title: 'Form Components'}, 
        {href: '#/form-examples', title: 'Form Examples'}, 
        {href: '#/form-validations', title: 'Form Validations'}
      ]}
    ]
  }
}