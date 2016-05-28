var controllers = controllers || angular.module('controllers', []);

controllers.controller('OperationsCtrl', ['$scope', '$rootScope', 'OperationService',
	function($scope, $rootScope, OperationService) {

		$rootScope.hideFooterNav = false;

		OperationService.get().success(function(operations) {
			$scope.operations = operations;
		});

	}
]);