/*"use strict"; no me ha funcionado aca, pero en la vista, donde declaro
 ng-app se coloca para indicar que no se deben permitir inyecciones 
 implicitas, o sea, o se usa el arreglo o la expresion $inject

Nota: el nombre de la funcion, la variable de injeccion y del controller 
debe ser exacto, sino, no se va a registrar el controlador.*/
var playListModule = angular.module('myApp');

function playListFactoryController($scope, playListFactory) {
	$scope.playlist = playListFactory.listar();
};

var playListServiceController= function($scope, playListService) {
	$scope.playList = playListService.listar();
	$scope.borrar = function(id){playListService.borrar(id);};
};

var playListProviderController= function($scope, Playlist) {
	$scope.playList = Playlist.listar();
	$scope.borrar = function(id){Playlist.borrar(id);};
};

playListFactoryController.$inject = ['$scope', 'playListFactory'];
playListServiceController.$inject  = ['$scope', 'playListService'];
playListProviderController.$inject = ['$scope', 'Playlist'];



playListModule.controller('playListFactoryController',playListFactoryController);
playListModule.controller('playListServiceController',playListServiceController);
playListModule.controller('playListProviderController',playListProviderController);


/* esta es la manera directa pero que es dificil de entender, esto se llama: 
Inline Array Annotation, que es la que recomienda la gente de angular.

angular.module('myApp')
.controller('playlistCtrl', ['$scope', 'Playlist',
	function ($scope, Playlist) {
		$scope.playlist = Playlist.listar();
	}]);*/