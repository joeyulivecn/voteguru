/**
 * Created by sohamchakraborty on 10/13/15.
 */
(function () {
    'use strict';

    angular
        .module('plunker')
        .controller('navbarController', navbarController);


    function navbarController(voteGuruService, navbarService, authService, $translate) {
        var vm = this;

        vm.activate = activate;

        vm.user = {};
        vm.showSettingsOrLogout = showSettingsOrLogout;
        vm.showLogin = showLogin;
        vm.showSignup = showSignup;
        vm.logout = logout;
        vm.lang = 'Chinese';
        vm.switchLanguage = switchLanguage;

        activate();

        function activate() {
            console.log("navbar controller activated");
            vm.user = voteGuruService.getUser();
            // just getting user info
        }

        function switchLanguage(lang) {
            if (lang === 'zh-cn') {
                vm.lang = 'Chinese';
            } else if (lang === 'en-us') {
                vm.lang = 'English';
            } else {
                throw new Error('Should not go here');
            }
            $translate.use(lang);
        }

        function logout() {
            vm.user = {};
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
