(function(){
    'use strict';

    angular.module('delta.factory')
        .factory('ParametrosAplicacao', ParametrosAplicacao);

    function ParametrosAplicacao(){
        return {
            nomeDoUsuario: '',
            email: '',
            logado: false
        };
    }
})();

