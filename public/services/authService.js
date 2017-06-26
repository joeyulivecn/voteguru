(function () {
    'use strict';

    angular
        .module('plunker')
        .service('authService', ['$localStorage', '$rootScope', '$http', function ($localStorage, $rootScope, $http) {
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
                },
                getUserFromCredential: function () {

                },
                clearCredential: function () {
                    $localStorage.token = null;
                }
            };
        }]);
})();