define(function(require) {
   require('angular')
   .module('app.assunto.services', [])
   .service('AssuntoService', require('app/modules/assunto/services/AssuntoService'));
});