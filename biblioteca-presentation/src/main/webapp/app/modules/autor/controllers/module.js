define(function (require) {
    var angular = require('angular');
    require('app/modules/autor/services/module');
    require('angular-ui-router');

    return angular
            .module('app.autor.controllers', ['app.autor.services','ui.router'])
            .controller('AutorFormController', require('app/modules/autor/controllers/AutorFormController'))
            .controller('AutorListController', require('app/modules/autor/controllers/AutorListController'));
});