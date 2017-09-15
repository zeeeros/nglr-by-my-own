var logsAndExceptionModule = angular.module('myApp');

logsAndExceptionController.$inject = ['$scope','$log'];
logsAndExceptionModule.controller('logsAndExceptionController',logsAndExceptionController);


function logsAndExceptionController($scope,$log) {
	$log.log('Log');
	$log.info('Info');
	$log.warn('Advertencia');
	$log.error('Error');
	$log.debug('Debug');

	/*recordar que se creo un servixcio factory para sobreescribir la excepcion 
	y que los errores fueran debug.*/
	throw new Error('Error grave.');
};