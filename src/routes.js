import angular from 'angular';


const routes = ($routeProvider) => {
  $routeProvider
  .when('/', {
    template: require('./templates/main.html'),
    controller: 'MainController',
    controllerAs: 'main'
  })
  .when('/react', {
    template: require('./templates/react.html'),
    controller: 'ReactController',
    controllerAs: 'react'
  })
  .otherwise({redirectTo: '/'});
};

routes.$inject = ['$routeProvider'];

export default routes;
