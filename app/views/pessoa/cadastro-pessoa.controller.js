(function(){
    'use strict';

    angular.module('delta.controller')
        .controller('CadastroPessoaController',CadastroPessoaController);

    /* @ngInject */
    function CadastroPessoaController($scope, $stateParams){
        var vm = this;
        vm.nome = 'Valor informado no controller';
        vm.meuId = $stateParams.id;

        vm.testeBroadcastEvent = testeBroadcastEvent;

        iniciar();

        function iniciar(){
            adicionarEventos();
            adicionarEscutaNoNome();
        }

        function adicionarEscutaNoNome(){
            $scope.$watch('vm.nome');
        }

        function adicionarEventos(){
            $scope.$on('testeBroadcastEvent', testeBroadcastEvent);
        }

        function testeBroadcastEvent(event, data){
            var teste = event;
        }
    }
})();