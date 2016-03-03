'use strict';
(function(){
	angular.module('appAgenda').controller('UsuariosController',UsuariosController);

	function UsuariosController(usuariosModel){
		var vm = this;

		usuariosModel.load();

		vm.dataUser = usuariosModel;
		vm.state = 0;

		/**
		 * [adicionar description]
		 * @return {[type]} [description]
		 */
		vm.adicionar = function(){
			console.log('Adicionando');
			vm.state = 1;
		}

		vm.editar = function(obj,index){
			console.log('Editando',obj);	
			vm.selected = index;
			vm.state = 2;
			if (typeof(obj.UserState) === 'undefined'){
				obj.UserState = false;
			}

			obj.UserState = !obj.UserState ? false : true;
			var params = $.param(obj);

			vm.form = obj;

		}

		vm.remove = function(obj){
			console.log ('Removendo',obj);
		}

		vm.cancelar = function(){
			console.log ('Cancelando');
			vm.state = 0;

		}

		vm.salvar = function(){
			
			switch(vm.state){
				case 1:
					usuariosModel.add(vm.form).then(
						function(){
							console.log('Salvou');
							vm.state = 0;
						}, 
						function(error){
							console.log('Erro',error);
						}
					);
					break;
				case 2:
					usuariosModel.edit(vm.form).then(
						function(){
							console.log('Salvou');
							vm.state = 0;
						}, 
						function(error){
							console.log('Erro',error);
						}
					);
					break;
				default:
					console.log('Não sei o que você quer!!!')
			
			}
			

		}
	}
})();