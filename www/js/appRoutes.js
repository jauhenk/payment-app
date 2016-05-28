angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'HomeCtrl'
		})
		.when('/agents', {
			templateUrl: 'views/agents.html',
			controller: 'AgentsCtrl'
		})
		.when('/agents/:unpId', {
			templateUrl: 'views/agent.html',
			controller: 'AgentCtrl'
		})
		.when('/operations', {
			templateUrl: 'views/operations.html',
			controller: 'OperationsCtrl'
		})
		.when('/operations/:operationId', {
			templateUrl: 'views/operation.html',
			controller: 'OperationCtrl'
		})
		.when('/new/agent', {
			templateUrl: 'views/newAgent.html',
			controller: 'newAgentCtrl'
		})
		.when('/new/operation', {
			templateUrl: 'views/newOperaton.html',
			controller: 'newOperatonCtrl'
		});

	$locationProvider.html5Mode(true);

}]);