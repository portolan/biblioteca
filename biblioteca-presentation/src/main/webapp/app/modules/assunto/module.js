define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/assunto/services/module');
  require('app/modules/assunto/controllers/module');

  return require('angular')
    .module('app.assunto', [
      'ui.router',
      'app.assunto.controllers',
      'app.assunto.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('assunto.list', {
          url: '/list',
          templateUrl: 'app/modules/assunto/views/list.html',
          controller: 'AssuntoListController'
        })
        .state('assunto.insert', {
          url: '/insert',
          templateUrl: 'app/modules/assunto/views/form.html',
          controller: 'AssuntoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/assunto/new');
            }]
          }
        })
        .state('assunto.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/assunto/views/form.html',
          controller: 'AssuntoFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/assunto/' + $stateParams.id);
            }]
          }
        });
    })
});