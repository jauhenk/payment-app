var controllers = controllers || angular.module('controllers', []);

controllers.controller('AgentCtrl', ['$scope', '$rootScope', '$routeParams', 'AgentService', 'OperationService',
	function($scope, $rootScope, $routeParams, AgentService, OperationService) {

		var unpId = $routeParams.unpId;
		AgentService.get(unpId).success(function(agent) {
			$scope.agent = agent[0];
		});
		OperationService.getByAgent(unpId).success(function(operations) {
			$scope.operations = operations;
		});
	}
]);