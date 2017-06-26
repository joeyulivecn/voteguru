/**
 * Created by sohamchakraborty on 10/13/15.
 */
(function (){
    'use strict';

    angular
        .module('plunker')
        .controller('navbarController', navbarController);


    function navbarController(voteGuruService, navbarService, authService) {
        var vm = this;

        vm.activate = activate;

        vm.user = {};
        vm.showSettingsOrLogout = showSettingsOrLogout;
        vm.showLogin = showLogin;
        vm.showSignup = showSignup;
        vm.logout = logout;

        activate();

        function activate(){
            console.log("navbar controller activated");
            vm.user = voteGuruService.getUser();
            // just getting user info
        }

        function logout(){
            authService.clearCredential();
        }

        function showLogin() {
            return navbarService.showLogin();
        }

        function showSignup() {
            return navbarService.showSignup();
        }

        function showSettingsOrLogout() {
            return navbarService.showSettingsOrLogout();
        }
    }

})();
