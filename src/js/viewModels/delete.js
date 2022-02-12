define([
  "ojs/ojcore",
  "knockout",
  "jquery",
  "ojs/ojbutton",
  "ojs/ojmodule",
], function (oj, ko, $) {
  function DeleteViewModel() {
    var self = this;
    var url = "http://localhost:9000/listapi/";
    self.deleteRequest = async () => {
      var request = new Request(url, {
        headers: new Headers({
          "Content-type": "application/json; UTF-8",
        }),
        method: "DELETE",
      });
      var response = await fetch(request);
      var responseInfo = await response.json();
      if (responseInfo.success) alert(responseInfo.success);
    };
    self.No = () => {
      alert("Thank you!! Continue to explore the OJET world!");
    };
  }
  return DeleteViewModel;
});
