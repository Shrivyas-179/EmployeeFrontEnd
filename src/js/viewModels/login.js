define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojinputtext",
  "ojs/ojinputnumber",
  "ojs/ojbutton",
  "ojs/ojmodule",
], function (oj, ko, $) {
  function LoginViewModel() {
    var self = this;
    self.email = ko.observable();
    self.password = ko.observable();
    var url = "http://localhost:9000/listdetail/";

    self.login = async () => {
      const logindetails = {
        employee: {
          email: self.email(),
          password: self.password(),
        },
      };
      const loginRequest = new Request(url, {
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(logindetails),
        method: "POST",
      });
      const response = await fetch(loginRequest);
      const responseInfo = await response.json();
      console.log(responseInfo);
      if (responseInfo.success) alert(responseInfo.success);
      else alert(responseInfo.failure);
    };
  }
  return LoginViewModel;
});
