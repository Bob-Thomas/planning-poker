'use strict';

angular.module('planningPoker.Controllers.ActionBar', [])
    .controller('actionBarCtrl', ['$rootScope', function($rootScope) {
        var vm = this;

        vm.openNav = function() {
            $rootScope.$broadcast('toggle-nav');
        };
    }]);
