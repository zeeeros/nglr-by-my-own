/*

ver: pág. 65 y 66
también revisar:  https://blog.mastykarz.nl/tips-improve-performance-angularjs-applications/**/

var compileModule = angular.module('myApp');

compileModule.config(['$compileProvider', configureModule]);

function configureModule($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
}

