angular
    .module('plunker')
    .run(function ($state, $rootScope, authService) {
        $rootScope.$state = $state;
        authService.setUserFromCredential();
    });