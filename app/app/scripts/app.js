'use strict';

/**
 * @ngdoc overview
 * @name planningPokerApp
 * @description
 * # planningPokerApp
 *
 * Main module of the application.
 */
angular
  .module('planningPokerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',

    'ui.router',
    'ui.bootstrap'
  ])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
      function($stateProvider, $urlRouterProvider, $locationProvider) {
          $locationProvider.html5Mode(true);
          $urlRouterProvider.otherwise('/');

          $stateProvider
            .state('home', {
                abstract: true,
                url: '',
                views: {
                    '': {
                        templateUrl: '/views/main.html'
                    },
                    'navbar@home': {
                        templateUrl: '/views/navbar.html'
                    },
                    'footer@home': {
                        templateUrl: '/views/footer.html'
                    }
                }
            })
            .state('home.lobby', {
                url: '/',
                views: {
                    'content@home': {
                        templateUrl: '/views/home.html'
                    }
                }
            })
            .state('home.rooms', {
                url: '/rooms',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            })
            .state('home.rooms.create', {
                url: '/create',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            })
            .state('home.rooms.join', {
                url: '/join/:id',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            })
            .state('home.room', {
                url: '/room/:id',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            })
            .state('home.about', {
                url: '/about',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            })
            .state('home.faq', {
                url: '/faq',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            })
            .state('home.contact', {
                url: '/contact',
                views: {
                    'content@home': {
                        templateUrl: '/views/about.html'
                    }
                }
            });
    }]
  );
