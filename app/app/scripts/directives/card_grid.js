'use strict';

angular.module('planningPoker.Directives.CardGrid', [])
    .directive('pkCardGrid', [function() {
        return {
          controller:'cardGrid',
          controllerAs:'grid',
          restrict: 'E',
          templateUrl: 'views/partials/card_grid.html'
        };
    }]);
