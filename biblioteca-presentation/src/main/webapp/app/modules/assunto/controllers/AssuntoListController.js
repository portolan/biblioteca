define([], function() {

  AssuntoListController.$inject = ['$scope', 'AssuntoService', 'gumgaController'];

  function AssuntoListController($scope, AssuntoService, gumgaController) {

    gumgaController.createRestMethods($scope, AssuntoService, 'assunto');

    AssuntoService.resetDefaultState();
    $scope.assunto.execute('get');

    $scope.assunto.on('deleteSuccess', function() {      
          $scope.assunto.execute('get');
    })

    $scope.tableConfig = {
      columns: 'nome, descricao, button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="assunto.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      },{
        name: 'descricao',
        title: '<span gumga-translate-tag="assunto.descricao"> descricao </span>',
        content: '{{$value.descricao }}',
        sortField: 'descricao'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="assunto.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return AssuntoListController;
});
