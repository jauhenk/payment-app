var controllers = controllers || angular.module('controllers', []);
controllers.controller('MainCtrl', ['$scope', '$rootScope', function($scope, $rootScope) {
	$scope.hideNav = function () {
		$('#mainNav').collapse('hide');
	}
}]);