'use strict';

// Declare app level module which depends on views, and components
angular.module('movieCat', [
        'ngRoute',
        //'movieCat.in_theaters',
        'movieCat.movie_detail',
        'movieCat.person_detail',
        'movieCat.movie_list',

        'movieCat.directive.auto_focus', //自动监听导航栏变化

    ])
    //公用配置项
    .constant('appConfig', {
        pageSize: 10,

        listApiAdress: 'https://api.douban.com/v2/movie/', //列表api
        detailApiAdress: 'https://api.douban.com/v2/movie/subject/', //电影详情api
        personApiAdress: 'https://api.douban.com/v2/movie/celebrity/', //人物信息api
        //      /v2/movie/subject/:id
        //		/v2/movie/in_theaters/1
    })
    .config(['$routeProvider', function($routeProvider) {
        //初始化跳转到第一个页面
        $routeProvider.otherwise({ redirectTo: '/in_theaters/1' });
    }])


//导航栏
.controller('Nav', [
    '$scope',
    '$location',
    function($scope, $location) { //导航栏
        $scope.$location = $location;
        $scope.$watch('$location.path()', function(newValue) {
            if (newValue.startsWith('/in_theaters')) {
                $scope.type = 'in_theaters';
            } else if (newValue.startsWith('/coming_soon')) {
                $scope.type = 'coming_soon';
            } else if (newValue.startsWith('/top250')) {
                $scope.type = 'top250';
            } else if (newValue.startsWith('/search')) { //搜索结果
                $scope.type = 'search';
            }
        });
    }
])

//搜索模块
.controller('SearchFunc', [
    '$scope',
    '$route',
    '$routeParams',
    '$location',
    function($scope, $route, $routeParams, $location) {
        $scope.input = ''; //搜索内容
        $scope.$location = $location; //用于监听地址变化
        //搜索功能
        $scope.search = function() {
            if (!$routeParams.category) { //当前在详情页面
                //console.log(1111);
                //$location.path('/detail/').replace('/search/');
                var tmpUrl = '/search/1?q=' + $scope.input;
                $location.url(tmpUrl);
                //$route.updateParams({category:'search',q:$scope.input});
                /*console.log($location.path());
                console.log($scope.input);
                console.log(tmpUrl);*/
                //$route.updateParams({q:$scope.input});
                //$route.updateParams({q:$scope.input});
                //http://localhost:8090/doubanMovie/app/index.html#/search/1?q=aaa

            } else { //当前在列表页面
                $route.updateParams({ category: 'search', q: $scope.input });

            }

            //$scope.input = $routeParams.q;
            //console.log($scope.input);
        }
    }
])
