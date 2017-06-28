
(function () {
	'use strict';

	angular
	.module('app')
	.service('LibroService', libroService);

	libroService.$inject = ['$resource'];

	function libroService($resource) {
		return $resource('http://192.168.0.21:8888/PHP/ElectivoWeb/Biblioteca/public/api/libros/:id', {id: '@id'});
	}
})();