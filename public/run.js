angular
    .module('plunker')
    .run(function ($state, $rootScope, $cookieStore, $http) {
        $rootScope.$state = $state;
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authData;
        }

        $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {
            if (toState.name === 'signup'){
                return;
            }
        
            var notLoggedIn = !$rootScope.globals.currentUser;

            if (notLoggedIn && toState.name !== 'login') {
                event.preventDefault();
                $state.go('login');
            }
        });
    })