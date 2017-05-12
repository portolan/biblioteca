define(function(require) {

  var APILocation = require('app/apiLocations');
  require('angular-ui-router');
  require('app/modules/livro/services/module');
  require('app/modules/livro/controllers/module');

  return require('angular')
    .module('app.livro', [
      'ui.router',
      'app.livro.controllers',
      'app.livro.services',
      'gumga.core'
    ])
    .config(function($stateProvider, $httpProvider) {
      $stateProvider
        .state('livro.list', {
          url: '/list',
          templateUrl: 'app/modules/livro/views/list.html',
          controller: 'LivroListController'
        })
        .state('livro.insert', {
          url: '/insert',
          templateUrl: 'app/modules/livro/views/form.html',
          controller: 'LivroFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/livro/new');
            }]
          }
        })
        .state('livro.edit', {
          url: '/edit/:id',
          templateUrl: 'app/modules/livro/views/form.html',
          controller: 'LivroFormController',
          resolve: {
            entity: ['$stateParams', '$http', function($stateParams, $http) {
              return $http.get(APILocation.apiLocation + '/api/livro/' + $stateParams.id);
            }]
          }
        });
    })
});