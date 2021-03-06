var playlistModule = angular.module('myApp');

/*nota actual: todos los tipos de servicios son singleton segun el curso online... */


/*Declarando un servicio por medio de un factory, es un singleton, cualquier cambio en el 
modelo, se propaga por todos los controladores que tengan injectado el servicio playListFactory

Se usa cuando se quiere contruir un objeto, luego se invoca.*/
playlistModule.factory('playListFactory', [function () {
	var playlist = [
	'Factory',
	'The Miracle (Of Joey Ramone)',
	'Raised By Wolves',
	'Every Breaking Wave',
	'Cedarwood Road',
	'California (There Is No End to Love)',
	'Sleep Like a Baby Tonight',
	'Song for Someone',
	'This Is Where You Can Reach Me Now',
	'Iris (Hold Me Close)',
	'The Troubles',
	'Volcano'
	];
	var listar = function(){
		return playlist;
	};
	var borrar = function(id){
		playlist.splice(id,1);
	};
	return {
		listar: listar,
		borrar: borrar
	};
}]);

/*Declarando con  el metodo service, esta forma no devuelve ningún objeto y se instacia con un new.

  Se usa cuando se tenga el concepto de clase y se puede llamar como contructor y se exponene los
  métodos públicos como <<this>>.
*/
playlistModule.service('playListService', [function () {
	/*esta lista es privada y no se puede acceder desde afuera*/
	var playList = [
	'Services',
	'The Miracle (Of Joey Ramone)',
	'Raised By Wolves',
	'Every Breaking Wave',
	'Cedarwood Road',
	'California (There Is No End to Love)',
	'Sleep Like a Baby Tonight',
	'Song for Someone',
	'This Is Where You Can Reach Me Now',
	'Iris (Hold Me Close)',
	'The Troubles',
	'Volcano'
	];
	/*lo que se declara con this, se pueden ver desde afuera por medio de la instancia */
	this.listar = function(){
		return playList;
	};
	this.borrar = function(id){
		playList.splice(id,1);
	};
}]);

/*Lo que hace diferente este a los dos anteriores es que los provider
permiten ser configurados en el momento en que se está configurando la aplicación.
Mediante el método config del módulo podremos pre configurar el servicio antes de
que este sea inyectado, esto lo haremos en la carpeta App/js/Config/Playlist.js

Son los mas importantes porque servicios como $http, $log son servicios hechos del
tipo provider, es como una mezcla de los dos anteriores.

Nota: el servicio no será nombrado <<PlaylistProvider>>, solo lo llamamos <<Playlist>>
porque AngularJS cuando ve la palabra <<Provider>> detrás de un servicio automáticamente 
busca el servicio con el nombre que precede la palabra provider e inyecta el provider de 
ese servicio en vez de inyectar el $get. De esta forma tendremos acceso a los métodos 
expuestos por el servicio para su configuración.

*/
playlistModule.provider('Playlist', [function () {
	var playlist = [
	'Provider',
	'The Miracle (Of Joey Ramone)',
	'Raised By Wolves',
	'Every Breaking Wave'
	];
	var listar = function(){
		return playlist;
	};
	var borrar = function(id){
		playlist.splice(id,1);
	};
	return {
		/*esto es como un set*/
		agregar: function(data){
			playlist = playlist.concat(data);
		},
		$get: function(){
			return {
				listar: listar,
				borrar: borrar
			};
		}
	}}]);