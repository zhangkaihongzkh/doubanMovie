
(function(angular){
	'use strict';
	var module = angular.module('movieCat.top250', ['ngRoute']);
	//配置路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/top250', {
	    templateUrl: 'top250/view.html',
	    controller: 'Top250Controller'
	  });
	}]);


	module.controller('Top250Controller', ['$scope',function($scope) {

	}]);

})(angular);


