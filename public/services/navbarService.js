/**
 * Created by sohamchakraborty on 10/27/15.
 */
(function(){
    'use strict';

    angular
        .module('plunker')
        .factory('navbarService', ['voteGuruService', 'authService', function (voteGuruService, authService){

            return{

                showSignup: function () {
                    if (authService.isNotLogOn()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                showLogin: function () {
                    if (authService.isNotLogOn()) {
                        return true;
                    }
                    else {
                        return false;
                    }
                },
                showSettingsOrLogout: function () {
                    if (authService.isNotLogOn()) {
                        return false;
                    }
                    else {
                        return true;
                    }
                }


            }
        }] );




})();