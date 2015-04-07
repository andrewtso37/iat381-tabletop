angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '2', 'life' : '20', 'token': '5', 'dice': '2' };
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
<<<<<<< HEAD
		rollAll();
		console.log('rolled');
=======
		if (event.type == 'swipeup') {diceAnimation(this);}
>>>>>>> 6bdccd5afa225d31d57307227891f061ae820bd1
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
<<<<<<< HEAD
		  $ionicGesture.on('swipeup swipedown', scope.rollDice, elem);
=======
		  $ionicGesture.on('swipeup', scope.rollDice, elem);
>>>>>>> 6bdccd5afa225d31d57307227891f061ae820bd1
		  break;
      }
    }
  }
})

.controller('AddCtrl', function($scope) {})
