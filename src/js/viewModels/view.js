define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojactioncard",
  "ojs/ojlabel",
  "ojs/ojbutton",
  //   "jet-composites/demo-profile-card-layout/loader",
  "ojs/ojmodule",
], function (oj, ko, $) {
  function ViewViewModel() {
    var self = this;

    var get_url = "http://localhost:9000/listapi/";
    // var url = "http://localhost:9000/listapi/";
    self.name = ko.observable();
    self.ssn = ko.observable();
    self.city = ko.observable();
    self.email = ko.observable();
    self.dob = ko.observable();
    // document.querySelector(".toggle").style.opacity = "0";
    self.requestFunction = async () => {
      var request = new Request(get_url, {
        headers: new Headers({
          "Content-type": "application/json; UTF-8",
        }),
      });
      var response = await fetch(request);
      var responseInfo = await response.json();
      console.log(responseInfo.list["name"]);
      document.querySelector(".toggle").style.opacity = "1";
      self.name(responseInfo.list["name"]);
      self.ssn(responseInfo.list["ssn"]);
      self.email(responseInfo.list["email"]);
      self.dob(responseInfo.list["dob"]);
      self.city(responseInfo.list["city"]);
    };
  }
  return ViewViewModel;
});
