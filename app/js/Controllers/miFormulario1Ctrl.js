 /*
*/
var app=angular.module('myApp');
app.controller('miFormularioCtrl',miFuncionFormularioCtrl);

function miFuncionFormularioCtrl() {
	var vm= this;

	vm.enviar= function(){
		if (vm.miFormulario.$valid){
			console.log(vm.model);
		}
	}
};



