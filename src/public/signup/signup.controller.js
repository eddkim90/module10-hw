(function() {
    'use strict';

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$scope', 'MenuService'];
    function SignUpController($scope, MenuService) {
        var $ctrl = this;
        $ctrl.account = {};

        $ctrl.submit = function() {
            MenuService.getMenuItem($scope.menuSignup.user.menuitem).then(function(item) {
                if (item === 500) {
                    $ctrl.failed = true;
                } else {
                    $ctrl.account.firstname = $scope.menuSignup.user.firstname;
                    $ctrl.account.lastname = $scope.menuSignup.user.lastname;
                    $ctrl.account.email = $scope.menuSignup.user.email;
                    $ctrl.account.phone = $scope.menuSignup.user.phone;
                    $ctrl.account.menuItem = $scope.menuSignup.user.menuitem;
                    $ctrl.account.item = item;

                    $ctrl.completed = true;
                    $ctrl.failed = false;

                    MenuService.setAccountObject($ctrl.account);
                }
            });
        }
    }

})();