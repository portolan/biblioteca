define([], function() {

  LivroListController.$inject = ['$scope', 'LivroService', 'gumgaController'];

  function LivroListController($scope, LivroService, gumgaController) {

    gumgaController.createRestMethods($scope, LivroService, 'livro');

    LivroService.resetDefaultState();
    $scope.livro.execute('get');

    $scope.livro.on('deleteSuccess', function() {      
          $scope.livro.execute('get');
    })       

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="livro.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="livro.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return LivroListController;
});
