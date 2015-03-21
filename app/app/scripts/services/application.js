'use strict';

angular.module('planningPoker.Services.Application', [])
    .factory('application', ['$rootScope', function($rootScope) {
        $rootScope.navOpen = false;

        function startListeners() {
            $rootScope.$on('toggle-nav', function() {
                $rootScope.navOpen = !$rootScope.navOpen;
            });
        }

        return {
            startListeners: startListeners
        };
    }]);
