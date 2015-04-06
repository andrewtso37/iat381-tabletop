angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '1', 'life' : '20', 'token': '0', 'dice': '2' };
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

.controller('FavouritesCtrl', function($scope) {})

.controller('DiceCtrl', function($scope) {
	window.onload = startDice();
	window.onload = shakeDice.start();
	window.addEventListener('shake', shakeEventDidOccur, false);
	//function to call when shake occurs
	function shakeEventDidOccur () {
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
		  $ionicGesture.on('shake', scope.rollDice, elem);
		  break;
      }
    }
  }
})
.controller('DiceCtrl', function($scope) {})

.controller('AddCtrl', function($scope) {})
