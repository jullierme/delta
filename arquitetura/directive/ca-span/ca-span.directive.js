(function(){
    'use strict';

    angular.module('delta.directive')
        .directive('caSpan', caSpan);

    function caSpan(){
        return {
            restrict: 'AE',
            templateUrl: 'arquitetura/directive/ca-span/ca-span.directive.html',
            scope:{
                texto: '@'
            }
        };
    }
})();