 angular.module('myApp').
 config(['PlaylistProvider', function (PlaylistProvider) {
 	var canciones = [
 	'Las canciones de abajo se agregaron desde el arranque del modulo desde el metodo config',
 	'Cedarwood Road',
 	'California (There Is No End to Love)',
 	'Sleep Like a Baby Tonight',
 	'Song for Someone',
 	'This Is Where You Can Reach Me Now',
 	'Iris (Hold Me Close)',
 	'The Troubles',
 	'Volcano'
 	];

 	PlaylistProvider.agregar(canciones);
 }]);