(function () {
  'use strict';
  angular
  .module('app')
  .config(routesConfig);

  /** @ngInject */
  function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('app', {
        url: '/',
        component: 'app'
      })
      .state('prestamo', {
        url: '/prestamo',
        component: 'prestamo'
      })
      .state('crearPrestamo', {
        url: '/prestamo/crear',
        controller: 'GuardarPrestamo.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/prestamo/FormPrestamo.html'
      })
      .state('verPrestamo', {
        url: '/prestamo/:id/ver',
        controller: 'VerPrestamo.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/prestamo/FormPrestamo.html'
      })
      .state('actualizarPrestamo', {
        url: '/prestamo/:id/actualizar',
        controller: 'ActualizarPrestamo.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/prestamo/FormPrestamo.html'
      })
       .state('eliminarPrestamo', {
        url: '/prestamo/eliminar',
        controller: 'EliminarPrestamo.controller',
        controllerAs: 'vm',
        templateUrl: 'app/components/prestamo/FormPrestamo.html'
      })
       .state('libro', {
        url: '/libro',
        component: 'libro'
      });     
  }
})();
