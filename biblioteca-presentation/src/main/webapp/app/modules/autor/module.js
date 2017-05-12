define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/autor/services/module');
  require('app/modules/autor/controllers/module');

  return require('angular')
    .module('app.autor', [
      'ui.router',
      'app.autor.controllers',
      'app.autor.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('autor.list', {
          url: '/list',
          templateUrl: 'app/modules/autor/views/list.html',
          controller: 'AutorListController'
        })
        .state('autor.insert', {
          url: '/insert',
          templateUrl: 'app/modules/autor/views/form.html',
          controller: 'AutorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/autor/new');
            }]
          }
        })
        .state('autor.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/autor/views/form.html',
          controller: 'AutorFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/autor/' + $stateParams.id);
            }]
          }
        });
    })
});