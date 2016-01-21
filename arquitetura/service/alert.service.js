(function(){
    'use strict';

    angular.module('delta.service')
        .service('AlertService', AlertService);

    /* @ngInject */
    function AlertService(toastr){
        this.nomeDoUsuario = '';
        this.showSuccess = showSuccess;
        this.showError = showError;
        this.showWarning = showWarning;
        this.showInfo = showInfo;

        function showSuccess(mensagem, titulo){
            if(!titulo){
                titulo = 'Ok';
            }

            toastr.success(mensagem, titulo, {progressBar: true});
        }

        function showError(mensagem, titulo){
            if(!titulo){
                titulo = 'Erro:';
            }


            toastr.error(mensagem, titulo, {progressBar: true});
        }

        function showInfo(mensagem, titulo){
            if(!titulo){
                titulo = 'Inf.';
            }

            toastr.info(mensagem, titulo, {progressBar: true});
        }

        function showWarning(mensagem, titulo){
            if(!titulo){
                titulo = 'Atenção';
            }

            toastr.warning(mensagem, titulo, {progressBar: true});
        }
    }
})();