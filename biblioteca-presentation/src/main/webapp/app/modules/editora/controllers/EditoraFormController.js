define([], function() {


 	EditoraFormController.$inject = ['EditoraService', '$state', 'entity', '$scope', 'gumgaController'];

 	function EditoraFormController(EditoraService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, EditoraService, 'editora');



    
    	$scope.editora.data = entity.data || {};
		$scope.continue = {};
	
		$scope.editora.on('putSuccess',function(data){
			$state.go('editora.list');
		});
 	}
	
	return EditoraFormController;   
});