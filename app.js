/**
 * Created by asus on 2017/6/22.
 */
angular.module("routingDemoApp", ["ngRoute","angularCSS","homeModule","categrayModule","mineModule","shopcarModule"])
    .config(["$routeProvider", function ($routeProvider) {
        $routeProvider.
        otherwise({
            redirectTo: '/home'
        });
    }])

