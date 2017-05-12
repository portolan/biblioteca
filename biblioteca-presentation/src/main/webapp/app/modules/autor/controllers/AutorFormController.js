define([], function() {


 	AutorFormController.$inject = ['AutorService', '$state', 'entity', '$scope', 'gumgaController'];

 	function AutorFormController(AutorService, $state, entity, $scope, gumgaController) {

    	gumgaController.createRestMethods($scope, AutorService, 'autor');



    
    	$scope.autor.data = entity.data || {};
		$scope.continue = {};
	
		$scope.autor.on('putSuccess',function(data){
			$state.go('autor.list');
		});
 	}
	
	return AutorFormController;   
});