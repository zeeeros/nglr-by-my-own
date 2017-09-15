var anchorScrollModule = angular.module('myApp');

anchorScrollController.$inject = ['$scope', '$anchorScroll'];
anchorScrollModule.controller('anchorScrollController',anchorScrollController);

anchorScrollConIdController.$inject = ['$scope', '$anchorScroll', '$location'];
anchorScrollModule.controller('anchorScrollConIdController',anchorScrollConIdController);

function anchorScrollController($scope,$anchorScroll) {
/*funcion anonima directa 
$scope.irA = function (id) {
 var nuevaId = 'contenido' + id;
 $anchorScroll(nuevaId);
};*/

/*  funcion anonima con variable
var irAlId =function (id) {
 var nuevaId = 'contenido' + id;
 $anchorScroll(nuevaId);
 };

 $scope.irA = irAlId;*/

 /*funcion nombrada*/
 function irAlId(id) {
 	var nuevaId = 'contenido' + id;
 	$anchorScroll(nuevaId);
 };

 $scope.irA = irAlId;
};

/*Hay que tener en cuenta que el servicio $anchorScrol en el controlador anterior no 
reflejara la id en la dirección.
Si necesitamos reflejar el id en la dirección para que esta posición pueda ser guardada
como marcador, podemos inyectar el servicio $location y utilizar su método hash para
que este refleje la posición en la dirección del navegador. Una vez utilizado el servicio
location, no es necesario pasar la id al servicio anchorScroll ya que este navegara hacia la
nueva posición gracias a la dirección.*/
function anchorScrollConIdController($scope,$anchorScroll,$location) {
	$scope.irA = function (id) {
		var nuevaId = 'contenido' + id;
		$location.hash(nuevaId);
		$anchorScroll();

	};
};