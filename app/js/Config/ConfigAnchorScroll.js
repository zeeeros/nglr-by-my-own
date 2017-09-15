/* asi se configura un provider, se ejecuta con el metodo config, 
esto se usa en el ejemplo 9 que tiene su propio archivo en la carpeta config
pero se deja aca para que se pueda comparar con el metodo run.

ver paginas 34 y 33 de la guia

angular.module('myApp').
 config(['PlaylistProvider', function (PlaylistProvider) {
 	var canciones = [
 	'Las canciones de abajo se agregaron desde el arranque del modilo desde el metodo config',
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
 }]);*/

/*Este servicio tiene una propiedad que podemos utilizar para dejar un margen superior
cuando hacemos el desplazamiento. Esta propiedad la podremos configurar en el bloque
run de la aplicación para de esta forma este definida para toda la aplicación
 
recordar que esta forma es implicita, y con la propiedad strict de la pagina no se permite
 anchorScrollConfigModule=angular.module('myApp');
 anchorScrollConfigModule.run(function ($anchorScroll) {
 	$anchorScroll.yOffset = 50;
 });
*/

 anchorScrollConfigModule=angular.module('myApp');
 anchorScrollConfigModule.run(['$anchorScroll',function ($anchorScroll) {
 	$anchorScroll.yOffset = 10; /*10 px de margwen superior*/
 }]);