define(['app/apiLocations'], function(APILocation) {

	AssuntoService.$inject = ['GumgaRest'];

	function AssuntoService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/assunto');

    	return Service;
    }

  	return AssuntoService;
});