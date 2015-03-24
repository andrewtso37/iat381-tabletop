angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '1', 'life' : '20', 'token': '0' };
})

.controller('TrackerCtrl', function($scope) {  
	window.onload = start();
	var players = document.getElementById('players').value;
	if (players == 1) {
		$scope.p1 = true;
	}
	if (players == 2) {
		$scope.p1 = true;
		$scope.p2 = true;
	}
	if (players == 3) {
		$scope.p1 = true;
		$scope.p2 = true;
		$scope.p3 = true;
	}
	if (players == 4) {
		$scope.p1 = true;
		$scope.p2 = true;
		$scope.p3 = true;
		$scope.p4 = true;
	}
	if (players == 5) {
		$scope.p1 = true;
		$scope.p2 = true;
		$scope.p3 = true;
		$scope.p4 = true;
		$scope.p5 = true;
	}
	if (players == 6) {
		$scope.p1 = true;
		$scope.p2 = true;
		$scope.p3 = true;		
		$scope.p4 = true;
		$scope.p5 = true;
		$scope.p6 = true;
	}
})

.controller('TimerCtrl', function($scope) {})

.controller('DiceCtrl', function($scope) {})
