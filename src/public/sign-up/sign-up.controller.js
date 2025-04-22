(function () {
  "use strict";

  angular.module("public").controller("SignUpController", SignUpController);

  SignUpController.$inject = ["$scope", "MenuService", "SignUpService"];

  function SignUpController($scope, menuService, signUpService) {
    const controller = this;

    controller.formData = {};
    controller.menuItems = [];

    controller.done = false;

    const setMenuNumberValidity = (isValid) => {
      $scope.registerForm.menu.$setValidity("invalidMenu", isValid);
    };

    controller.$onInit = () => {
      menuService.getAllMenuItems().then((data) => {
        controller.menuItems = data;
      });
    };

    $scope.$watch("signUp.formData.menu", (newValue) => {
      if (!controller.menuItems.length) {
        setMenuNumberValidity(false);
        return;
      }

      if (!newValue) {
        setMenuNumberValidity(true);
        return;
      }

      setMenuNumberValidity(
        controller.menuItems.some(
          (item) => newValue.toUpperCase() === item.short_name
        )
      );
    });

    controller.submit = () => {
      controller.done = true;

      const menu = controller.formData.menu.toUpperCase();

      signUpService.save({
        ...controller.formData,
        menu,
        menuItem: controller.menuItems.find((item) => menu === item.short_name),
      });
    };
  }
})();
