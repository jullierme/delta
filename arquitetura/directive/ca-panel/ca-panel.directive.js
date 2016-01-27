(function(){
    'use strict';

    angular.module('delta.directive')
        .directive('caPanel', caPanel);

    /* @ngInject */
    function caPanel(){
        return {
            link: link,
            restrict: 'E',
            templateUrl: 'arquitetura/directive/ca-panel/ca-panel.directive.html',
            transclude: {
                'body': 'panelBody',
                'footer': '?panelFooter'
            },
            scope:{
                titulo:'@'
            }
        };

        function link(scope, element, attrs){
        }
    }
})();