/*pag 62 y 63

aqui se aplico una variable sesion de tipo objeto*/
var timeOutModule = angular.module('myApp');

/*Recordar: Si la funcion es declarada asi, el compilador necesita que 
esta esté primero antes de declarar el controlador y las inyecciones.*/
var timeOutController = function ($scope, $timeout, $interval) {
	var vm = this;
	$scope.tiempo=5;


	var sesion = {
		_sesion:null,
		_conteo:null
	};		

	sesion.cerrar = function(){
		$timeout.cancel(_sesion);
		$interval.cancel(_conteo);
	};


	sesion.crear =function(){
		/*<<sesion>> es el objeto de tipo timeout, se indica que ejecute 
		la función <<verificarExpiracion>> luego de cinco segundos y que 
		se le envien dos parametros.*/
		_sesion = $timeout(verificarExpiracion, 5000, true, 'Andres', 'Mirabal');

		function verificarExpiracion(param1, param2) {
			console.log('Parámetros: ', param1, param2);
			return param1 +' ' + param2+ ', su sesion ha vencido.';
		};

		/*<<sesion>> maneja promesas por lo cual, si se completa
		el timeout, se imprime por consola que ha finalizado.*/
		_sesion.then(function (msg) {
			alert(msg);
		});

		/*Si se cancela el timeout, siempre se arroja una excepcion*/
		_sesion.catch(function () {
			console.log('Sesion  finalizada de forma manual.');		
		});


		/*<<Conteo es un objeto que ejecuta la funcion <<informar>> 5 veces*/
		_conteo = $interval(informar, 1000, $scope.tiempo);

		function informar() {
			$scope.tiempo--;
			console.log('Quedan ' + $scope.tiempo + ' segundos.');
		};

		_conteo.then(function () {
			$interval.cancel(_conteo);	
		});

		$scope.$on('$destroy', function () {
			$interval.cancel(_conteo);
		});
	};

	sesion.crear();


	/*Funcion llamada desde la vista al precionar el boton <<Cancelar>>*/
	vm.salir = function () {

		/*Se le indica al servicio timeout que cancele la ejecucion 
		del objeto <<sesion>>*/
		sesion.cerrar();
	};

	/*Funcion llamada desde la vista al precionar el boton <<Cancelar>>*/
	vm.continuar = function () {

		
		sesion.cerrar();
		$scope.tiempo=5;
		/*Se le indica que vuelva a ejecutarse el contador y que reinicie la sesion*/
		sesion.crear();
	};
};

timeOutController.$inject = ['$scope','$timeout','$interval'];
timeOutModule.controller('timeOutController',timeOutController);