angular.module('planningPoker.Directives.CardGrid', [])
    .directive('pkCardGrid', ['$swipe', function($swipe) {
        return {
            restrict: 'E',
            templateUrl:'views/partials/card_grid.html',
            link: function(scope, ele, attrs, ctrl) {
                var decks = document.querySelectorAll('.deck');
                scope.current = angular.element(
                    _.filter(decks, function(item, index) {
                        if(item.classList.contains('active')) {
                            scope.index = index;
                        }
                        return item.classList.contains('active');
                        })
                );

                scope.next = function() {
                    console.log(scope.current)
                    scope.current.toggleClass('active')
                    if(scope.index === decks.length-1) {
                        scope.index = 0;;
                    } else {
                        scope.index += 1;
                    }
                    console.log(scope.index)
                    scope.current = angular.element(decks[scope.index]);
                    scope.current.toggleClass('active')
                }

                scope.previous = function() {
                    console.log('called')
                    scope.current.toggleClass('active')
                    if(scope.index === 0) {
                        scope.index = decks.length-1;
                    } else {
                        scope.index -= 1;
                    }
                    console.log(scope.index)
                    scope.current = angular.element(decks[scope.index]);
                    scope.current.toggleClass('active')
                }
            }
        }
    }])
