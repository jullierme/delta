(function () {
    'use strict';

    angular
        .module('delta.controller')
        .controller('IndexController5', IndexController5);

    /* @ngInject */
    function IndexController5($http) {
        var vm = this;
        vm.carrgarListaDeDados = carrgarListaDeDados;
        vm.listaDeDados = [];

        vm.gridOptions = {
            data:'vm.listaDeDados'
        };

        function carrgarListaDeDados(){
            var promisse = $http.post('http://jsonplaceholder.typicode.com/posts/');

            promisse.then(
                carregarResult, carregarFault
            );
        }
        function carregarResult(response){
            vm.listaDeDados = response.data;
        }
        function carregarFault(rejection){

        }

    }

})();

