/**
 * Created by bqby on 2017/3/30.
 */

var cartController = function($scope){
    $scope.cart=[
        {
            id:1000,
            name:"iphone5s",
            quantity:2,
            price:4300
        },
        {
            id:3300,
            name:"iphone5",
            quantity:30,
            price:3300
        },
        {
            id:232,
            name:"mac",
            quantity:3,
            price:23000
        },
        {
            id:1300,
            name:"ipad",
            quantity:5,
            price:6900
        }
    ];
    /*
    *   计算购物总价
    */
    $scope.totalPrice = function(){
        var total =0;
        angular.forEach($scope.cart,function(item){
            total += item.quantity * item.price;
        });
        return total;
    };

    /**
    *   计算总购买数
    */
    $scope.totalQuantity = function(){
        var total =0;
        angular.forEach($scope.cart,function(item){

            // total +=  Number(item.quantity)
            total +=  parseInt(item.quantity)
        });
        return total;
    }

    /**
     * 找一个元素的索引
     */
    var findIndex = function(id){
        var index = -1;

        angular.forEach($scope.cart,function(item,key){
            if(item.id === id){
                index = key;
                return;
            }
        });

        return index;
    };
    // console.log(findIndex());

    /**
     * 为某个产品添加一个数量
     */
    $scope.add = function(id){

        var index = findIndex(id);
        // console.log($scope.cart[0].quantity)
        if(index !== -1){
            ++$scope.cart[index].quantity;
        }
    };

    /**
     * 为某个产品减少一个数量
     */
    $scope.reduce = function(id){

        var index = findIndex(id);
        // console.log($scope.cart[0].quantity)
        if(index !== -1){
            var item = $scope.cart[index];
            if(item.quantity > 1){
                --item.quantity;
            }else{
                var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){
                    $scope.remove(id)
                }
            }
        }
    };


    /**
     * 移除一项
     */
    $scope.remove = function(id){
        // alert(id)
        /*/!*脏检查*!/
        $scope.cart = [
            {
                id:1000,
                name:"ipad",
                quantity:'5',
                price:6900
            }
        ]*/

        /*var index = -1;
        angular.forEach($scope.cart,function(item,key){
            // console.log(key)
            // console.log(item.id);
            if(item.id === id){
                index = key;
                // console.log(index = key)
            }
        });*/

        var index = findIndex(id);
        // console.log(index)
        //如果找到了那个item
        if(index !== -1){
            $scope.cart.splice(index,1)
        }

        //自动做脏检查
    };

    $scope.$watch('cart',function(newValue,oldValue){
        // console.log(newValue[0].quantity,oldValue[0].quantity)
        angular.forEach(newValue,function(item,key){
            // console.log(item,key)
            // var index = findIndex(id);
            if(item.quantity < 1){
                // console.log($scope.cart[index].quantity)
                var returnKey = confirm('是否从购物车内删除该产品!');
                if(returnKey){
                    $scope.remove(item.id)
                }else{
                    item.quantity = oldValue[key].quantity
                }
            }
        })
    },true);
};