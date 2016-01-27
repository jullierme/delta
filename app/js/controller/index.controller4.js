(function () {
    'use strict';

    angular
        .module('delta.controller')
        .controller('IndexController4', IndexController4);

    /* @ngInject */
    function IndexController4(AlertService) {
        var vm = this;
        vm.entidade = {};

        vm.salvar = salvar;
        vm.excluir = excluir;
        vm.limpar = limpar;
        vm.testeFuncao = testeFuncao;

        function salvar(){
            AlertService.showSuccess('Salvou registro');
        }

        function excluir(){
            AlertService.showSuccess('Excluiu registro');
        }

        function limpar(){
            vm.entidade = {};
        }

        function testeFuncao(){
            AlertService.showInfo('Disparou metodo');
        }
    }

})();

