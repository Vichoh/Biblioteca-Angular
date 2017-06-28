(function () {
	'use strict';
	angular.module('app')
	.controller('VerPrestamo.controller', verCtrl);
	
	verCtrl.$inject = ['PrestamoService', '$stateParams', '$log', 'LibroService'];
	function verCtrl(PrestamoService, $stateParams, $log, LibroService) {
		var vm = this;
		vm.location = 'ver';
		$log.debug($stateParams.id);
		vm.prestamoForm = PrestamoService.get({id: $stateParams.id});
		
	}
})();