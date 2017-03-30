

var firstController =function  ($scope){

	//$scope 我们叫做作用域
	//申明一个Model
	
	$scope.name = 'BOB';

	$scope.count = 0;

	//监听一个model 当一个model每次改变时 都会出发第2个函数
	$scope.$watch('name',function(newValue,oldValue){
		// console.log(newValue,oldValue);

		++$scope.count;

		if($scope.count < 30){
			// console.log("达到了30次");
			$scope.name = '已经大于30次了';
		}else if($scope.count <50){
$scope.name = '没到30次了';
			console.log("达到了40次");
		}else{
			console.log("达到了50次");
		}
	})

}
