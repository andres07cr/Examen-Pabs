(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('userController', userController);
  function userController(userService) {
    var vm = this;

    function init() {
      vm.players = userService.getUsers();
      vm.propertys = userService.getProperty();
     
    }
    init();
    vm.Save = function(){
      var newPlayer = {
        code: vm.code,
        name: vm.name,
        alias: vm.alias,
        money: 1000,
        property:[]
      }
      var validate = userService.check(newPlayer);
      if (validate == false) {
      userService.setUsers(newPlayer);
      init();
      clear();
      }
    }
    vm.SaveTwo = function(){
      var newbuy = {
        player: vm.player,
        property: vm.property
      }
      var validate = userService.checkProperty(newbuy);
      if (validate == false) {
      userService.buy(newbuy);
      userService.update(newbuy);
      init();
      cleanTwo();
      }else{
        console.log('propiedad ya está comprada')
      }
    }
    function clear(){
      vm.code = "";
      vm.name = "";
      vm.alias = "";
    }
    function cleanTwo(){
      vm.player = "";
      vm.property = "";
    }



  };
})();
