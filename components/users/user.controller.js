(function(){
	'use strict';
	angular
	.module('myApp')
	.controller('userController', userController);

	userController.$inject = ['$q'];

	function userController($q){
		var vm = this;
		vm.user = {};

		vm.registerUser = function(newUser){
			
			console.log(newUser);

			vm.user = '';
		}
	}
})()