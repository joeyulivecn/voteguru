(function () {
    'use strict';

    angular
        .module('plunker')
        .service('authService', ['$localStorage', '$rootScope', '$http', 'voteGuruService',
            function ($localStorage, $rootScope, $http, voteGuruService) {
                return {
                    isNotLogOn: function () {
                        return !$localStorage.token;
                    },
                    generateAuthData: function (username, password) {
                        var authData = Base64.encode(username + ':' + password);
                        return authData;
                    },
                    getUserFromAuthData: function (authData) {
                        var decodedAuthData = '';
                    },
                    setCredential: function (token) {
                        $localStorage.token = token;
                        var user = jwt_decode(token);
                        voteGuruService.setUser(user);
                    },
                    setUserFromCredential: function () {
                        var token = $localStorage.token;
                        if (token) {
                            var user = jwt_decode(token);
                            voteGuruService.setUser(user);
                        }
                    },
                    clearCredential: function () {
                        $localStorage.token = null;
                        voteGuruService.setUser({});
                    }
                };
            }]);
})();