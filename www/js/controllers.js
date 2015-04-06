angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '1', 'life' : '20', 'token': '0' };
})

.controller('TrackerCtrl', function($scope) {  
	window.onload = start();
	$scope.reportEvent = function(event)  {
		console.log('Reporting : ' + event.type);
		playerTabAnimation(this);
		remove(this);
	}
})

.controller('TimerCtrl', function($scope) {})

.controller('DiceCtrl', function($scope) {
	$scope.rollDice = function(event)  {
		console.log('Reporting : ' + event.type);
		rollAll();
		console.log('rolled');
	}
})

.directive('detectGestures', function($ionicGesture) {
  return {
    restrict :  'A',
    link : function(scope, elem, attrs) {
      var gestureType = attrs.gestureType;
      switch(gestureType) {
		case 'swipePlayer':
          $ionicGesture.on('swipeleft swiperight', scope.reportEvent, elem);
          break;
		case 'gestureDice':
		  $ionicGesture.on('swipe', scope.rollDice, elem);
		  break;
      }
    }
  }
})