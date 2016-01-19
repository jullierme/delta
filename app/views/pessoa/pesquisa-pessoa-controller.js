angular.module('delta')
    .controller('PesquisaPessoaController',PesquisaPessoaController);

function PesquisaPessoaController($scope){
    $scope.nome = 'Controller da pesquisa carregado';
}