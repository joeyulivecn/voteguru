angular
    .module('plunker', ['ui.router', 'chart.js', 'ngMessages', 'ngStorage', 'pascalprecht.translate', 'ui.bootstrap'])
    .config(['$translateProvider', '$httpProvider', function ($translateProvider, $httpProvider) {
        var lang = window.localStorage.lang || 'zh-cn';
        $translateProvider.preferredLanguage(lang);
        $translateProvider.useStaticFilesLoader({
            prefix: '/i18n/',
            suffix: '.json'
        });

        $httpProvider.interceptors.push(['$q', '$location', '$localStorage', function ($q, $location, $localStorage) {
            return {
                'request': function (config) {
                    config.headers = config.headers || {};
                    if ($localStorage.token) {
                        config.headers.Authorization = 'Bearer ' + $localStorage.token;
                    }
                    return config;
                },
                'responseError': function (response) {
                    if (response.status === 401 || response.status === 403) {
                        $location.path('/login');
                    }
                    return $q.reject(response);
                }
            };
        }]);
    }]);