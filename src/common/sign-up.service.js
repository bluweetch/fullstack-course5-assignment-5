(function () {
  "use strict";

  angular.module("common").service("SignUpService", SignUpService);

  SignUpService.$inject = [];
  function SignUpService() {
    const service = this;

    service.data = null;

    service.save = (data) => {
      service.data = data;
    };

    service.getData = () => {
      return service.data;
    };
  }
})();
