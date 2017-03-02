'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCat', [
  'ngRoute',
  //'movieCat.in_theaters',
  'movieCat.movie_list',
  'movieCat.directive.auto_focus',//自动监听导航栏变化

]).
config(['$routeProvider', function($routeProvider) {
	//初始化跳转到第一个页面
  $routeProvider.otherwise({redirectTo: '/in_theaters/1'});
}])



.controller('Nav', [
	'$scope',
	'$location',
	function($scope,$location){//导航栏
		$scope.$location = $location;
		$scope.$watch('$location.path()', function(newValue) {
			if(newValue.startsWith('/in_theaters')){
				$scope.type = 'in_theaters'
			} else if(newValue.startsWith('/coming_soon')){
				$scope.type = 'coming_soon'
			}else if(newValue.startsWith('/top250')){
				$scope.type = 'top250'
			}
		});
	}
]);
