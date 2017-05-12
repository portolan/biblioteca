define(['app/apiLocations'], function(APILocation) {

	LivroService.$inject = ['GumgaRest'];

	function LivroService(GumgaRest) {
    	var Service = new GumgaRest(APILocation.apiLocation + '/api/livro');

    	return Service;
    }

  	return LivroService;
});