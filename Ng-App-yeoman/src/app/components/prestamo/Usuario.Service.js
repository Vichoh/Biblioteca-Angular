(function () {
	'use strict';

	angular
	.module('app')
	.service('UsuarioService', usuarioService);

	usuarioService.$inject = ['$resource'];

	function usuarioService($resource) {
		return $resource('http://192.168.0.21:8888/PHP/ElectivoWeb/Biblioteca/public/api/usuarios/:id', {id: '@id'});
	}
})();