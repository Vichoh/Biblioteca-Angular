(function () {
	'use strict';

	angular
	.module('app')
	.component('libro', {
		templateUrl: 'app/components/libro/libro.html',
		controller: libroCtrl,
		controllerAs: 'vm'
	});

	libroCtrl.$inject = ['LibroService'];

	function libroCtrl(LibroService) {
		var vm = this;
		LibroService.query().$promise.then(function (data) {
			vm.libros = data;
		});
	}
})();