(function(){
    'use strict';

    angular.module('delta')
        .controller('PesquisaPessoaController',PesquisaPessoaController);

    function PesquisaPessoaController($state){
        var vm = this;
        vm.nome = 'Controller da pesquisa carregado';
        vm.redirecionarParaCadastro = redirecionarParaCadastro;


        function redirecionarParaCadastro(){
            $state.go('cadastroPessoa', {id:15});

            outraFuncao();
        }

        function outraFuncao(){

        }
    }
})();