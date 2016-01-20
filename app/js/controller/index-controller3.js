angular.module('delta')
    .controller('IndexController3', IndexController3);

function IndexController3($scope, $timeout, AlertService,
                          $filter, $rootScope, $state){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.myClass = '';
    $scope.ultimaDataCadastrada = '';
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;

    iniciar();

    function iniciar(){
        $scope.gridOptions = {
            data: 'listaDePessoas',
            columnDefs:[
                {field:'nome', displayName:'Nome', width:200},
                {field:'sobrenome', displayName:'Sobrenome'},
                {field:'nascimento', displayName:'Data nascimento',
                    width:150, cellTemplate:'app/template/cell-template-date.html'},
                {field:'editar', displayName:'',
                    width:40, cellTemplate:'app/template/cell-template-editar.html'}
            ],
            rowTemplate:'app/template/row-template.html'
        };
    }

    function salvar(){
        setarTouchedNosInputs();

        if($scope.formPessoa.$invalid){
            AlertService.showError('Verifique os campos antes de salvar');
            return;
        }
        var data = $scope.entidade.nascimento;

        $scope.ultimaDataCadastrada = $filter('date')(data,'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);

        AlertService.showSuccess('Registro salvo com sucesso!');

        limpar();
    }

    function limpar(){
        $scope.entidade = {};

        $timeout(function(){

            setarUntouchedNosInputs();

        },80);
    }

    function setarTouchedNosInputs(){
        /*
        angular.forEach(objetoOuArray, function(propriedadeOuItemDoArray, nomeDaPropriedade){
        });
        */
        //$scope.formPessoa.$error = Objeto com os erros
        //$scope.formPessoa.nome.$error = Objeto com os erros do campo nome

        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setTouched();
            });
        });
    }

    function setarUntouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error, function(error){
            angular.forEach(error, function(field){
                field.$setUntouched();
            });
        });
    }

    function onClickEditar(linhaSelecionada){
        $scope.entidade = linhaSelecionada;
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = 'white';
        return style;
    }

    $scope.dispararEvento = function(){
        $rootScope.$broadcast('testeBroadcastEvent',{nome:'Jullierme'})
        $state.go('stateQueNaoExiste');
    };

    $rootScope.$on('$stateChangeStart',stateChangeStart);
    $rootScope.$on('$stateChangeSuccess',stateChangeSuccess);
    $rootScope.$on('$stateNotFound',stateNotFound);

    function stateChangeStart(event, toState, toParams, fromState, fromParams){
         if(toState.name === 'cadastroPessoa'){
             AlertService.showError('Você não possúi permissão para acessar' +
                 'esta tela');

             event.preventDefault();
         }
    }

    function stateChangeSuccess(event, toState, toParams, fromState, fromParams){
        AlertService.showSuccess('Carregou estado ' + toState.name + ' com sucesso.');
    }

    function stateNotFound(event, unfoundState, fromState, fromParams){
        AlertService.showError('Essa página não existe.');

        $state.go('home');
    }
}
