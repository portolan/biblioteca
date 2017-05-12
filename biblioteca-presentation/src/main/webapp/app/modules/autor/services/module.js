define(function(require) {
   require('angular')
   .module('app.autor.services', [])
   .service('AutorService', require('app/modules/autor/services/AutorService'));
});