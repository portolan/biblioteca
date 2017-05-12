define(function (require) {
    var angular = require('angular');
    require('app/modules/editora/services/module');
    require('angular-ui-router');

    return angular
            .module('app.editora.controllers', ['app.editora.services','ui.router'])
            .controller('EditoraFormController', require('app/modules/editora/controllers/EditoraFormController'))
            .controller('EditoraListController', require('app/modules/editora/controllers/EditoraListController'));
});