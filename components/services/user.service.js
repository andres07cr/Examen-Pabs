(function() {
  'use strict';
  angular
    .module('myApp')
    .service('userSevice', userSevice);

  function userSevice() {
    var players = [
    {name: 'andres', code: '02',money: '1500'},

    ];
    var publicAPI = {
      setUsers: _setUsers,
      getUsers: _getUsers,
      check: _check
    };
    return publicAPI;

    function _setUsers(pnewPlayer) {
      var list = _getUsers();

      list.push(pnewPlayer);
      localStorage.setItem('lsPlayers', JSON.stringify(list));
    }

    function _check(pnewPlayer){
      var list = _getUsers();
      var validate = false
      for(var i = 0; i < list.length; i++){
        if (pnewPlayer.code == list[i].code) {
          validate = true;
        }
      }
      return validate;
    }

    function _getUsers() {
      var list = JSON.parse(localStorage.getItem('lsPlayers'));
      if (list == null) {
        list = players;
      }
      return list;
    }
  }

})();
