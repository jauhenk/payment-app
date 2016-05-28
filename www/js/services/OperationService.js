var services = services || angular.module('services', []);

angular.module('services').factory('OperationService', ['$http', function($http) {

	return {
        // call to get all operations
        getByAgent : function(id) {
            var url = '/api/operationsbyagent/ '+ id;
            return $http.get(url);
        },
        get : function(id) {
            var url = '/api/operations';
            if (id) {
                url += '/' + id;
            }
            return $http.get(url);
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new opetation
        create : function(opetation) {
            return $http.post('/api/operations', opetation);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/operations/' + id);
        }
    };

}]);