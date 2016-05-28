var controllers = controllers || angular.module('controllers', []);

controllers.controller('OperationCtrl', ['$scope', '$rootScope', '$routeParams', 'AgentService', 'OperationService',
	function($scope, $rootScope, $routeParams, AgentService, OperationService) {

		var operationId = $routeParams.operationId;
		OperationService.get(operationId).success(function(operation) {
			operation = operation[0];
			AgentService.get(operation.unpId).success(function(agent) {
				$scope.agent = agent[0];
			});
			$scope.operation = operation;
		});

		$rootScope.nav = {
			agents: false,
			operations: true
		};
	}
]);