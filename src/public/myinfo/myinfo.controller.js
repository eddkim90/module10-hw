(function() {
    'use strict';

    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService'];
    function MyInfoController(MenuService) {
        var $ctrl = this;
        $ctrl.account = MenuService.account;
        $ctrl.count = Object.keys($ctrl.account).length;
        console.log($ctrl.count);
        $ctrl.msg = "Not Signed Up Yet. Sign Up Now!";
    }

})();