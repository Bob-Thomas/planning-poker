'use strict';
angular.module('planningPoker.Controllers.CardGrid', [])
  .controller('cardGrid', ['$scope', function($scope) {
    var vm = this;
    vm.decks = [
      {
        title:'Binary',
        cards:[1, 2, 4, 8, 16, 32, 64, 128],
        active:true
      },
      {
        title:'Fibonacci',
        cards:[0, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89],
        active:false
      },
      {
        title:'Playing cards',
        cards: ['Ace', 2, 3, 5, 6, 'KING'],
        active:false
      }

    ];

    function updateGrid() {
      vm.selected = _.filter(vm.decks, function(i) { return i.active;})[0];
      vm.gridHeight = Math.ceil(vm.selected.cards.length/4)*100;
    }

    $scope.$watch(function () {
      return vm.decks; // `this` IS the `this` above!!
    }, function (newVal, oldVal) {
      if(newVal !== oldVal) {
        updateGrid();
      }
    }, true);

    //init

    updateGrid();
  }]);
