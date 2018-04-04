/*este decorator agrega al servicio PlayList el atributo texto con una 
cadena separada por comas de la lista de canciones*/
var app = angular.module('myApp');
app.config(['$provide', function ($provide) {
	$provide.decorator('playListService', ['$delegate', function ($delegate) {
		$delegate.listToString = function () {
			return $delegate.listar().join(', ');
		};
		return $delegate;
	}]);
}]);

/*este decorator modifica el formato de nivel debug del log, par aver su funcionamiento
se inyectó el servicio $log en el controlador del decorator. */
app.config(['$provide', function ($provide) {
	$provide.decorator('$log', ['$delegate', function ($delegate) {
		// Save the original $log.debug()
		var debugFn = $delegate.debug;
		$delegate.debug = function () {
			var args = [].slice.call(arguments),
				now = new Date().toString();
			// Prepend timestamp
			args[0] = [now, ': ', args[0]].join('');
			// Call the original with the output prepended with formatted timestamp
			debugFn.apply(null, args)
		};
		return $delegate;
	}]);
}]);

