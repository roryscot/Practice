angular
  .module('app', ['ui.router', 'templates'])

  // add routes
  .config(['$stateProvider', '$urlRouterProvider',
    function('$stateProvider', '$urlRouterProvider'){
      // start defining routes
      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'main/_home.html',
          controller: 'MainCtrl'
        })
        // re-direct for invalid url
        $urlRouterProvider.otherwise('home');

    }]);
