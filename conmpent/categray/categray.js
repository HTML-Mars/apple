/**
 * Created by asus on 2017/6/22.
 */
angular.module("categrayModule",[])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider
            .when("/categray",{
                templateUrl:"conmpent/categray/categray.html",
                controller:"categrayCtrl",
                css:"conmpent/categray/categray.css",
            })
    }])
    .controller("categrayCtrl",["$scope","$http",function ($scope,$http) {
        $http.get("json/category.json").then(function (res) {
            console.log(res.data.data);
            $scope.arr1=res.data.data.categories;
            $scope.arr2=res.data.data.products;
            $scope.name=0;
            $scope.order="$index";
            $scope.act=true;
            $scope.arrt=$scope.arr2[104749];
            $scope.arr=[];
            $scope.chang=function (id,index) {
                $scope.name=id;
                $scope.arrt=$scope.arr2[id];
                for(var i = 0;i<$scope.arrt.length;i++){
                    $scope.arrt[i].partner_price-=0;
                }
                $scope.arrs=$scope.arr1[index].cids;
                $scope.reset=function (x) {
                    console.log($scope.arrt.length,x);
                    $scope.arr.splice(0,$scope.arr.length);
                    for(var i = 0;i<$scope.arr2[id].length;i++) {
                        if (x == $scope.arr2[id][i].child_cid) {
                            $scope.arr.push($scope.arr2[id][i]);
                        }
                        if(x==0){
                            $scope.arr.push($scope.arr2[id][i]);
                        }
                    }
                    $scope.arrt=$scope.arr;
                }
            }
            $scope.sort=function (y) {
                $scope.order=y;
            }
            $scope.isActive1=false;
            $scope.isActive2=false;
            $scope.show=function (){
                if($scope.isActive1==false){
                    $scope.isActive1=true;
                    $scope.isActive2=false;
                }else if($scope.isActive1==true){
                    $scope.isActive1=false
                }
            }
            $scope.show1=function (){
                if($scope.isActive2==false){
                    $scope.isActive2=true;
                    $scope.isActive1=false;
                }else if($scope.isActive2==true){
                    $scope.isActive2=false
                }
            }
        })
    }])
