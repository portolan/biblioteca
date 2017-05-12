define(['app/apiLocations'], function(APILocation) {

	AutorService.$inject = ['GumgaRest'];

	function AutorService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/autor');

    	return Service;
    }

  	return AutorService;
});