(function(angular){

	'use strict';

	var module = angular.module('movieCat.movie_list', ['ngRoute','movieCat.services.http']);

	//配置路由
	module.config(['$routeProvider', function($routeProvider) {
	  $routeProvider.when('/:category/:page', {
	    templateUrl: 'movie_list/view.html',
	    controller: 'InTheatersController'
	  });
	}]);




	module.controller('InTheatersController', [
		'$scope',
		'$route',		//路由模块
		'$routeParams',//路由参数
		'HttpService',

		function($scope,$route,$routeParams,HttpService) {
			var count = 10;//每一页的记录个数
			var page = parseInt($routeParams.page);//当前的页码数
			var start = (page - 1) * count;//起始的页数

			var doubanAPI = 'https://api.douban.com/v2/movie/' + $routeParams.category;

			//控制器用于暴露数据和行为

			//标题
			$scope.title = '';
			$scope.message = '';

			$scope.subjects = {};
			//记录的个数
			$scope.totalNum = 0;
			//一共有几页
			$scope.totalPage = 0;
			//当前的页数
			$scope.currentPage = page;
			//加载是否完成 true表示正在加载
			$scope.loading = true;
			//自定义的模块
			HttpService.jsonp(doubanAPI,{
				start:start,
				count:count,
			},function(data){
				$scope.title = data.title;
				$scope.subjects = data.subjects;
				//console.log(data);
				$scope.totalNum = data.total;
				$scope.totalPage = Math.ceil($scope.totalNum / count);//全部请求完后计算总共几页
				$scope.loading = false;
				//重新绑定,重新同步
				$scope.$apply();
			});

			//暴露上一页下一页的行为
			$scope.go = function(page){
				if(page >= 1 && page <= $scope.totalPage){
					$route.updateParams({page:page})
				}
			}




			//豆瓣api
			/*var doubanApiAdress = 'http://api.douban.com/v2/movie/in_theaters';

			$http.jsonp(doubanApiAdress).then(function success(res){
				if(200 === res.status){
					$scope.subjects = res.data.subjects;
				}else{
					$scope.message = '加载失败了 错误原因：' +  res.statusText;
				}

				console.log(res);
			},function error(err){
				console.log(err);
				$scope.message = '加载失败了 错误原因：' +  err.statusText;
			})*/

		}
	]);

})(angular);

