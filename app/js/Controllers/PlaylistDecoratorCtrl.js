/*"use strict"; no me ha funcionado aca, pero en la vista, donde declaro
 ng-app se coloca para indicar que no se deben permitir inyecciones 
 implicitas o se usa el arreglo o la expresion $inject

Nota: el nombre de la funcion, la variable de injeccion y del controller 
debe ser exacto, sino, no se va a registrar el controlador.*/
var playListModule = angular.module('myApp');

/*Este es el nuevo servicio (nuestra implmentacion) que inyecta el servicio que ha 
sido decorado*/
var playListServiceController = function ($scope, $log, playListService) {
	$scope.playList = playListService.listar();
	$scope.texto = playListService.listToString();
	$scope.borrar = function (id) {
		playListService.borrar(id);
		$log.info('Borrado sin decorado de log.info');
		$log.debug('Borrado con decorado de log.debug');
	};
};

playListServiceController.$inject = ['$scope','$log', 'playListService'];

playListModule.controller('playListServiceController', playListServiceController);


/* esta es la manera directa pero que es dificil de entender, esto se llama: 
Inline Array Annotation, que es la que recomienda la gente de angular.

angular.module('myApp')
.controller('playlistCtrl', ['$scope', 'Playlist',
	function ($scope, Playlist) {
		$scope.playlist = Playlist.listar();
	}]);*/