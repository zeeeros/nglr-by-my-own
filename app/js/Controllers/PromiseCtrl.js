 /*Nota: Hay que tener en cuenta que toda esta lógica está escrita en el controlador
para propósitos de ejemplo, en una aplicación real estos métodos de chequeo deben ser
extraídos a su propio servicio ya que el controlador no necesita saber cómo es que se
comprueba el estado del servidor sino cual es el estado de los servicios para mostrarlos
al usuario
*/

/* asi esta en modo implicito y no corre con el ng-strict, lo 
separé con el inject de servicio arriba.

app.controller('SomePromisesCtrl', function ($q) {
	var promesa1 = $q.defer();
	var promesa2 = $q.defer();
	var promesa3 = $q.defer();

	promesa1.promise.then(completado);
	promesa2.promise.then(completado);
	promesa3.promise.then(completado);

	function completado(data) {
		console.log(data);
	}

	setTimeout(function () {
		promesa1.resolve('Promesa #1 resuelta');
	}, Math.random() * 1000);

	setTimeout(function () {

		promesa2.resolve('Promesa #2 resuelta');
	}, Math.random() * 1000);

	setTimeout(function () {
		promesa3.resolve('Promesa #3 resuelta');
	}, Math.random() * 1000);
});*/

var app=angular.module('myApp');
SomePromisesCtrl.$inject = ['$q'];
app.controller('SomePromisesCtrl',SomePromisesCtrl);

/*Cuando se llama a este controlador, imprime por consola, no se
envia nada a la interfaz*/
function SomePromisesCtrl($q) {
	console.log("Ejemplo basico del controlador SomePromisesCtrl");

	var promesa1 = $q.defer();
	var promesa2 = $q.defer();
	var promesa3 = $q.defer();

	setTimeout(function () {
		promesa1.resolve('Promesa #1 resuelta');
	}, Math.random() * 1000);

	setTimeout(function () {

		promesa2.resolve('Promesa #2 resuelta');
	}, Math.random() * 1000);

	setTimeout(function () {
		promesa3.resolve('Promesa #3 resuelta');
	}, Math.random() * 1000);

	


	function completado(result) {
		console.log(result);
	}

	/*asi se ejecutan las promesas por separado*/
	promesa1.promise.then(completado);
	promesa2.promise.then(completado);
	promesa3.promise.then(completado);

	/*Asi se ejecutan las promesas en conjunto y cuando se terminan todas 
	"de forma correcta", se hace una accion definida. En esta ocasión cuando 
	ejecutamos el método then y recibimos los datos, estos serán un arreglo con el 
	resultado de cada una de las promesas. Es importante mencionar que el
	orden en que vienen los resultados de las promesas es el mismo en que le pasamos las
	promesas a la función all, sin importar el orden en que estas hayan sido resueltas.*/
	
	/*se va a comentar esto para que se vea el ejemplo sencillo de promesas, en el
	controlador de abajo se ejecutara el ejemplo de promesas en conjunto.
	var todas = $q.all([promesa1.promise, promesa2.promise, promesa3.promise]);

	todas.then(function (result) {
		console.log(result);
	});
	*/
};






app.controller('PromiseCtrl', ['$scope', '$q', function ($scope, $q) {

	/*************** Declaracion de funciones del controlador **************/

 	/*A los dos segundos devuelve: Online, este mensaje aparece a los 2 
 	segundos*/
 	var checkServer = function(){
 		var def = $q.defer();

 		/*setTimeOut es una funcion de javascript, puede recibir una funcion
		un una sentencia simple.
		setTimeout(function () {
			console.log('con funcion');
		}, Math.random() * 6000);

		setTimeout(console.log('Sin funcion'), 3000);*/

		setTimeout(function(){
			def.resolve('Server Online');
		}, 2000);

		return def.promise;
	};

 	/*Si un numero aleatorio es mayor a 50, devuelve: Online, sino, indica 
 	que no está disponible, este mensaje aparece a los 5 segundos*/
 	var checkHTTP = function(){
 		var def = $q.defer();

 		setTimeout(function(){
 			if ( Math.floor(Math.random()*100) > 20 ) {
 				def.resolve('Http Protocol Online');
 			} else {
 				def.reject('El servicio no está disponible');
 			};
 		}, 5000);

 		return def.promise;
 	};

 	/*Si un numero aleatorio es mayor a 50, devuelve: Online, sino, indica 
 	que no está disponible. este mensaje aparece a los 3 segundos*/
 	var checkDb = function(){
 		var def = $q.defer();

 		setTimeout(function(){
 			if ( Math.floor(Math.random()*100) > 20 ) {
 				def.resolve('BD Online');
 			} else {
 				def.reject('El servicio no está disponible');
 			};
 		}, 3000);

 		return def.promise;
 	};

 	/*Si un numero aleatorio es mayor a 50, devuelve: Las conexiones 
 	seguras están habilitadas, sino, indica  que estan Desactivadas.
 	este mensaje aparece a los 4 segundos
 	*/
 	var checkSsl = function(){
 		var def = $q.defer();

 		setTimeout(function(){
 			def.notify('Comprobación de conexión segura iniciada.');
 			if ( Math.floor(Math.random()*100) > 20 ) {
 				def.notify('Las conexiones seguras están habilitadas');				
 				def.resolve('SSL Activo');
 			} else {
 				def.notify('Las conexiones seguras están desactivadas');
 				def.reject('Desactivadas');
 			};
 		}, 4000);

 		return def.promise;
 	};
 	/****************** Fin de funciones del controlador *******************/

 	checkServer().then(function(result){
 		$scope.status = result;
 	});

 	checkHTTP().then(function(result){
 		$scope.http = result;
 	}, function(err){
 		$scope.http = err;
 	});

 	checkDb().then(function(result){
 		$scope.db = result;
 	}, function(err){
 		$scope.db = err;
 	});

 	/* El método then recibe tres funciones como parámetros, el primero se 
 	ejecutará si la promesa se ha resuelto, el segundo si ha sido rechazada 
 	y la tercera es una función que se ejecutará tantas veces como se haya 
 	usado el método notify del objeto defer  */

 	checkSsl().then(function(result){
 		$scope.ssl = result;
 	}, function(err){
 		$scope.ssl = err;
 	}, function(notif){
 		console.log(notif);
 	});

 	
	/*Asi se ejecutan las promesas en conjunto y cuando se terminan todas 
	"de forma correcta", se realiza una accion predeterminanda.
	 En esta ocasión cuando ejecutamos el método then y recibimos los datos, estos serán un
	arreglo con el resultado de cada una de las promesas. Es importante mencionar que el
	orden en que vienen los resultados de las promesas es el mismo en que le pasamos las
	promesas a la función all, sin importar el orden en que estas hayan sido resueltas.*/
	var todas = $q.all([checkServer(), checkHTTP(), checkDb(), checkSsl()]);

	todas.then(function (result) {
		console.log(`Ejemplo basico del controlador PromiseCtrl, 
este resultado se muestra una vez se ejecutan todas
			las promesas de forma correcta:`);
		console.log(result);
	});

}]);






constructorPromisesCtrl.$inject = ['$scope','$q'];
app.controller('constructorPromisesCtrl',constructorPromisesCtrl);
var i=0;
var j=0;

function constructorPromisesCtrl($scope,$q) {

	var resultadoResuelto = function (result){
		$scope.resuelta = result;
	};

	var resultadoRechazado = function (error){
		$scope.rechazada = error;
	};

	var resultadoNotificado = function (notificacion){
		console.log(notificacion);
	};

	function tarea(comprobar){
		var dfd = $q.defer();
		setTimeout(function() {
			if (!comprobar) {
				dfd.notify('La promesa fue resuelta');
				dfd.resolve(`Promesa resuelta ${i++}`);			
			} else {
				dfd.notify('La promesa fue rechazada');
				dfd.reject(`Promesa rechazada ${j++}`);
			}
		}, 1000);
		return dfd.promise;
	};

	/*	var  ejecutar = function (comprobar){
		tarea(comprobar).then(resultadoResuelto, resultadoRechazado, resultadoNotificado);
	};
	*/

 	/* Para convertir la promesa anterior a la nueva vía para crear las promesas, solo 
 	necesitaremos hacer algunos cambios en la función tarea que creamos anteriormente. 
 	Para comenzar ya no tendremos que crear un objeto defer sino devolver el resultado 
 	del	constructor del servicio $q. Al constructor le pasamos como parámetro una función
	anónima que recibirá dos parámetros, estos son dos funciones, resolve que la utilizaremos
	para resolver las promesas y reject que utilizaremos para rechazarlas. De esta forma el
	nuevo código quedaría como aparece a continuación.

	Como habrás podido comprobar, el resultado es el mismo, pero esta nueva versión está
	más acorde a la nueva interfaz de promesas que trae la nueva versión de Javascript*/
	function tareaConstructor(comprobar) {
		return $q(function (reject, resolve, notify) {
			setTimeout(function () {
				if (!comprobar) {
					/*notify('La promesa fue ejecutada con exito');*/
					resolve(`Promesa resuelta ${i++}`);					
				} else {
					/*notify('La promesa fue rechazada');*/
					reject(`Promesa rechazada ${j++}`);
				}
			}, 1000);
		});
	}


	/*Note: progress/notify callbacks are not currently supported via the ES6-style interface.*/
	var  ejecutar = function (comprobar){
		tareaConstructor(comprobar).then(resultadoResuelto,resultadoRechazado/*,resultadoNotificado*/);
	};

	$scope.accion = ejecutar;
};


