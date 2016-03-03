'use strict';
(function (){
	angular.module('appAgenda').config(config);

	function config($stateProvider,$urlRouterProvider, $httpProvider){
		// console.log('Config');
		
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';

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