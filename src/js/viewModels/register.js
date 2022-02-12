define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojinputtext",
  "ojs/ojinputnumber",
  "ojs/ojbutton",
  "ojs/ojmodule",
  "ojs/ojdatetimepicker",
], function (oj, ko, $) {
  function RegisterViewModel() {
    var self = this;
    self.ssn = ko.observable();
    self.name = ko.observable();
    self.email = ko.observable();
    self.password = ko.observable();
    self.cpassword = ko.observable();
    self.dob = ko.observable();
    self.city = ko.observable();
    var url = "http://localhost:9000/listapi/";

    self.create = async () => {
      const registerDetails = {
        employee: {
          ssn: self.ssn(),
          name: self.name(),
          email: self.email(),
          password: self.password(),
          cpassword: self.cpassword(),
          dob: self.dob(),
          city: self.city(),
        },
      };
      const request = new Request(url, {
        headers: new Headers({
          "Content-type": "application/json; charset=UTF-8",
        }),
        body: JSON.stringify(registerDetails),
        method: "POST",
      });
      const response = await fetch(request);
      const responseInfo = await response.json();

      if (responseInfo.success) alert(responseInfo.success);
      else {
        alert("Registration Failed");
      }
    };
  }
  return RegisterViewModel;
});
// "ojs/ojinputpassword",
//    "ojs/ojinputdate",
