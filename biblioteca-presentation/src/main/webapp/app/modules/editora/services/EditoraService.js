define(['app/apiLocations'], function(APILocation) {

	EditoraService.$inject = ['GumgaRest'];

	function EditoraService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/editora');

    	return Service;
    }

  	return EditoraService;
});