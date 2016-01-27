(function(){
    'use strict';

    angular.module('delta.directive')
        .directive('caCrud', caCrud);

    function caCrud(){
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-crud/ca-crud.directive.html',
            transclude:true,
            scope:{
                titulo:'@',
                salvar:'&',
                excluir:'&',
                limpar:'&'
            }
        };
        function link(scope, element, attrs){
        }
    }
})();