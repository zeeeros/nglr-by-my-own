var playlistModule = angular.module('myApp');

function playlistExtendCtrl($scope, playListFactory) {
	$scope.playlist = playListFactory.listar();
	$scope.borrar = function(id){playListFactory.borrar(id);};
};
playlistExtendCtrl.$inject = ['$scope', 'playListFactory'];
playListModule.controller('playlistExtendCtrl',playlistExtendCtrl);




/*angular.module('myApp')
.controller('playlistExtendCtrl', ['$scope', 'Playlist',
	function ($scope, Playlist) {
		$scope.playlist = Playlist.listar();
	}]);*/