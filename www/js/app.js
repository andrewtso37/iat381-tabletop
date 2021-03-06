// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // force tab bar to be on the bottom on android
  $ionicConfigProvider.tabs.style("standard").position("bottom");
  // force back chevron instead of arrow on android
  $ionicConfigProvider.backButton.icon('ion-chevron-left');

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: "/tab",
    abstract: true,
    templateUrl: "templates/tabs.html"
  })

  // Each tab has its own nav history stack:

  .state('tab.new-game', {
    url: '/new-game',
    views: {
      'tab-new-game': {
        templateUrl: 'templates/tab-new-game.html',
        controller: 'NewGameCtrl'
      }
    }
  })

  .state('tab.notes', {
    url: '/notes',
    views: {
      'tab-notes': {
        templateUrl: 'templates/tab-notes.html',
        controller: 'NotesCtrl'
      }
    }
  })

  .state('tab.tracker', {
      url: '/tracker',
      views: {
        'tab-tracker': {
          templateUrl: 'templates/tab-tracker.html',
          controller: 'TrackerCtrl'
        }
      }
    })

  .state('tab.dice', {
    url: '/dice',
    views: {
      'tab-dice': {
        templateUrl: 'templates/tab-dice.html',
        controller: 'DiceCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/new-game');
});