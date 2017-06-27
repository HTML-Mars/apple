/**
 * Created by asus on 2017/6/22.
 */
angular.module("homeModule",[])
.config(["$routeProvider",function ($routeProvider) {
    $routeProvider
        .when("/home",{
            templateUrl:"conmpent/home/home.html",
            controller:"homeCtrl",
            css:"conmpent/home/home.css",
        })
}])
.controller("homeCtrl",["$scope","$http",function ($scope,$http) {
    $http.get("json/home.json").then(function (mes) {
        console.log(mes);
        $scope.arr=mes.data.data.act_info[0].act_rows;
        $scope.arr1=mes.data.data.act_info[1].act_rows;
        $scope.arr2=mes.data.data.act_info[3].act_rows;
        $scope.arr3=mes.data.data.act_info[4].act_rows[0].act_rows;
        $scope.arr4=mes.data.data.act_info[4].act_rows[1].act_rows;
        $scope.arr5=mes.data.data.act_info[4].act_rows[2].act_rows;
        $scope.arr6=mes.data.data.act_info[4].act_rows[3].act_rows;
        $scope.arr7=mes.data.data.act_info[5].act_rows;
    })
    var mySwiper = new Swiper ('.swiper-container', {
        loop: true,
        autoplay:1000,
        pagination: '.swiper-pagination',
    })
}])