angular.module('delta')
    .controller('IndexController2', IndexController2);

IndexController2.$inject = ['$scope'];

function IndexController2($scope){
    $scope.nome = 'Delta';
    $scope.myStyle = {};

    $scope.$watch('nome', onChangeNome);

    function onChangeNome(novoValor, valorAntigo){
        if(novoValor === valorAntigo){
            return;
        }

        if(novoValor === 'delta'){
            $scope.myStyle.backgroundColor = '#FF0000';
        }
        else{
            $scope.myStyle.backgroundColor = 'blue';
        }
    }
}
