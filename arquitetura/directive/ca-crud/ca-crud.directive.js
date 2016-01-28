(function(){
    'use strict';

    angular.module('delta.directive')
        .directive('caCrud', caCrud);

    function caCrud(AlertService){
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
            scope.onSalvar = onSalvar;
            scope.onLimpar = onLimpar;
            function onSalvar(){
                setarTouchedNosInputs();
                if(scope.caFormCrud.$invalid){
                    AlertService.showError('Verifique os campos antes de salvar');
                    return;
                }
                scope.salvar();
            }
            function onLimpar(){
                scope.limpar();
                setarUntouchedNosInputs();
            }
            function setarTouchedNosInputs(){
                angular.forEach(scope.caFormCrud.$error, function(error){
                    angular.forEach(error, function(field){
                        field.$setTouched();
                    });
                });
            }
            function setarUntouchedNosInputs(){
                angular.forEach(scope.caFormCrud.$error, function(error){
                    angular.forEach(error, function(field){
                        field.$setUntouched();
                    });
                });
            }
        }
    }
})();