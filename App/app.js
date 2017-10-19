/**
 * Created by Administrator on 2017/10/18.
 */
var app=angular.module("app",["ui.router"]);
app.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state("shop",{
            url:"/shop",
            templateUrl:"./App/View/shop.html"
        });
    $urlRouterProvider.otherwise("/shop");
});