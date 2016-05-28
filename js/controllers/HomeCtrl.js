var controllers = controllers || angular.module('controllers', []);

controllers.controller('HomeCtrl', ['$scope', '$rootScope', 'OperationService', function($scope, $rootScope, OperationService) {

	$scope.debt = 0;
	$scope.credit = 0;
	$rootScope.hideFooterNav = false;

	OperationService.get().success(function(data) {
		var sumByAgent = {};
		var debt = 0;
		var credit = 0;

		data.forEach(function(operation) {
			var unp = operation.unpId;
			if (!sumByAgent[unp]) {
				sumByAgent[unp] = 0;
			}

			sumByAgent[unp] += (operation.type === 1)? operation.sum : -operation.sum;
		});

		for (var key in sumByAgent) {
			var val = sumByAgent[key];
			if (val > 0) {
				debt += val;
			} else {
				credit += val;
			}
		}

		$scope.balanse = debt + credit;
		$scope.debt = debt;
		$scope.credit = credit * (-1);

	});

}]);