(function () {
	'use strict';
	angular.module('app')
	.controller('GuardarPrestamo.controller', guardar);
	
	guardar.$inject = ['PrestamoService', '$log', 'LibroService', 'UsuarioService'];
	
	function guardar(PrestamoService, $log, LibroService, UsuarioService) {
		var vm = this;
		vm.location = 'guardar';
		vm.prestamoForm = {
			fecha_prestamo: null,
		  	fecha_devolucion: null,
		  	libro_id: null,
		  	usuario_id: null,
		  	estado_id: null
		};
		vm.libros = LibroService.query();
		vm.usuarios = UsuarioService.query();
		vm.prestamos = null;
		PrestamoService.query().$promise.then(success, error);
		vm.semanticAction = function (form) {
			console.log(form);
			form.libro_id = form.libro_id.id;
			form.usuario_id = form.usuario_id.id;
			form.estado_id = 2;
			form.fecha_prestamo = convertDate(form.fecha_prestamo);
			form.fecha_devolucion = convertDate(form.fecha_devolucion);
			
			PrestamoService.save(form, success, error);
		};
		// Private functions
		function success(data) {
			vm.prestamos = data;
			$log.debug(vm.prestamos);
		}
		function error(data) {
			$log.debug(data);
		}
		function convertDate(str) {
			var date = new Date(str);
			var mnth = ('0' + (date.getMonth() + 1)).slice(-2);
			var day = ('0' + date.getDate()).slice(-2);
			return [date.getFullYear(), mnth, day].join('-');
		}
	}
})();