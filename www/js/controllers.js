angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '1', 'life' : '20', 'token': '0' };
})

.controller('TrackerCtrl', function($scope) {  
	window.onload = start();
	$scope.reportEvent = function(event)  {
		console.log('Reporting : ' + event.type);
		remove(this);
		console.log('hidden');
	}
})

.controller('TimerCtrl', function($scope) {})

.controller('DiceCtrl', function($scope) {})

.directive('detectGestures', function($ionicGesture) {
  return {
    restrict :  'A',
    link : function(scope, elem, attrs) {
      var gestureType = attrs.gestureType;
      switch(gestureType) {
        case 'swipe':
          $ionicGesture.on('swipe', scope.reportEvent, elem);
          break;
		case 'swipePlayer':
          $ionicGesture.on('swipeleft swiperight', scope.reportEvent, elem);
          break;
      }
    }
  }
})