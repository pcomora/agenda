'use strict';
(function(){
	angular.module('appAgenda').controller('HomeController',HomeController);
	function HomeController(){
		// console.log('Home');
		var vm = this;
		vm.nome = "Paulo Comora";
	}
})();