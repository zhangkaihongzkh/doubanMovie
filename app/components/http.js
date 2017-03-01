(function(angular){
	//由于默认angular提供的异步请求对象不支持自定义回调函数名称
	//（angular为为我们随机定义了名字）不被豆瓣支持
	var http = angular.module('movieCat.services.http', []);
	http.service('HttpService', ['$window','$document', function($window,$document){
		//url:https://www.baidu.com --转化为script添加到html中
		this.jsonp = function(url,data,callback){
			//1.挂载回调函数（放在全局中供调用）
			var fnName = Math.random().toString().replace('.','');//随机函数的名字

			var fnSuffix = 'my_json_cb_' + fnName;
			$window[fnSuffix] = callback;
			//2.将url与data进行拼接
			//当用户传来的url带有问号时 --url : www.baidu.com?abc=78
			var queryString = url.indexOf('?') == -1 ? '?':'&';

			for(var key in data){
				queryString += key + '=' + data[key] + '&';
			}
			//3.处理回调参数
			queryString += 'callback=' + fnSuffix;
			//4.生成script标签
			var scriptElement =  $document[0].createElement('script');
			scriptElement.src = url + queryString;
			//5.将script放在页面中
			$document[0].body.appendChild(scriptElement);
		};
	}])
})(angular);
