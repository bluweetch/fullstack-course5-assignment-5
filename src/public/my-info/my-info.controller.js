(function () {
  "use strict";

  angular.module("public").controller("MyInfoController", MyInfoController);

  MyInfoController.$inject = ["SignUpService"];

  function MyInfoController(signUpService) {
    const controller = this;

    controller.data = null;

    controller.$onInit = () => {
      const data = signUpService.getData();

      if (!data) {
        return;
      }

      controller.data = {
        ...data,
        categoryName: data.menu.replace(/[0-9]+/g, ""),
      };

      // ng-src="images/menu/{{$ctrl.categoryShortName}}/{{$ctrl.menuItem.short_name}}.jpg" alt="{{$ctrl.menuItem.name}}
    };
  }
})();
