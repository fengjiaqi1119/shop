/**
 * Created by Administrator on 2017/10/18.
 */
app.controller("shopController",["$scope","shopServer",function($scope,shopServer){
    alert(1111);
    shopServer.getShop("get","http://localhost:8088/?data").then(function(res){
        console.log(res.data);
        $scope.goods=res.data;
    })
}]);