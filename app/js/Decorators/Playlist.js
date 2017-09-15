/*este decorator agrega al servicio PlayList el atributo texto con una 
cadena separada por comas de la lista de canciones*/
var app=angular.module('myApp');
app.config(['$provide', function ($provide) {
	$provide.decorator('playListService', ['$delegate', function($delegate) {
		$delegate.listToString = function(){
			return $delegate.listar().join(', ');
		};
		return $delegate;
	}]);
}]);