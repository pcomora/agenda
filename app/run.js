'use strict';
(function(){
	angular.module('appAgenda').run(run);

	function run($rootScope){
		// console.log('Run');
		$rootScope.appTitle = "Agenda";
	}
})();