/*este decorator agrega al servicio PlayList el atributo texto con una 
cadena separada por comas de la lista de canciones*/
angular.module('myApp').config(['$provide', function ($provide) {
	$provide.decorator('playListService', ['$delegate', function($delegate) {
		$delegate.texto = function(){
			return $delegate.listar().join(', ');
		};
		return $delegate;
	}]);
}]);