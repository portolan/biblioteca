define([], function() {


 	AssuntoFormController.$inject = ['AssuntoService', '$state', 'entity', '$scope', 'gumgaController'];

 	function AssuntoFormController(AssuntoService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, AssuntoService, 'assunto');



    
    	$scope.assunto.data = entity.data || {};
		$scope.continue = {};
	
		$scope.assunto.on('putSuccess',function(data){
			$state.go('assunto.list');
		});
 	}
	
	return AssuntoFormController;   
});