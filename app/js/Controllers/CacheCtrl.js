var cacheModule = angular.module('myApp');

PrimerCtrl.$inject = ['$cacheFactory'];
cacheModule.controller('PrimerCtrl',PrimerCtrl);

SegundoCtrl.$inject = ['$cacheFactory'];
cacheModule.controller('SegundoCtrl',SegundoCtrl);

function PrimerCtrl($cacheFactory) {
	var vm = this;
	var cachePrincipal = $cacheFactory('cachePrincipal');
	console.log($cacheFactory.info());

	vm.guardar = function () {
		cachePrincipal.put('mensaje', vm.texto);
	}
};

function SegundoCtrl($cacheFactory) {
	var vm = this;
	var cachePrincipal = $cacheFactory.get('cachePrincipal');
	console.log($cacheFactory.info());

	vm.imprimir = function () {
		console.log(cachePrincipal.get('mensaje'));
	}
};