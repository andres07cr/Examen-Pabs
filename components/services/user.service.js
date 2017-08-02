(function() {
  'use strict';
  angular
    .module('myApp')
    .service('userSevice', userSevice);

  function userSevice() {
    var players = [
    {code: '001',
    name:'Goku',
    alias: 'Kokkun',
    money: 1500,
    property:{},
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535279/goku_cqc9tb.png'},
     {
    code: '002',
    name:'Piccolo',
    alias: 'PikOREO',
    money: 1500,
    property:{},
  photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535276/piccolo_ksxdec.png'
  },
  {
    code: '003',
    name:'Logan',
    alias: 'Lovezno',
    money: 1500,
    property:{},
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535284/lobezno_o1vs9g.png'
  },
  {
    
    code: '004',
    name:'Bomberman',
    alias: 'Don Pepe y los Globos',
    money: 1500,
    property:{},
    photo:'https://res.cloudinary.com/pabskun/image/upload/v1489535282/donpepe_x9hksw.png'
  }

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
