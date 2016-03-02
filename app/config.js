'use strict';
(function (){
	angular.module('appAgenda').config(config);

	function config($stateProvider,$urlRouterProvider){
		// console.log('Config');
		$urlRouterProvider.otherwise('/home');

		$stateProvider
			.state('home',{
				url : '/home',
				templateUrl : 'home/home.html',
				controller: 'HomeController',
				controllerAs: 'home'
			})
			.state('usuarios',{
				url : '/usuarios',
				templateUrl : 'usuarios/usuarios.html',
				controller : 'UsuariosController',
				controllerAs : 'usuarios'
			})
	}
})();