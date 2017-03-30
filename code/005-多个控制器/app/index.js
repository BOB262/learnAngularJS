/*angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.name='BOB';
});*/

var firstController =function  ($scope){

	//$scope 我们叫做作用域
	//申明一个Model
	$scope.name = 'bob';
	console.log($scope)
}
var secondController =function  ($scope){
	$scope.name = "BOB四";
	console.log($scope)
}