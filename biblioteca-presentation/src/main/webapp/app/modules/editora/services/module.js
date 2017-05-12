define(function(require) {
   require('angular')
   .module('app.editora.services', [])
   .service('EditoraService', require('app/modules/editora/services/EditoraService'));
});