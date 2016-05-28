var controllers = controllers || angular.module('controllers', []);

controllers.controller('newOperatonCtrl', ['$scope', '$rootScope', '$location', 'AgentService', 'OperationService',
	function($scope, $rootScope, $location, AgentService, OperationService) {


		AgentService.get().success(function(agents) {
			$scope.agents = agents;
		});
		
		$rootScope.hideFooterNav = true;

		$scope.create = function () {
			var model = $scope.operation;
			model.date = new Date().getTime();
			model.operationId = new Date().getTime();
			OperationService.create(model).success(function() {
				$location.path('/operations/' + model.operationId);
				$rootScope.hideFooterNav = false;
			});
		}

	}
]);