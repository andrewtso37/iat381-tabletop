angular.module('starter.controllers', [])

.controller('NewGameCtrl', function($scope) {
	$scope.data = { 'players': '1', 'life' : '20', 'token': '0' };
})

.controller('TrackerCtrl', function($scope) {  
	window.onload = start();
})

.controller('FavouritesCtrl', function($scope) {
    $scope.items = '';

    var initCallback = function(){
        getItems();
    };

    var dataStore = new IDBStore('favourites', initCallback);

    var getItemsSuccess = function(data){
        $scope.items = data;
        // http://jimhoskins.com/2012/12/17/angularjs-and-apply.html 
        $scope.$apply(); 
    };

    var errorCallback = function(){
        console.log('error'); 
    };

    var getItems = function(){
        dataStore.getAll(getItemsSuccess,errorCallback);
        console.log('getItems'); 
    };

    $scope.deleteItem = function(item){
        dataStore.remove(item,getItems,errorCallback);
    }

    $scope.addItem = function(){
        dataStore.put({'timeStamp': new Date().getTime(), 'text' : $scope.itemname},getItems,errorCallback); 
        $scope.itemname = ''; 
    };
})

.controller('DiceCtrl', function($scope) {})

.controller('AddCtrl', function($scope) {})
