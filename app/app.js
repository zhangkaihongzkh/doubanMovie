'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCat', [
  'ngRoute',
  'movieCat.in_theaters',
  'movieCat.top250',
  'movieCat.comming_soon',
]).
config(['$routeProvider', function($routeProvider) {
	//初始化跳转到第一个页面
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}]);
