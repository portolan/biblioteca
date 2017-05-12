define(function (require) {
    var angular = require('angular');
    require('app/modules/livro/services/module');
    require('angular-ui-router');

    return angular
            .module('app.livro.controllers', ['app.livro.services','ui.router'])
            .controller('ModalAutorController', require('app/modules/livro/controllers/ModalAutorController'))
            .controller('LivroFormController', require('app/modules/livro/controllers/LivroFormController'))
            .controller('LivroListController', require('app/modules/livro/controllers/LivroListController'));
});