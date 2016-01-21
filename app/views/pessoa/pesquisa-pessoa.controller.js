(function(){
    'use strict';

    angular.module('delta')
        .controller('PesquisaPessoaController',PesquisaPessoaController);

    /* @ngInject */
    function PesquisaPessoaController($state){
        var vm = this;
        vm.nome = 'Controller da pesquisa carregado';
        vm.redirecionarParaCadastro = redirecionarParaCadastro;

        function redirecionarParaCadastro(){
            $state.go('cadastroPessoa', {id:15});
        }
    }
})();