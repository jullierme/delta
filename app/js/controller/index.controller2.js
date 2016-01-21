(function(){
    'use strict';

    angular.module('delta')
        .controller('IndexController2', IndexController2);

    IndexController2.$inject = ['$scope'];

    function IndexController2($scope){
        var vm = this;
        vm.nome = 'Delta';
        vm.myStyle = {};

        $scope.$watch('vm.nome', onChangeNome);

        function onChangeNome(novoValor, valorAntigo){
            if(novoValor === valorAntigo){
                return;
            }

            if(novoValor === 'delta'){
                vm.myStyle.backgroundColor = '#FF0000';
            }
            else{
                vm.myStyle.backgroundColor = 'blue';
            }
        }
    }
})();
