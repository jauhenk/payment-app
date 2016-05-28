var controllers = controllers || angular.module('controllers', []);

controllers.controller('newAgentCtrl', ['$scope', '$rootScope', '$location', 'AgentService', 'OperationService',
	function($scope, $rootScope, $location, AgentService, OperationService) {

		$scope.agent = {
			paymentDelay: 30
		};

		$rootScope.hideFooterNav = true;
		
		$scope.create = function () {
			var model = $scope.agent;
			AgentService.create(model).success(function() {
				$location.path('/agents/' + model.unpId);
				$rootScope.hideFooterNav = false;
			});
		}

	}
]);