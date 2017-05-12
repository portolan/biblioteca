define(function (require) {
    var angular = require('angular');
    require('app/modules/assunto/services/module');
    require('angular-ui-router');

    return angular
            .module('app.assunto.controllers', ['app.assunto.services','ui.router'])
            .controller('AssuntoFormController', require('app/modules/assunto/controllers/AssuntoFormController'))
            .controller('AssuntoListController', require('app/modules/assunto/controllers/AssuntoListController'));
});