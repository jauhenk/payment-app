var controllers = controllers || angular.module('controllers', []);

controllers.controller('AgentsCtrl', ['$scope', '$rootScope', 'AgentService', 'OperationService',
	function($scope, $rootScope, AgentService, OperationService) {

		$rootScope.hideFooterNav = false;

		AgentService.get().success(function(agents) {
			agents.forEach(function(agent) {
				var unpId = agent.unpId;
				OperationService.getByAgent(unpId).success(function(operations) {
					var sum = 0;
					operations.forEach(function(operation) {
						sum += (operation.type === 1)? operation.sum : -operation.sum
					});
					agent.sum = sum;
				});
			});
			$scope.agents = agents;
		});

	}
]);