/**
 * @license
 * Copyright (c) 2014, 2021, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
/*
 * Your application specific code will go here
 */
define([
  "ojs/ojcore",
  "ojs/ojcontext",
  "ojs/ojresponsiveutils",
  "ojs/ojresponsiveknockoututils",
  "knockout",
  "ojs/ojmodule-element-utils",
  "ojs/ojknockout",
  "ojs/ojrouter",
  "ojs/ojarraydataprovider",
  "ojs/ojlistview",
  "ojs/ojinputtext",
  "ojs/ojarraytabledatasource",
  "ojs/ojmodel",
  "ojs/ojmodule",
  "ojs/ojformlayout",
  "ojs/ojbutton",
  "ojs/ojmodule-element",
  "ojs/ojdrawerlayout",
  "ojs/ojnavigationlist",
], function (
  oj,
  Context,
  ResponsiveUtils,
  ResponsiveKnockoutUtils,
  ko,
  moduleElementUtils
) {
  function ControllerViewModel() {
    // Media queries for repsonsive layouts
    const smQuery = ResponsiveUtils.getFrameworkQuery(
      ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY
    );
    this.smScreen = ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);

    // Header
    // Application Name used in Branding Area
    this.appName = ko.observable("App Name");
    // User Info used in Global Navigation area
    this.userLogin = ko.observable("john.hancock@oracle.com");

    var self = this;
    self.OptionsArray = ko.observableArray([
      { id: 0, item: "register" },
      { id: 1, item: "login" },
      { id: 2, item: "view" },
      { id: 3, item: "update" },
      { id: 4, item: "delete" },
    ]);

    self.OptionsDataProvider = new oj.ArrayDataProvider(self.OptionsArray, {
      keyAttributes: "id",
    });

    self.gotoContent = ko.observable();
    self.moduleConfig = ko.observable("register");

    mod_array = ["register", "login", "view", "update", "delete"];
    self.moduleConfig(
      moduleElementUtils.createConfig({
        name: mod_array[0],
      })
    );

    self.gotoContent = (event) => {
      var state = event.detail.context.data;
      self.moduleConfig(
        moduleElementUtils.createConfig({
          name: mod_array[state.id],
        })
      );
    };

    self.startOpened = ko.observable(false);
    self.startToggle = () => this.startOpened(!self.startOpened());
    self.startOpenedChangedHandler = (event) => {
      // If the drawer closed itself, sync the current state
      if (event.detail.updatedFrom === "internal") {
        self.startOpened(event.detail.value);
      }
    };

    // this.startOpened = ko.observable(false);
    // this.startToggle = () => this.startOpened(!this.startOpened());
    // this.startOpenedChangedHandler = (event) => {
    //   // If the drawer closed itself, sync the current state
    //   if (event.detail.updatedFrom === "internal") {
    //     this.startOpened(event.detail.value);
    //   }
    // };
    // Footer
    this.footerLinks = [
      {
        name: "About Oracle",
        linkId: "aboutOracle",
        linkTarget: "http://www.oracle.com/us/corporate/index.html#menu-about",
      },
      {
        name: "Contact Us",
        id: "contactUs",
        linkTarget: "http://www.oracle.com/us/corporate/contact/index.html",
      },
      {
        name: "Legal Notices",
        id: "legalNotices",
        linkTarget: "http://www.oracle.com/us/legal/index.html",
      },
      {
        name: "Terms Of Use",
        id: "termsOfUse",
        linkTarget: "http://www.oracle.com/us/legal/terms/index.html",
      },
      {
        name: "Your Privacy Rights",
        id: "yourPrivacyRights",
        linkTarget: "http://www.oracle.com/us/legal/privacy/index.html",
      },
    ];
  }

  // release the application bootstrap busy state
  Context.getPageContext().getBusyContext().applicationBootstrapComplete();

  return new ControllerViewModel();
});
