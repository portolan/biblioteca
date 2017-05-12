define([], function() {

  AutorListController.$inject = ['$scope', 'AutorService', 'gumgaController'];

  function AutorListController($scope, AutorService, gumgaController) {

    gumgaController.createRestMethods($scope, AutorService, 'autor');

    AutorService.resetDefaultState();
    $scope.autor.execute('get');

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="autor.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="autor.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return AutorListController;
});
