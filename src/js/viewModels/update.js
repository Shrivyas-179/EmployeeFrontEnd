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
  function UpdateViewModel() {
    var self = this;
    self.name = ko.observable();
    self.dob = ko.observable();
    self.city = ko.observable();

    var url = "http://localhost:9000/listapi/";

    self.Update = async () => {
      var updateinfo = {
        employee: {
          name: self.name(),
          dob: self.dob(),
          city: self.city(),
        },
      };
      var request = new Request(url, {
        headers: new Headers({
          "Content-type": "application/json; UTF-8",
        }),
        body: JSON.stringify(updateinfo),
        method: "PUT",
      });
      var response = await fetch(request);
      var responseInfo = await response.json();
      console.log(responseInfo);
    };
  }
  return UpdateViewModel;
});
