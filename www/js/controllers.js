angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '2', 'life' : '20', 'token': '0', 'dice': '2' };
})

.controller('TrackerCtrl', function($scope) {  
	window.onload = start();
	$scope.removeTab = function(event)  {
		console.log('Reporting : ' + event.type);
		if (event.type == 'swipeleft') {playerTabAnimationLeft(this);}
		if (event.type == 'swiperight') {playerTabAnimationRight(this);}
		remove(this);
	}
})

.controller('NotesCtrl', function($scope) {})

.controller('DiceCtrl', function($scope) {
	window.onload = startDice();
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
          $ionicGesture.on('swipeleft swiperight', scope.removeTab, elem);
          break;
		case 'gestureDice':
		  $ionicGesture.on('swipeup swipedown', scope.rollDice, elem);
		  break;
      }
    }
  }
})

.controller('AddCtrl', function($scope) {})
