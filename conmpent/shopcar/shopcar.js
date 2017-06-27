/**
 * Created by asus on 2017/6/22.
 */
angular.module("shopcarModule",[])
    .config(["$routeProvider",function ($routeProvider) {
        $routeProvider
            .when("/shopcar",{
                templateUrl:"conmpent/shopcar/shopcar.html",
            })
    }])