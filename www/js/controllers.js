angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '1', 'life' : '20', 'token': '0' };
})

.controller('TrackerCtrl', function($scope) {  
	window.onload = start();
})

.controller('TimerCtrl', function($scope) {})

.controller('DiceCtrl', function($scope) {})