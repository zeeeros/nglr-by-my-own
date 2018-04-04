var logsAndExceptionModule = angular.module('myApp');

logsAndExceptionController.$inject = ['$scope','$log'];
logsAndExceptionModule.controller('logsAndExceptionController',logsAndExceptionController);


function logsAndExceptionController($scope,$log) {
	$log.log('Log');
	$log.info('Info');
	$log.warn('Advertencia');
	$log.error('Error');
	$log.debug('Debug');

	/*recordar que se creo un servicio factory (Se instancia el objeto al iniciar la aplicacion) 
	para sobreescribir la excepcion y que los errores se conviertan en debug.
	
	Si se comenta el servicio en el html, se puede ver en consola que se vuelvnete a pintar los
	erorres normalmente*/
	throw new Error('Error grave.');
};