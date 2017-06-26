(function () {
    'use strict';

    angular
        .module('plunker')
        .controller('signupController', signupController);


    function signupController($state, authService, voteGuruService, signupService) {


        var vm = this;

        vm.activate = activate;
        vm.login = login;
        vm.signup = signup;
        vm.userFormData = {};
        vm.closeErrorMessage = closeErrorMessage;


        activate();

        function activate() {
            console.log("sign up controller activated");
            vm.errorMessage = "";
        }

        function closeErrorMessage() {
            vm.errorMessage = "";
        }

        function login() {
            if (signupService.validateForm(vm.loginOrSignupForm) === true) {
                voteGuruService.authenticate(vm.userFormData.username, vm.userFormData.password)
                    .success(function (result) {
                        console.log('authenticate: ', result);
                        if (result.success) {
                            authService.setCredential(result.data);
                            voteGuruService.setshowAllPollsFlag(true);

                            $state.go('myPollsPage');
                        }
                        else {
                            vm.errorMessage = "Username / Password does not exist"
                        }
                    });
            }
            else {
                vm.errorMessage = signupService.getErrorMessage();
            }
        }

        function signup() {
            if (signupService.validateForm(vm.loginOrSignupForm) === true) {
                signupHandler();
            }
            else {
                vm.errorMessage = signupService.getErrorMessage();
            }
        }

        function signupHandler() {
            voteGuruService.checkIfUsernameExists(vm.userFormData.username)
                .success(function (result) {
                    console.log('checkIfUsernameExists:', result);
                    if (result === true) {
                        vm.errorMessage = "Username already exists - Please choose a different name";
                    }
                    else if (result === false) {
                        addUser();
                    } else {
                        vm.errorMessage = result;
                    }
                });

        }

        function addUser() {
            voteGuruService.create(vm.userFormData).success(function (data) {
                vm.userFormData = {};
                $state.go('login');
            });
        }

    }

})(); 