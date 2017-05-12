define([], function() {

  EditoraListController.$inject = ['$scope', 'EditoraService', 'gumgaController'];

  function EditoraListController($scope, EditoraService, gumgaController) {

    gumgaController.createRestMethods($scope, EditoraService, 'editora');

    EditoraService.resetDefaultState();
    $scope.editora.execute('get');

    $scope.editora.on('deleteSuccess', function() {      
          $scope.editora.execute('get');
    })    

    $scope.tableConfig = {
      columns: 'nome ,button',
      checkbox: true,
      columnsConfig: [{
        name: 'nome',
        title: '<span gumga-translate-tag="editora.nome"> nome </span>',
        content: '{{$value.nome }}',
        sortField: 'nome'
      }, {
        name: 'button',
        title: ' ',
        content: '<span class="pull-right"><a class="btn btn-primary btn-sm" ui-sref="editora.edit({id: {{$value.id}} })"><i class="glyphicon glyphicon-pencil"></i></a></span>'
      }]
    };

  };
  return EditoraListController;
});
