(function () {
	'use strict';

	angular
	.module('app')
	.service('PrestamoService', prestamoService);

	prestamoService.$inject = ['$resource'];

	function prestamoService($resource) {
		return $resource('http://192.168.0.21:8888/PHP/ElectivoWeb/Biblioteca/public/api/prestamo/:id', {id: '@id'},
		{
			'update' : {method: 'PUT'}
		});
	}
})();