var services = services || angular.module('services', []);

angular.module('services').factory('AgentService', ['$http', function($http) {

	return {
        // call to get all agents
        get : function(id) {
            var url = '/api/agents';
            if (id) {
                url += '/' + id;
            }
            return $http.get(url);
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new agent
        create : function(agent) {
            return $http.post('/api/agents', agent);
        },

        // call to DELETE a agent
        delete : function(id) {
            return $http.delete('/api/agents/' + id);
        }
    };

}]);