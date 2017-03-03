(function(angular){

	'use strict';

	var module = angular.module('movieCat.movie_detail', [
		'ngRoute',
		'movieCat.services.http',
		]);

	//配置路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/detail/:id', {
	    templateUrl: 'movie_detail/view.html',
	    controller: 'MovieDetailController'
	  });
	}]);




	module.controller('MovieDetailController', [
		'$scope',
		'$route',		//路由模块
		'$routeParams',//路由参数
		'HttpService',

		function($scope,$route,$routeParams,HttpService) {
			$scope.filmDetail = {title:'loading...'}; //电影的详细参数
			//$scope.filmDetail.title = 'loading...';
			//加载是否完成 true表示正在加载
			$scope.loading = true;

			var doubanAPI = 'https://api.douban.com/v2/movie/subject/' + $routeParams.id;

			HttpService.jsonp(doubanAPI,{},function(data){
				$scope.filmDetail = data;
				$scope.loading = false;
				$scope.$apply();//重新渲染页面

			});
		}
	]);

})(angular);

