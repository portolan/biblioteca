define([], function() {


 	LivroFormController.$inject = ['LivroService', '$state', 'entity', '$scope', 'gumgaController', 'AssuntoService', 'EditoraService'];

 	function LivroFormController(LivroService, $state, entity, $scope, gumgaController, AssuntoService, EditoraService) {

    	gumgaController.createRestMethods($scope, LivroService, 'livro');


	    gumgaController.createRestMethods($scope, AssuntoService, 'assunto');
	    $scope.assunto.methods.search('nome','');    
	    gumgaController.createRestMethods($scope, EditoraService, 'editora');
	    $scope.editora.methods.search('nome','');    

	    $scope.assuntosOptions=[];
    
    	$scope.livro.data = entity.data || {};
		$scope.livro.data.autores = $scope.livro.data.autores || [];
		$scope.continue = {};
	
		$scope.livro.on('putSuccess',function(data){
			$state.go('livro.list');
		});
 	}
	
	return LivroFormController;   
});