(function(){
    'use strict';

    angular.module('delta.directive')
        .directive('caEnter', caEnter);

    /* @ngInject */
    function caEnter(KeyCode){
        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs){
            element.bind('keydown', onKeydown);

            function onKeydown(event){
                var code = event.keyCode;

                if(code === KeyCode.ENTER){
                    scope.$eval(attrs.caEnter);
                }
            }

        }
    }
})();