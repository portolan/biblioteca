define(function(require) {
   require('angular')
   .module('app.livro.services', [])
   .service('LivroService', require('app/modules/livro/services/LivroService'));
});