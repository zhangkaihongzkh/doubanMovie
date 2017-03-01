(function(angular){

	'use strict';

	var module = angular.module('movieCat.comming_soon', ['ngRoute']);

	//配置路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/comming_soon', {
	    templateUrl: 'comming_soon/view.html',
	    controller: 'CommingSoonController'
	  });
	}]);


	module.controller('CommingSoonController', ['$scope',function($scope) {

	}]);

})(angular);
