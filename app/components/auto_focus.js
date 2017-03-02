/*自定义监听导航栏组件*/

/**
* autoFocus Module
*
* Description
*/
(function(angular){
	angular.module('movieCat.directive.auto_focus', []).
		directive('autoFocus', ['$location', function($location){
			// Runs during compile

			var path = $location.path();

			//console.log(path);

			return {

				restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment

				link: function($scope, iElm, iAttrs, controller) {
					var aLink = iElm.children().attr('href');
					var type = aLink.replace(/#(\/.+?)\/\d+/,'$1');
					/*console.log(type);
					console.log(path);
					console.log(aLink);*/
					//当前渲染的页面location也iElm的子节点a的href相同时，为该iElm增加class样式
					if(path.startsWith(type)){
						iElm.addClass('active');
					}
					iElm.on('click',function(){
						iElm.parent().children().removeClass('active');
						iElm.addClass('active');
					});
				}
			};
		}]);
})(angular);
