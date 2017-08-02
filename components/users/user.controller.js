(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('userController', userController);
  function userController(userSevice) {
    var vm = this;

    function init() {
      vm.players = userSevice.getUsers();
     
    }
    init();
    vm.Save = function(){
      var newPlayer = {
        code: vm.code,
        name: vm.name,
        alias: vm.alias,
        money: 1000,
        property:{}
      }
      var validate = userSevice.check(newPlayer);
      if (validate == false) {
      userSevice.setUsers(newPlayer);
      init();
      clear();
      }
    }
    function clear(){
      vm.code = "";
      vm.name = "";
      vm.alias = "";
    }



  };
})();
