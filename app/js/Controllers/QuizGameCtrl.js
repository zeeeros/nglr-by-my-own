
var quizGameModule = angular.module('myApp');

/*Recordar: Si la funcion es declarada asi, el compilador necesita que 
esta esté primero antes de declarar el controlador y las inyecciones.*/
var ActividadController = function ($scope, $timeout) {
    $scope.actividad = actividad;  
    $scope.game      = game;  
    $scope.game.init(actividad);  

    $scope.tick = function () {  
        $scope.game.descrementTimer();  

        if (! $scope.game.isActive()){  
            $timeout.cancel($scope.timerID);  
        } else {  
            $scope.timerID  = $timeout($scope.tick,1000);  
        }  
    };  

    $scope.timerID   = $timeout($scope.tick,1000);  
};

ActividadController.$inject = ['$scope','$timeout','$interval'];
quizGameModule.controller('ActividadController',ActividadController);