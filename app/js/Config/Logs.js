var logModule = angular.module('myApp');
Log.$inject = ['$logProvider'];

logModule.config(Log);

function Log($logProvider) {
	$logProvider.debugEnabled(true);
};