angular.module('planningPoker.Directives.SideMenu', [])
    .directive('pkSideMenu',['$rootScope', function($rootScope) {
        return {
            restrict: 'E',
            templateUrl: '/views/partials/side_menu.html',
            link: function(scope, el, attrs) {
                var menu = angular.element(document.getElementById('side-menu'));
                var navBarToggle = angular.element(document.querySelectorAll('.navbar-toggle')[0]);
                scope.$on('toggle-nav', function() {
                    menu.toggleClass('side-menu-open');
                    navBarToggle.toggleClass('collapsed');
                })
            }
        };
    }])
