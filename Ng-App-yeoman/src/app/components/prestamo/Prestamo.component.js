(function () {
	'use strict';

	angular
	.module('app')
	.component('prestamo', {
		templateUrl: 'app/components/prestamo/Prestamo.html',
		controller: prestamoCtrl,
		controllerAs: 'vm'
	});

	prestamoCtrl.$inject = ['PrestamoService'];

	function prestamoCtrl(PrestamoService) {
		var vm = this;
		PrestamoService.query().$promise.then(function (data) {
			vm.prestamos = data;
		});
	}
})();