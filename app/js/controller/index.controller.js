(function(){
    'use strict';

    angular.module('delta')
        .controller('IndexController', IndexController);

    /* @ngInject */
    function IndexController(){
        var vm = this;
        vm.nome = 'Jullierme';
        vm.testeFuncao = testeFuncao;

        function testeFuncao(){
            //alert('Olá ' + vm.nome);
        }
    }
})();