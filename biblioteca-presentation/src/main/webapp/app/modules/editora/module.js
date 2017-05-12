define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/editora/services/module');
  require('app/modules/editora/controllers/module');

  return require('angular')
    .module('app.editora', [
      'ui.router',
      'app.editora.controllers',
      'app.editora.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('editora.list', {
          url: '/list',
          templateUrl: 'app/modules/editora/views/list.html',
          controller: 'EditoraListController'
        })
        .state('editora.insert', {
          url: '/insert',
          templateUrl: 'app/modules/editora/views/form.html',
          controller: 'EditoraFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/editora/new');
            }]
          }
        })
        .state('editora.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/editora/views/form.html',
          controller: 'EditoraFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/editora/' + $stateParams.id);
            }]
          }
        });
    })
});