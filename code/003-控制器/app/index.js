/*angular.module('myApp', []).controller('myCtrl', function($scope) {
    $scope.name='BOB';
});*/
/*var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = 'bob';
    $scope.age = "20";
});*/
var myCtrl =function  ($scope){

	//$scope 我们叫做作用域
	//申明一个Model
	$scope.name = 'bob';
	$scope.age = "20";
}
