(function() {
  'use strict';
  angular
    .module('myApp')
    .controller('userController', userController);
    userController.$inject = ['userService', 'ImageService', 'Upload'];
  function userController(userService,ImageService, Upload) {
    var vm = this;
    vm.cloudObj = ImageService.getConfiguration();

    function init() {
      vm.players = userService.getUsers();
      vm.propertys = userService.getProperty();
     
    }
    init();
    vm.Save = function(pimage){
      var newPlayer = {
        code: vm.code,
        name: vm.name,
        alias: vm.alias,
        money: 1000,
        property:[],
        photo: pimage
      }
      var validate = userService.check(newPlayer);
      if (validate == false) {
      userService.setUsers(newPlayer);
      init();
      clear();
      }
    }
    vm.preSave = function() {
      vm.cloudObj.data.file = document.getElementById("photo").files[0];
      if (vm.cloudObj.data.file == null) {
        vm.Save();
      }else{
      Upload.upload(vm.cloudObj)
        .success(function(data) {
          vm.Save(data.url);
        });
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
