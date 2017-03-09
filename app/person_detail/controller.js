(function(angular){

	'use strict';

	var module = angular.module('movieCat.person_detail', [
		'ngRoute',
		'movieCat.services.http',
		]);

	//配置路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/person/:id', {
	    templateUrl: 'person_detail/view.html',
	    controller: 'PersonDetailController'
	  });
	}]);




	module.controller('PersonDetailController', [
		'$scope',
		'$route',		//路由模块
		'$routeParams',//路由参数
		'HttpService',
		'appConfig',
		function($scope,$route,$routeParams,HttpService,appConfig) {
			$scope.personDetail = {title:'loading...'}; //电影的详细参数
			//$scope.personDetail.title = 'loading...';
			//加载是否完成 true表示正在加载
			$scope.loading = true;

			var doubanAPI = appConfig.personApiAdress + $routeParams.id;

			HttpService.jsonp(doubanAPI,function(data){
				$scope.personDetail = data;
				$scope.loading = false;
				//console.log(data);
				$scope.$apply();//重新渲染页面

			});
		}
	]);

})(angular);

