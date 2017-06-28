(function () {
	'use strict';
	angular.module('app')
	.controller('EliminarPrestamo.controller', eliminar);
	
	eliminar.$inject = ['PrestamoService', '$log', 'LibroService', 'UsuarioService'];
	
	function eliminar(PrestamoService, $log, LibroService, UsuarioService) {
		var vm = this;
		vm.location = 'eliminar';
		vm.prestamoForm = {
			fecha_prestamo: null,
		  	fecha_devolucion: null,
		  	libro_id: null,
		  	usuario_id: null,
		  	estado_id: null,
		 	id : null
		};
		
		vm.prestamos = PrestamoService.query();
		PrestamoService.query().$promise.then(success, error);

		vm.semanticAction = function (form) {
			console.log(form);
			form.id = form.id.id;
			
			PrestamoService.remove({id:form.id}, success, error);
		};
		// Private functions
		function success(data) {
			vm.prestamos = data;
			$log.debug(vm.prestamos);
		}
		function error(data) {
			$log.debug(data);
		}
		
	}
})();