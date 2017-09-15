var exceptionModule = angular.module('myApp');

ExceptionHandler.$inject = ['$log'];
exceptionModule.factory('$exceptionHandler', ExceptionHandler);

function ExceptionHandler($log){
	return function (exception, cause) {
		$log.debug.apply($log, arguments);
	};
};

