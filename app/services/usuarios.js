'use strict';
(function(){

	angular.module('appAgenda').factory('usuariosModel',usuariosModel);

	function usuariosModel(urlModel, $http, $q, toaster){

		var model = {
			// Dados
			data : [],
			ready : false,
			// Crud
			load : _load,
			add : _add,
			edit : _edit,
			// remove : _remove
		}

		return model;

		// carregar dados
		function _load(){
			var def = $q.defer();
			//força o modelo a ficar não preparado
			model.ready = false;

			$http.get(urlModel.users.get).then(
				function(rest){
					// deu certo 
					if (rest.status == 200){
						
						model.ready = true;
						model.data  = rest.data;

						def.resolve(model);	
					}

					// deu certo mas não trouxe nada
					else if (rest.status == 204){
						model.ready = true;
						model.data = [];

						def.reject(rest.data);
					}

					// deu certo mas não sei
					else {
						model.ready = false;
						def.reject(rest.data);		
					}

				}, 
				function(error){
					// deu errado
					def.reject(error);
				})

			return def.promise;
		}
		// adicionar
		function _add(obj){
			var def = $q.defer();

			if(typeof(obj) === 'undefined'){
				toaster.pop('error',"Erro","Formulário inválido");
				def.reject();
			}
			else {

				if (typeof(obj.UserState) === 'undefined'){
					obj.UserState = false;
				}

				obj.UserState = !obj.UserState ? 0 : 1;
				var params = $.param(obj);

				$http.post(urlModel.users.add, params).then (
					function(rest){
						//ok
						if(rest.status === 200){
							toaster.pop('success',"Beleza","Deu baum!!!!");
							model.load().then(function(){
								def.resolve();
							});
						} else {
							toaster.pop('error',"Erro", "Deu ruim!!!!" + rest.data);
							def.reject();
						}	
					},
					function(error){
						//erro
						toaster.pop('error',"Erro", "Deu ruim!!!!" + error.data);	
						def.reject();
					}

				);
				
			}

			return def.promise;
		}
		// editar
		function _edit(obj){
			var def = $q.defer();

			if(typeof(obj) === 'undefined'){
				toaster.pop('error',"Erro","Formulário inválido");
				def.reject();
			}
			else {

				if (typeof(obj.UserState) === 'undefined'){
					obj.UserState = false;
				}

				obj.UserState = !obj.UserState ? 0 : 1;
				var params = $.param(obj);

				$http.post(urlModel.users.edit, params).then (
					function(rest){
						//ok
						if(rest.status === 200){
							toaster.pop('success',"Beleza","Deu baum!!!!");
							model.load().then(function(){
								def.resolve();
							});
						} else {
							toaster.pop('error',"Erro", "Deu ruim!!!!" + rest.data);
							def.reject();
						}	
					},
					function(error){
						//erro
						toaster.pop('error',"Erro", "Deu ruim!!!!" + error.data);	
						def.reject();
					}

				);
				
			}

			return def.promise;
		}
	}
})();