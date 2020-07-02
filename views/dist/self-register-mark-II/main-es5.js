function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about/about.component.ts":
  /*!******************************************!*\
    !*** ./src/app/about/about.component.ts ***!
    \******************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AboutComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435, \u043D\u043E \u044D\u0442\u043E \u043D\u0435\u043D\u0430\u0434\u043E\u043B\u0433\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 4,
      vars: 1,
      consts: [[1, "block-one"], [1, "text-main", "header", 2, "margin-top", "35px", "text-align", "center"], ["class", "text-main subheader", 4, "ngIf"], [1, "text-main", "subheader"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041E \u043D\u0430\u0441 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account.service.ts":
  /*!************************************!*\
    !*** ./src/app/account.service.ts ***!
    \************************************/

  /*! exports provided: AccountService */

  /***/
  function srcAppAccountServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountService", function () {
      return AccountService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AccountService =
    /*#__PURE__*/
    function () {
      function AccountService(http) {
        _classCallCheck(this, AccountService);

        this.http = http;
      }

      _createClass(AccountService, [{
        key: "getMain",
        value: function getMain() {
          console.log('getting info...');
          return this.http.get("/api/account");
        } // ===== Работа с заявками

      }, {
        key: "registerApplication",
        value: function registerApplication(application) {
          console.log('posting app', application);
          return this.http.post('/api/account', application);
        }
      }, {
        key: "registerLogo",
        value: function registerLogo(image) {
          var fd = new FormData();

          if (image) {
            fd.append('image', image, image.name);
          } // fd.append('name', name);


          return this.http.post('/api/account/logo', fd);
        }
      }, {
        key: "getAllApplications",
        value: function getAllApplications() {
          // console.log('getting info...');
          return this.http.get("/api/account/apps");
        }
      }, {
        key: "getApplicationById",
        value: function getApplicationById(id) {
          return this.http.get("/api/account/apps/".concat(id));
        } // ===== работа с заявителями

      }, {
        key: "saveNewApplicant",
        value: function saveNewApplicant(applicant) {
          return this.http.post("/api/account/applicants", applicant);
        }
      }, {
        key: "getAllApplicants",
        value: function getAllApplicants() {
          return this.http.get("/api/account/applicants");
        }
      }, {
        key: "updateApplicant",
        value: function updateApplicant(applicant) {
          return this.http.patch("/api/account/applicants/".concat(applicant._id), applicant);
        }
      }, {
        key: "removeApplicant",
        value: function removeApplicant(applicant) {
          return this.http["delete"]("/api/account/applicants/".concat(applicant._id));
        }
      }]);

      return AccountService;
    }();

    AccountService.ɵfac = function AccountService_Factory(t) {
      return new (t || AccountService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    AccountService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AccountService,
      factory: AccountService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/account/account.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/account/account.component.ts ***!
    \**********************************************/

  /*! exports provided: AccountComponent */

  /***/
  function srcAppAccountAccountComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountComponent", function () {
      return AccountComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a0) {
      return {
        shine: a0
      };
    };

    var _c1 = function _c1() {
      return ["/applications"];
    };

    var _c2 = function _c2() {
      return ["/add"];
    };

    var AccountComponent =
    /*#__PURE__*/
    function () {
      function AccountComponent(auth, account) {
        _classCallCheck(this, AccountComponent);

        this.auth = auth;
        this.account = account;
        this.username = 'пользователь';
        this.appsCount = 0;
        this.loaded = false;
      }

      _createClass(AccountComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetch();
        }
      }, {
        key: "fetch",
        value: function fetch() {
          var _this = this;

          this.aSub = this.account.getMain().subscribe(function (main) {
            _this.username = main.name.split(' ')[0];
            _this.appsCount = main.apps; // timeInterval(5000);

            _this.loaded = true;
          }, function (error) {
            if (error.code === 401) {
              _this.auth.logout();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }]);

      return AccountComponent;
    }();

    AccountComponent.ɵfac = function AccountComponent_Factory(t) {
      return new (t || AccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]));
    };

    AccountComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AccountComponent,
      selectors: [["app-account"]],
      decls: 41,
      vars: 19,
      consts: [[1, "block-one"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "30", "fxLayout", "column"], ["fxFlex", "60", "fxFlex.lt-md", "100", "fxFlex.lt-lg", "55"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "content-header"], ["src", "assets/images/user.png", 2, "width", "120px", "height", "120px"], [2, "text-align", "center", "padding-top", "15px", 3, "ngClass"], [1, "text-main", "header"], ["fxLayout", "row", "fxLayout.lt-lg", "column", "fxLayoutAlign", "space-around center"], [1, "desktop", 3, "ngClass"], [3, "fxHide"], ["fxLayout", "row"], ["fxFlex", "70"], [1, "card-header"], [1, "card-subtile"], ["fxFlex", "30", "fxLayoutAlign", "end center"], ["src", "assets/images/apps.png", 1, "card-image"], [2, "height", "20px"], [1, "card-footer"], ["fxLayoutAlign", "start center", "fxFlexFill", "", 1, "button", "alternative-button", "card-link", 3, "routerLink"], ["src", "assets/images/add-app.png", 1, "card-image"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "15"]],
      template: function AccountComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "titlecase");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u0423\u0437\u043D\u0430\u0439\u0442\u0435 \u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0441\u0432\u043E\u0438\u0445 \u0442\u0435\u043A\u0443\u0449\u0438\u0445 \u0437\u0430\u044F\u0432\u043E\u043A, \u0438\u0445 \u043E\u043F\u043B\u0430\u0442\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card-footer", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0423\u0437\u043D\u0430\u0442\u044C \u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-card", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u041D\u043E\u0432\u0430\u044F \u0437\u0430\u044F\u0432\u043A\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u041F\u043E\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u043D\u044B\u0439 \u0437\u043D\u0430\u043A \u0438 \u0443\u043A\u0430\u0436\u0438\u0442\u0435 \u0432\u0441\u0435 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card-footer", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " \u041F\u043E\u0434\u0430\u0442\u044C \u0437\u0430\u044F\u0432\u043A\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, !ctx.loaded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C, ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 9, ctx.username), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, !ctx.loaded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxHide", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \u0422\u0435\u043A\u0443\u0449\u0438\u0435 \u0437\u0430\u044F\u0432\u043A\u0438: ", ctx.appsCount, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, !ctx.loaded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxHide", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardFooter"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["FlexFillDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["TitleCasePipe"]],
      styles: [".card-footer[_ngcontent-%COMP%] {\r\n  height: 50px;\r\n}\r\n\r\n.card-footer[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background: #f6f6f6;\r\n}\r\n\r\n.card-link[_ngcontent-%COMP%] {\r\n  padding-left: 25px;\r\n}\r\n\r\n.card-image[_ngcontent-%COMP%] {\r\n  max-width: 50%;\r\n  max-height: 50%;\r\n  padding-right: 15px;\r\n}\r\n\r\nmat-card[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  min-height: 170px;\r\n  margin-top: 25px;\r\n  width: 80%;\r\n  \r\n}\r\n\r\n.content-header[_ngcontent-%COMP%] {\r\n  padding-top: 35px;\r\n  padding-bottom: 10px;\r\n  \r\n}\r\n\r\n.desktop[_ngcontent-%COMP%] {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWNjb3VudC9hY2NvdW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hY2NvdW50L2FjY291bnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWZvb3RlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uY2FyZC1mb290ZXIgOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xyXG59XHJcblxyXG4uY2FyZC1saW5rIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbn1cclxuXHJcbi5jYXJkLWltYWdlIHtcclxuICBtYXgtd2lkdGg6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiA1MCU7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxubWF0LWNhcmQge1xyXG4gIG1heC13aWR0aDogNDAwcHg7XHJcbiAgbWluLWhlaWdodDogMTcwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICB3aWR0aDogODAlO1xyXG4gIC8qbWFyZ2luOiAxNXB4OyovXHJcbn1cclxuXHJcbi5jb250ZW50LWhlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgLypiYWNrZ3JvdW5kOiAjNTE4YmY2OyovXHJcbn1cclxuXHJcbi5kZXNrdG9wIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-account',
          templateUrl: './account.component.html',
          styleUrls: ['./account.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/add/add.component.ts":
  /*!**************************************!*\
    !*** ./src/app/add/add.component.ts ***!
    \**************************************/

  /*! exports provided: AddComponent */

  /***/
  function srcAppAddAddComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddComponent", function () {
      return AddComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../class.service */
    "./src/app/class.service.ts");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _custom_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../custom.pipe */
    "./src/app/custom.pipe.ts");

    var _c0 = ["appMode"];
    var _c1 = ["uploader"];

    function AddComponent_div_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 24);
      }
    }

    function AddComponent_mat_divider_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider");
      }
    }

    function AddComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043A\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043F \u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043A\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](13);

          return _r39.checked = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_mat_card_click_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r44.appForm.controls["trademarkType"].setValue("word");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0421\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-radio-button", 39, 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_mat_card_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r45.appForm.controls["trademarkType"].setValue("word");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0421\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u0439 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_div_click_21_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28);

          return _r40.checked = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-card", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_mat_card_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r47.appForm.controls["trademarkType"].setValue("image");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0418\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-radio-button", 46, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-card", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_mat_card_click_30_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.appForm.controls["trademarkType"].setValue("image");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " \u0418\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_div_click_36_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](43);

          return _r41.checked = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-card", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_mat_card_click_37_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.appForm.controls["trademarkType"].setValue("complex");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "mat-radio-button", 50, 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-card", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_29_Template_mat_card_click_45_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.appForm.controls["trademarkType"].setValue("complex");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " \u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_30_div_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041B\u043E\u0433\u043E\u0442\u0438\u043F \u043D\u0435 \u0432\u044B\u0431\u0440\u0430\u043D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_30_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_30_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.increasePage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card-content", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, AddComponent_div_30_div_12_Template, 2, 0, "div", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card-footer", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_30_Template_button_click_16_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r56.loadImage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 62, 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddComponent_div_30_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r57.onFileUpload($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r32.imagePreview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r32.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AddComponent_div_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0446\u0432\u0435\u0442\u0430 \u0438 \u043D\u0435\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "(\u043D\u0435\u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_31_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r59);

          var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r58.increasePage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u041F\u0440\u043E\u043F\u0443\u0441\u0442\u0438\u0442\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0417\u0430\u044F\u0432\u043B\u044F\u0435\u043C\u044B\u0435 \u0446\u0432\u0435\u0442\u0430 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0426\u0432\u0435\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u041D\u0435\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_32_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0439\u0434\u0435\u043D\u044B \u043F\u043E\u0434\u0445\u043E\u0434\u044F\u0449\u0438\u0435 \u0434\u043B\u044F \u044D\u0442\u043E\u0439 \u0441\u0444\u0435\u0440\u044B \u043A\u043B\u0430\u0441\u0441\u044B. \u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0445? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_32_div_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_div_10_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r67.knownCategory = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041E\u0442\u043A\u0430\u0437\u0430\u0442\u044C\u0441\u044F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_div_10_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r68);

          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r69.addKnownCategories();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0412\u044B\u0431\u0440\u0430\u0442\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_32_div_11_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043A\u043B\u0430\u0441\u0441\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_32_div_25_Template(rf, ctx) {
      if (rf & 1) {
        var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_div_25_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r72);

          var main_r70 = ctx.$implicit;

          var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r71.selectClass(main_r70.ClassId, main_r70);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var main_r70 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", main_r70.Number.split(" ")[1], " ");
      }
    }

    function AddComponent_div_32_li_43_Template(rf, ctx) {
      if (rf & 1) {
        var _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_li_43_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var selected_r73 = ctx.$implicit;

          var ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r74.selectClass(selected_r73.ClassId, selected_r73);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_li_43_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r75);

          var selected_r73 = ctx.$implicit;

          var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r76.addClass(selected_r73);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "system_update_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var selected_r73 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", selected_r73.Title, " ");
      }
    }

    function AddComponent_div_32_div_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0430\u0441\u0441\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_32_div_45_li_3_li_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 109);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 110);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_div_45_li_3_li_11_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r82);

          var child_r80 = ctx.$implicit;

          var ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          return ctx_r81.removeClass(child_r80);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var child_r80 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", child_r80.Title, " ");
      }
    }

    function AddComponent_div_32_div_45_li_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r84 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 103);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 104);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 105);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 106);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_div_45_li_3_Template_button_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r84);

          var list_r78 = ctx.$implicit;

          var ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r83.removeClass(list_r78);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 107);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddComponent_div_32_div_45_li_3_li_11_Template, 9, 1, "li", 108);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var list_r78 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", list_r78.Number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", list_r78.Classes);
      }
    }

    function AddComponent_div_32_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddComponent_div_32_div_45_li_3_Template, 12, 2, "li", 102);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r66.appForm.get("trademarkClasses").value);
      }
    }

    var _c2 = function _c2() {
      return {
        normal: true
      };
    };

    var _c3 = function _c3() {
      return {
        wide: true
      };
    };

    var _c4 = function _c4(a0, a1) {
      return {
        wide: a0,
        normal: a1
      };
    };

    function AddComponent_div_32_Template(rf, ctx) {
      if (rf & 1) {
        var _r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0441\u0444\u0435\u0440\u0443 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0420\u043E\u0434 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 69);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddComponent_div_32_div_9_Template, 2, 0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddComponent_div_32_div_10_Template, 5, 0, "div", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AddComponent_div_32_div_11_Template, 2, 0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 72);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u043E\u0438\u0441\u043A \u043A\u043B\u0430\u0441\u0441\u043E\u0432");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-icon", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "search");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddComponent_div_32_div_25_Template, 2, 1, "div", 82);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "mat-divider", 83);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 86);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_Template_button_click_29_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r85.stepBack();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "arrow_back_ios");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 89);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 92);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_32_Template_button_click_40_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r86);

          var ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r87.addClass(ctx_r87.selectedClass);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "system_update_alt");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AddComponent_div_32_li_43_Template, 9, 1, "li", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddComponent_div_32_div_44_Template, 2, 0, "div", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, AddComponent_div_32_div_45_Template, 4, 1, "div", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", false);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](24, _c4, ctx_r34.canHide, !ctx_r34.canHide));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxFlex", ctx_r34.canHide ? 100 : 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxFlex", ctx_r34.canHide ? 35 : 90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxHide.lt-md", ctx_r34.canHide);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.mainClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx_r34.canHide);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("vertical", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx_r34.canHide);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxFlex", ctx_r34.canHide ? 60 : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxFlex.lt-md", ctx_r34.canHide ? 100 : 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.selectedClass ? ctx_r34.selectedClass.Number : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r34.selectedClass ? ctx_r34.selectedClass.Title : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r34.selectedClasses);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.appForm.get("trademarkClasses").value.length > 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r34.appForm.get("trademarkClasses").value.length > 0);
      }
    }

    function AddComponent_div_33_mat_option_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 127);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_div_33_mat_option_9_Template_mat_option_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96);

          var appl_r94 = ctx.$implicit;

          var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r95.setApplicant(appl_r94);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var appl_r94 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", appl_r94.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", appl_r94.title, " ");
      }
    }

    function AddComponent_div_33_mat_form_field_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0413\u0420\u041D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 128);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r90.appForm.get("applicantOgrn").value);
      }
    }

    function AddComponent_div_33_mat_form_field_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 129);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r91.appForm.get("applicantHead").value);
      }
    }

    function AddComponent_div_33_mat_form_field_44_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0418\u043C\u044F \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 130);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0417\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0438\u0437 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u043D\u044B\u0445");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AddComponent_div_33_mat_option_9_Template, 2, 2, "mat-option", 113);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 111);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-select", 114, 115);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-option", 116);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 117);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 118);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u0418\u041D\u041D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 120);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 119);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041A\u041F\u041F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 121);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddComponent_div_33_mat_form_field_34_Template, 4, 1, "mat-form-field", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-form-field", 112);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 123);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AddComponent_div_33_mat_form_field_39_Template, 4, 1, "mat-form-field", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 124);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-checkbox", 125, 126);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, AddComponent_div_33_mat_form_field_44_Template, 4, 0, "mat-form-field", 122);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](42);

        var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r35.apls);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "IP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r89.value === "UL" ? "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" : "\u0424\u0418\u041E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r35.appForm.get("applicantName").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r35.appForm.get("applicantInn").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.value === "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r89.value === "UL" ? "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441" : "\u0410\u0434\u0440\u0435\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r35.appForm.get("applicantAddress").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r89.value === "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r92.checked);
      }
    }

    var _c5 = function _c5() {
      return {
        vertical: true
      };
    };

    var _c6 = function _c6() {
      return {
        horizontal: true
      };
    };

    var _c7 = function _c7() {
      return {
        flexible: true
      };
    };

    var _c8 = function _c8() {
      return {
        fixed: true
      };
    };

    function AddComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        var _r98 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041E\u043F\u0446\u0438\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0421\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u0434\u0430\u0447\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 131);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-radio-group", 132);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AddComponent_div_34_Template_mat_radio_group_change_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r97.setAppPrice();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 133);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u041C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043A\u0432\u0438\u0442\u0430\u043D\u0446\u0438\u0438. \u0412\u0430\u043C \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043B\u0438\u0448\u044C \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0438 \u043F\u043E\u0434\u0430\u0442\u044C \u0438\u0445 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0424\u0418\u041F\u0421 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " 300 \u0440\u0443\u0431 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-radio-button", 138);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-card", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 135);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u042D\u043B\u0435\u043A\u0442\u0440\u043E\u043D\u043D\u0430\u044F \u0444\u043E\u0440\u043C\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 136);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " \u041C\u044B \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u0438\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u043D\u0435\u043E\u0431\u0445\u043E\u0434\u0438\u043C\u044B\u0435 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B \u0438 \u043A\u0432\u0438\u0442\u0430\u043D\u0446\u0438\u0438. \u0412\u0430\u043C \u043E\u0441\u0442\u0430\u043D\u0435\u0442\u0441\u044F \u043B\u0438\u0448\u044C \u0440\u0430\u0441\u043F\u0435\u0447\u0430\u0442\u0430\u0442\u044C \u0438 \u043F\u043E\u0434\u0430\u0442\u044C \u0438\u0445 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0432 \u0424\u0418\u041F\u0421 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " 3500 \u0440\u0443\u0431 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u0423\u0441\u043B\u0443\u0433\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-checkbox", 140);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AddComponent_div_34_Template_mat_checkbox_ngModelChange_28_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r99.optionHelpState = $event;
        })("change", function AddComponent_div_34_Template_mat_checkbox_change_28_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r98);

          var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r100.setAppPrice();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-card", 134);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 141);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041F\u043E\u043B\u043D\u0430\u044F \u043F\u0440\u043E\u0432\u0435\u0440\u043A\u0430 \u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043A\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 142);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " \u041F\u0440\u043E\u0432\u0435\u0434\u0435\u043D\u0438\u0435 \u044D\u043A\u0441\u043F\u0435\u0440\u0442\u0438\u0437\u044B \u043D\u0430 \u043F\u0440\u0435\u0434\u043C\u0435\u0442 \u043D\u0430\u043B\u0438\u0447\u0438\u044F \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u044B\u0445 \u043F\u0440\u0435\u043F\u044F\u0442\u0441\u0442\u0432\u0438\u0439 \u043A \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u0438 (\u0442\u043E\u0436\u0434\u0435\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0435 \u0438\u043B\u0438 \u0441\u0445\u043E\u0434\u043D\u044B\u0435 \u0442\u043E\u0432\u0430\u0440\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438 \u0438 \u0437\u0430\u044F\u0432\u043A\u0438 \u043D\u0430 \u0422\u0417, \u043C\u0435\u0436\u0434\u0443\u043D\u0430\u0440\u043E\u0434\u043D\u044B\u0435 \u0422\u0417, \u043D\u0430\u0440\u0443\u0448\u0435\u043D\u0438\u0435 \u0413\u041A \u0420\u0424) ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 137);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " 7500 \u0440\u0443\u0431 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c7))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c8));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r36.optionHelpState);
      }
    }

    function AddComponent_div_35_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 169);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 170);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r101.imagePreview, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function AddComponent_div_35_div_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r102.appForm.get("trademarkLogoDescription").value);
      }
    }

    function AddComponent_div_35_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0426\u0432\u0435\u0442\u0430");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_35_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041D\u0435\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AddComponent_div_35_div_27_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r105.appForm.get("trademarkColors").value);
      }
    }

    function AddComponent_div_35_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r106.appForm.get("trademarkUnsec").value);
      }
    }

    function AddComponent_div_35_li_34_li_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r112 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r112.Title, " ");
      }
    }

    function AddComponent_div_35_li_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AddComponent_div_35_li_34_li_3_Template, 2, 1, "li", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cls_r110 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cls_r110.Number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cls_r110.Classes);
      }
    }

    function AddComponent_div_35_div_80_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041A\u041F\u041F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r108.appForm.get("applicantKpp").value);
      }
    }

    function AddComponent_div_35_div_91_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0424\u0418\u041E \u0440\u0443\u043A\u043E\u0432\u043E\u0434\u0438\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r109.appForm.get("applicantHead").value);
      }
    }

    function AddComponent_div_35_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0412\u0441\u0435 \u0433\u043E\u0442\u043E\u0432\u043E! ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 143);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0417\u0430\u044F\u0432\u043A\u0430 \u043D\u0430 \u0442\u043E\u0432\u0430\u0440\u043D\u044B\u0439 \u0437\u043D\u0430\u043A \u0441\u0444\u043E\u0440\u043C\u0438\u0440\u043E\u0432\u0430\u043D\u0430. \u0412\u0441\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u0431\u0443\u0434\u0443\u0442 \u0434\u043E\u0441\u0442\u0443\u043F\u043D\u044B \u0432 \u043B\u0438\u0447\u043D\u043E\u043C \u043A\u0430\u0431\u0438\u043D\u0435\u0442\u0435 \u043F\u043E\u0441\u043B\u0435 \u043E\u043F\u043B\u0430\u0442\u044B ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 139);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 144);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 91);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0437\u0430\u044F\u0432\u043A\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AddComponent_div_35_div_10_Template, 2, 1, "div", 146);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0422\u0438\u043F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "trademark");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AddComponent_div_35_div_22_Template, 5, 1, "div", 150);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 151);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddComponent_div_35_div_24_Template, 3, 0, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddComponent_div_35_div_25_Template, 3, 0, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 153);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, AddComponent_div_35_div_27_Template, 3, 1, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddComponent_div_35_div_28_Template, 3, 1, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u041A\u043B\u0430\u0441\u0441\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 154);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddComponent_div_35_li_34_Template, 4, 2, "li", 155);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 156);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u0434\u0430\u0447\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 160);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](46, "mode");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 159);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](50, "options");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 147);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 158);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0433\u043E\u0441\u043F\u043E\u0448\u043B\u0438\u043D\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 161);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](56, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "div", 162);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "div", 163);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 145);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 164);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0414\u0430\u043D\u043D\u044B\u0435 \u043E \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0422\u0438\u043F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](68, "applicant");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 166);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 157);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "\u0418\u041D\u041D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](80, AddComponent_div_35_div_80_Template, 5, 1, "div", 152);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "\u041E\u0413\u0420\u041D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 165);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 148);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u0410\u0434\u0440\u0435\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 149);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](91, AddComponent_div_35_div_91_Template, 5, 1, "div", 167);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, " \u041A \u043E\u043F\u043B\u0430\u0442\u0435: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](96, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 168);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.imagePreview);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.appForm.get("trademarkName").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 21, ctx_r37.appForm.get("trademarkType").value), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("trademarkLogoDescription").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("trademarkColors").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("trademarkUnsec").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("trademarkColors").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("trademarkUnsec").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r37.appForm.get("trademarkClasses").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](46, 23, ctx_r37.appForm.get("applicationMode").value), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](50, 25, ctx_r37.appForm.get("applicationCheckOption").value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](56, 27, ctx_r37.appForm.get("applicationTax").value, "RUB", "symbol-narrow"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](68, 31, ctx_r37.appForm.get("applicantType").value));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r37.appForm.get("applicantType").value === "UL" ? "\u041F\u043E\u043B\u043D\u043E\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435" : "\u0424\u0418\u041E", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.appForm.get("applicantName").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.appForm.get("applicantInn").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("applicantType").value === "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.appForm.get("applicantOgrn").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r37.appForm.get("applicantAddress").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r37.appForm.get("applicantType").value === "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](96, 33, ctx_r37.appForm.get("applicationPrice").value, "RUB", "symbol-narrow"), " ");
      }
    }

    function AddComponent_button_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_button_38_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r114);

          var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r113.decreasePage();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041D\u0430\u0437\u0430\u0434 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c9 = function _c9() {
      return {
        goback: true
      };
    };

    var _c10 = function _c10() {
      return {
        gobackmobile: true
      };
    };

    var _c11 = function _c11() {
      return ["/account"];
    };

    var _c12 = function _c12(a0) {
      return {
        done: a0
      };
    };

    var _c13 = function _c13(a0, a1) {
      return {
        micropage: a0,
        done: a1
      };
    };

    var _c14 = function _c14(a0, a1) {
      return {
        done: a0,
        waiting: a1
      };
    };

    var _c15 = function _c15(a0) {
      return {
        micropage: a0
      };
    };

    var AddComponent =
    /*#__PURE__*/
    function () {
      function AddComponent(router, clsService, accService, auth, _snackBar) {
        _classCallCheck(this, AddComponent);

        this.router = router;
        this.clsService = clsService;
        this.accService = accService;
        this.auth = auth;
        this._snackBar = _snackBar;
        this.posting = false;
        this.apls = []; // public currentForm = '';

        this.currentPage = '';
        this.pageNames = ['name', 'type', 'logo', 'extra', 'classes', 'person', 'options', 'done'];
        this.donePages = [false, false, false, false, false, false, false, false];
        this.pagePosition = 0;
        this.knownCategory = true;
        this.canHide = false;
        this.selectedClass = null;
        this.mainClasses = null;
        this.selectedClasses = null;
        this.discount = false; // public persons = ['Работа', 'Дима'];

        this.optionHelpState = false;
      }

      _createClass(AddComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.aSub = this.clsService.getMain().subscribe(function (classes) {
            _this2.mainClasses = classes;
          }, function (error) {
            console.log(error);

            if (error.status === 401) {
              _this2.auth.logout();
            }
          });
          this.upAplsSub = this.accService.getAllApplicants().subscribe(function (data) {
            console.log('some data', data);
            _this2.apls = data;
          }, function (error) {
            console.log('error', error);
          });
          this.appForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            trademarkName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            trademarkType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            trademarkLogo: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            trademarkLogoDescription: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            trademarkColors: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            trademarkUnsec: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            trademarkField: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            trademarkClasses: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantId: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            applicantType: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantInn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantKpp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantOgrn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            applicantAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantHead: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicantCanSave: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false),
            applicantSavingName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            applicationMode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicationTax: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicationPrice: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            applicationCheckOption: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]) // image: new FormControl()

          });
          this.currentPage = this.pageNames[this.pagePosition]; // this.currentForm = 'trademarkName';
        }
      }, {
        key: "increasePage",
        value: function increasePage() {
          var canMove = true;
          var snackAction = ''; // window.scroll(0, 0);
          // console.log('position', window.scrollX);

          switch (this.pagePosition) {
            case 0:
              canMove = !this.appForm.get('trademarkName').invalid;
              snackAction = 'Необходимо ввести название';
              break;

            case 1:
              canMove = !this.appForm.get('trademarkType').invalid;
              snackAction = 'Необходимо выбрать тип';
              break;

            case 2:
              break;

            case 3:
              break;

            case 4:
              if (this.appForm.get('trademarkClasses').value.length === 0) {
                canMove = false;
                snackAction = 'Необходимо выбрать минимум один класс';
              }

              if (this.appForm.get('trademarkField').invalid) {
                canMove = false;
                snackAction = 'Необходимо указать сферу деятельности';
              }

              if (this.appForm.get('trademarkClasses').value.length === 0 && this.appForm.get('trademarkField').invalid) {
                canMove = false;
                snackAction = 'Необходимо выбрать минимум один класс и указать сферу деятельности';
              }

              break;

            case 5:
              snackAction = 'Заполните форму заявителя полностью';

              if (this.appForm.get('applicantType').invalid) {
                canMove = false;
              }

              if (this.appForm.get('applicantName').invalid) {
                canMove = false;
              }

              if (this.appForm.get('applicantInn').invalid) {
                canMove = false;
              }

              if (this.appForm.get('applicantKpp').invalid) {
                canMove = false;
              }

              if (this.appForm.get('applicantType').value === 'UL') {
                if (this.appForm.get('applicantOgrn').invalid) {
                  canMove = false;
                }
              }

              if (this.appForm.get('applicantType').value === 'UL') {
                if (this.appForm.get('applicantHead').invalid) {
                  canMove = false;
                }
              }

              if (this.appForm.get('applicantCanSave').value) {
                if (this.appForm.get('applicantSavingName').invalid) {
                  canMove = false;
                }
              }

              break;

            case 6:
              canMove = !this.appForm.get('applicationMode').invalid;
              snackAction = 'Необходимо выбрать способ публикации';
              break;
          }

          if (canMove) {
            if (this.pagePosition < 7) {
              this.donePages[this.pagePosition] = true;
              this.pagePosition++;
              this.currentPage = this.pageNames[this.pagePosition];
            } else {
              // console.log('we are ready to post')
              this.saveApp();
            }
          } else {
            this.openSnackBar(snackAction, 'OK');
          }
        }
      }, {
        key: "decreasePage",
        value: function decreasePage() {
          window.scroll(0, 0);

          if (this.pagePosition > 0) {
            this.pagePosition--;
            this.currentPage = this.pageNames[this.pagePosition];
          } else {}
        }
      }, {
        key: "selectType",
        value: function selectType() {}
      }, {
        key: "addKnownCategories",
        value: function addKnownCategories() {
          this.knownCategory = false;
        }
      }, {
        key: "selectClass",
        value: function selectClass(id, mainClass) {
          var _this3 = this;

          this.searchSub = this.clsService.getChildren(id).subscribe(function (classes) {
            // ===== надо зайти в базу и скачать дочерние классы выбранного элемента
            _this3.selectedClasses = classes;
          });
          this.canHide = true; // console.log(index);

          this.selectedClass = mainClass; // console.log('selected class', this.selectedClass);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }

          if (this.searchSub) {
            this.searchSub.unsubscribe();
          }

          if (this.upClassSub) {
            this.upClassSub.unsubscribe();
          }

          if (this.upAplsSub) {
            this.upAplsSub.unsubscribe();
          }
        }
      }, {
        key: "stepBack",
        value: function stepBack() {
          var _this4 = this;

          if (this.selectedClass.ParentId === '0') {
            this.canHide = false;
            this.selectedClass = null;
          } else {
            var parentId = this.selectedClass.ParentId;
            console.log('old parent', parentId);
            this.upClassSub = this.clsService.getById(parentId).subscribe(function (res) {
              _this4.selectedClass = res;
            });
            console.log('old parent', this.selectedClass.ParentId);
            this.searchSub = this.clsService.getUp(this.selectedClass.ParentId).subscribe(function (classes) {
              _this4.selectedClasses = classes;
            });
          }
        }
      }, {
        key: "setAppPrice",
        value: function setAppPrice() {
          var required = this.appForm.get('applicationMode').value === 'print' ? 300 : 3500;

          if (required !== 300) {
            this.discount = true;
          } else {
            this.discount = false;
          }

          this.calcAppTax();
          var option = this.appForm.get('applicationCheckOption').value ? 7500 : 0;
          this.appForm.controls.applicationPrice.setValue(required + option);
        }
      }, {
        key: "calcAppTax",
        value: function calcAppTax() {
          var classes = this.appForm.get('trademarkClasses').value.length;

          if (classes > 0) {
            var part_210 = 3500 + (classes - 5 > 0 ? (classes - 5) * 1000 : 0);
            var part_240 = 11500 + classes * 2500;
            var part_211 = 16000 + (classes - 5 > 0 ? (classes - 5) * 1000 : 0);
            var part_214 = 2000;

            if (this.discount) {
              part_210 = part_210 * 0.7;
              part_240 = part_240 * 0.7;
              part_211 = part_211 * 0.7;
              part_214 = part_214 * 0.7;
            }

            this.appForm.controls.applicationTax.setValue(part_210 + part_240 + part_211 + part_214);
          }
        }
      }, {
        key: "addClass",
        value: function addClass(selected) {
          // ===== Проверяем это основной класс или его подклассы
          if (selected.MainclassId === '0') {
            var masterCandidate = this.appForm.controls.trademarkClasses.value.find(function (c) {
              return c.Id === selected.ClassId;
            }); // ===== если он основной и еще не добавлен, то надо добавлять

            if (!masterCandidate) {
              var sClass = {
                Id: selected.ClassId,
                Number: selected.Number,
                Classes: []
              };
              this.appForm.controls.trademarkClasses.value.push(sClass);
              this.openSnackBar("\u041A\u043B\u0430\u0441\u0441 ".concat(selected.Number, " \u0432\u044B\u0431\u0440\u0430\u043D"), 'OK');
            } else {
              this.openSnackBar("\u0414\u0430\u043D\u043D\u044B\u0439 \u043A\u043B\u0430\u0441\u0441 \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043D", 'OK');
            }
          } else {
            // ===== проверяем, добавлен ли его основной класс уже
            var candidate = this.appForm.controls.trademarkClasses.value.find(function (c) {
              return c.Id === selected.MainclassId;
            });

            if (candidate) {
              // ===== проверяем, а выбрали ли мы до этого класс целиком или только подклассы
              if (candidate.Classes.length > 0) {
                // ===== и если мы такой класс не добавляли, то можно добавить
                if (!candidate.Classes.find(function (x) {
                  return x.ClassId === selected.ClassId;
                })) {
                  candidate.Classes.push(selected);
                  this.openSnackBar("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F ".concat(selected.Number, " \u0432\u044B\u0431\u0440\u0430\u043D\u0430"), 'OK');
                } else {
                  this.openSnackBar("\u0414\u0430\u043D\u043D\u0430\u044F \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F \u0443\u0436\u0435 \u0432\u044B\u0431\u0440\u0430\u043D\u0430", 'OK');
                }
              }
            } else {
              // ===== значит основной  еще не добавлен и нам надо его создать, но пока без названия
              // console.log('the parent class is new', selected)
              var _sClass = {
                Id: selected.MainclassId,
                Number: '',
                Classes: [selected]
              }; // ===== а теперь нам нужно выяснить, как же звали основной класс

              this.upClassSub = this.clsService.getById(selected.MainclassId).subscribe(function (res) {
                _sClass.Number = res.Number;
              }); // ===== и полноценно добавить вновь выбранный

              this.appForm.controls.trademarkClasses.value.push(_sClass);
              this.openSnackBar("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F ".concat(selected.Number, " \u0432\u044B\u0431\u0440\u0430\u043D\u0430"), 'OK');
            }
          }

          this.calcAppTax();
          console.log('classes are', this.appForm.controls.trademarkClasses.value);
        }
      }, {
        key: "removeClass",
        value: function removeClass(selected) {
          if (!selected.MainclassId) {
            this.appForm.controls['trademarkClasses'].value.pop(selected);
            this.openSnackBar("\u041A\u043B\u0430\u0441\u0441 ".concat(selected.Number, " \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445"), 'OK');
          } else {
            var candidate = this.appForm.controls['trademarkClasses'].value.find(function (x) {
              return x.Id === selected.MainclassId;
            });

            if (candidate) {
              candidate.Classes.pop(selected);

              if (candidate.Classes.length === 0) {
                this.appForm.controls['trademarkClasses'].value.pop(candidate);
                this.openSnackBar("\u041A\u043B\u0430\u0441\u0441 ".concat(candidate.Number, " \u0443\u0434\u0430\u043B\u0435\u043D \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445"), 'OK');
              } else {
                this.openSnackBar("\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u044F ".concat(selected.Number, " \u0443\u0434\u0430\u043B\u0435\u043D\u0430 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430 \u0432\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0445"), 'OK');
              }
            }
          }

          this.calcAppTax();
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this._snackBar.open(message, action, {
            duration: 2000
          });
        }
      }, {
        key: "saveApp",
        value: function saveApp() {
          var _this5 = this;

          // let sendingApp = this.appForm.value;
          // if (this.image) { sendingApp.image = this.image; };
          this.posting = true;

          if (this.image) {
            this.logoSub = this.accService.registerLogo(this.image).subscribe(function (_ref) {
              var url = _ref.url;

              _this5.appForm.controls.trademarkLogo.setValue(url);

              _this5.postSub = _this5.accService.registerApplication(_this5.appForm.value).subscribe(function () {
                _this5.router.navigate(['/applications']);
              }, function (error) {
                // console.log('something go wrong');
                _this5.openSnackBar('Не удается завершить формирование заявки', 'OK');

                _this5.posting = false;
              });
            }, function (error) {
              _this5.openSnackBar('Не удалось загрузить логотип', 'OK');

              _this5.posting = false;
            });
          } else {
            this.postSub = this.accService.registerApplication(this.appForm.value).subscribe(function () {
              _this5.router.navigate(['/applications']);
            }, function (error) {
              // console.log('something go wrong');
              _this5.openSnackBar('Не удается завершить формирование заявки', 'OK');

              _this5.posting = false;
            });
          } // console.log(this.appForm.value)

        }
      }, {
        key: "setApplicant",
        value: function setApplicant(appl) {
          // @ts-ignore
          this.typeRef.value = appl.type; // console.log(this.typeRef.nativeElement, appl.type)

          this.appForm.controls.applicantAddress.setValue(appl.address);
          this.appForm.controls.applicantType.setValue(appl.type);
          this.appForm.controls.applicantName.setValue(appl.name);
          this.appForm.controls.applicantHead.setValue(appl.head);
          this.appForm.controls.applicantInn.setValue(appl.inn);
          this.appForm.controls.applicantKpp.setValue(appl.kpp);
          this.appForm.controls.applicantOgrn.setValue(appl.ogrn);
          this.appForm.controls.applicantId.setValue(appl._id);
        }
      }, {
        key: "loadImage",
        value: function loadImage() {
          this.uploadRef.nativeElement.click();
        }
      }, {
        key: "onFileUpload",
        value: function onFileUpload(event) {
          var _this6 = this;

          var file = event.target.files[0];
          this.image = file;
          var reader = new FileReader();

          reader.onload = function () {
            _this6.imagePreview = reader.result;
          };

          reader.readAsDataURL(file);
        }
      }]);

      return AddComponent;
    }();

    AddComponent.ɵfac = function AddComponent_Factory(t) {
      return new (t || AddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]));
    };

    AddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AddComponent,
      selectors: [["app-add"]],
      viewQuery: function AddComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeRef = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.uploadRef = _t.first);
        }
      },
      decls: 74,
      vars: 118,
      consts: [[3, "ngClass", "ngClass.lt-md"], ["mat-icon-button", "", 3, "routerLink"], ["fxLayout", "column", "fxHide", "true", 1, "checkout", 3, "fxShow"], ["fxLayout", "row"], ["fxFlex", "70", 1, "popup-field"], ["fxFlex", "30", 1, "popup-price"], ["fxLayout", "row", "fxHide", "true", 3, "fxShow"], ["style", "padding-bottom: 15px", 4, "ngIf"], [4, "ngIf"], ["fxLayoutAlign", "center center", "style", "padding-top: 15px", 4, "ngIf"], ["fxLayout", "column", 1, "block-one", 3, "formGroup"], ["fxFlex", "65", 1, "stepper-content"], ["fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "stepper-control"], ["fxFlex", "25", "fxFlex.lt-md", "30", 2, "padding-left", "15px"], ["mat-button", "", "class", "button alternative-button", "type", "button", 3, "click", 4, "ngIf"], ["fxFlex", "50", "fxFlex.lt-md", "40", "fxLayout", "row", "fxLayoutAlign", "center center"], ["fxLayoutAlign", "center center", "mat-mini-fab", "", 1, "mini-page", 3, "ngClass", "ngClass.lt-md"], ["fxHide.lt-md", "true", 1, "text-alternative", "stepper-label"], ["fxHide.lt-md", "true", 1, "page-divider", "done", 3, "ngClass"], ["fxHide.lt-md", "true", 1, "page-divider", 3, "ngClass"], ["color", "primary", "fxLayoutAlign", "center center", "mat-mini-fab", "", 1, "mini-page", 3, "ngClass", "ngClass.lt-md"], ["fxFlex", "25", "fxFlex.lt-md", "30", "fxLayoutAlign", "end center", 2, "padding-right", "15px"], ["mat-raised-button", "", "type", "button", 1, "button", "primary-button", 3, "disabled", "click"], [2, "padding-bottom", "15px"], ["fxLayoutAlign", "center center", 2, "padding-top", "15px"], ["mat-raised-button", "", 1, "button", "payment-button"], ["fxLayout", "column", "fxLayoutAlign", "center center"], [1, "text-main", "header", "step"], ["fxLayoutAlign", "center center", 1, "step-content", "normal"], ["fxLayoutAlign", "center center", 2, "width", "100%"], ["appearance", "outline", 1, "step-input"], ["matInput", "", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0442\u043E\u0432\u0430\u0440\u043D\u043E\u0433\u043E \u0437\u043D\u0430\u043A\u0430", "required", "", "formControlName", "trademarkName"], [1, "step-content", "wide"], ["formControlName", "trademarkType", "fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-around center", 2, "width", "100%"], ["fxHide.lt-md", "true", 1, "selector", 3, "click"], ["fxLayout", "column", 1, "radio-normal", 3, "click"], ["src", "assets/images/sign-os.png", 2, "width", "200px", "height", "200px"], [1, "text-main", "card-label"], ["value", "word"], ["radioWord", ""], ["fxHide", "true", "fxShow.lt-md", "true", 1, "radio-mini"], ["fxLayout", "row", 3, "click"], ["src", "assets/images/sign-os-mini.png", 2, "width", "80px", "height", "80px"], ["fxLayoutAlign", "center center", 1, "text-main", "card-label", 2, "padding-left", "15px"], ["src", "assets/images/sign.png", 2, "width", "200px", "height", "200px"], ["value", "image"], ["radioImage", ""], ["src", "assets/images/sign-mini.png", 2, "width", "80px", "height", "80px"], ["src", "assets/images/sign-comb.png", 2, "width", "200px", "height", "200px"], ["value", "complex"], ["radioComplex", ""], ["src", "assets/images/sign-comb-mini.png", 2, "width", "80px", "height", "80px"], [1, "text-alternative", "optional"], ["fxLayoutAlign", "center center", 1, "skip-content"], ["mat-button", "", "type", "button", 1, "button", "alternative-button", 3, "click"], [2, "width", "100%"], [2, "margin", "15px"], ["class", "text-main", "style", "text-align: center; font-size: 110%", 4, "ngIf"], [2, "height", "auto", "max-height", "100px", "width", "auto", "max-width", "360px", 3, "src"], [2, "padding", "15px"], ["mat-flat-button", "", 1, "button", "primary-button", 2, "margin-left", "15px", 3, "click"], ["type", "file", "accept", "image/jpeg,image/png", 2, "display", "none", 3, "change"], ["uploader", ""], [1, "text-main", "subheader"], ["matInput", "", "placeholder", "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043B\u043E\u0433\u043E\u0442\u0438\u043F\u0430", "required", "", "formControlName", "trademarkLogoDescription"], [1, "text-main", 2, "text-align", "center", "font-size", "110%"], ["matInput", "", "placeholder", "\u0426\u0432\u0435\u0442\u0430", "required", "", "formControlName", "trademarkColors"], ["matInput", "", "placeholder", "\u042D\u043B\u0435\u043C\u0435\u043D\u0442\u044B", "required", "", "formControlName", "trademarkUnsec"], ["matInput", "", "placeholder", "\u0420\u043E\u0434 \u0434\u0435\u044F\u0442\u0435\u043B\u044C\u043D\u043E\u0441\u0442\u0438", "required", "", "formControlName", "trademarkField"], ["class", "text-main subheader", 4, "ngIf"], ["class", "skip-content", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayoutAlign", "center center", 1, "step-content", 3, "ngClass.lt-md", "ngClass"], [1, "test", 3, "ngClass.lt-md", "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "center start"], ["fxLayoutAlign", "center", 2, "width", "100%"], ["appearance", "outline", 3, "fxFlex"], ["matInput", "", "placeholder", "\u041F\u043E\u0438\u0441\u043A", "required", ""], ["mat-icon-button", "", "matSuffix", ""], ["matSuffix", ""], ["fxLayout", "row", "fxLayoutAlign", "center", 2, "width", "100%"], ["fxLayout", "row wrap", "fxLayoutAlign", "center start", 3, "fxFlex", "fxHide.lt-md"], ["style", "border: 1px solid lightgray", "class", "main-class text-alternative", "fxFlex", "20", 3, "click", 4, "ngFor", "ngForOf"], ["fxHide.lt-md", "true", 2, "margin-right", "25px", "margin-left", "25px", 3, "vertical", "fxShow"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "width", "100%", "height", "400px", 3, "fxShow", "fxFlex", "fxFlex.lt-md"], ["fxFlex", "10", "fxLayoutAlign", "start", 2, "background", "#f5f5f5", "width", "100%", "padding-left", "0px"], ["mat-icon-button", "", 3, "click"], ["fxFlex", "85", 2, "width", "100%", "height", "100%", "overflow-y", "scroll"], [2, "list-style", "none", "padding", "0", "margin", "0"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "background", "#f5f5f5", "width", "100%"], ["fxLayout", "column", "fxLayoutAlign", "start"], [1, "text-main", "class-header"], [1, "text-alternative", "class-description"], ["mat-icon-button", "", "fxHide", "false", 3, "click"], ["class", "selectable", "style", "width: 100%; ; margin-left: 0; border-bottom: 2px solid #f5f5f5", "fxLayout", "row", "fxLayoutAlign", "space-between center", 4, "ngFor", "ngForOf"], ["class", "step-content normal", "fxLayoutAlign", "center center", 4, "ngIf"], ["mat-button", "", "type", "button", 1, "button", "primary-button", 3, "click"], ["fxFlex", "20", 1, "main-class", "text-alternative", 2, "border", "1px solid lightgray", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "selectable", 2, "width", "100%", "; margin-left", "0", "border-bottom", "2px solid #f5f5f5"], ["fxFlex", "90", "fxLayout", "column", 2, "text-align", "left", 3, "click"], [1, "text-main", "element-header"], ["fxFlex", "10", "fxLayoutAlign", "center center"], ["style", "width: 100%;  margin-left: 0", 4, "ngFor", "ngForOf"], [2, "width", "100%", "margin-left", "0"], [2, "text-align", "left", "background", "#f5f5f5"], ["fxFlex", "90"], ["fxFlex", "10"], [2, "list-style", "none", "margin", "0", "padding", "0"], ["style", "width: 100%; margin-left: 0; border-bottom: 2px solid #f5f5f5", 4, "ngFor", "ngForOf"], [2, "width", "100%", "margin-left", "0", "border-bottom", "2px solid #f5f5f5"], [1, "text-alternative", "element-header", 2, "padding-left", "40px"], [1, "step-content", "normal"], ["appearance", "outline", 2, "width", "90%", "max-width", "360px"], [3, "value", "click", 4, "ngFor", "ngForOf"], ["formControlName", "applicantType"], ["appMode", ""], [3, "value"], ["matInput", "", "placeholder", "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438", "required", "", "formControlName", "applicantName", 3, "value"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "90%", "max-width", "360px"], ["appearance", "outline", 2, "width", "45%", "max-width", "150px"], ["matInput", "", "placeholder", "\u0418\u041D\u041D", "required", "", "formControlName", "applicantInn", 3, "value"], ["matInput", "", "placeholder", "\u041A\u041F\u041F", "required", "", "formControlName", "applicantKpp"], ["appearance", "outline", "style", "width: 90%; max-width: 360px", 4, "ngIf"], ["matInput", "", "placeholder", "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441", "required", "", "formControlName", "applicantAddress", 3, "value"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "width", "90%", "max-width", "360px", "margin-bottom", "15px"], ["required", "", "formControlName", "applicantCanSave"], ["saveForLater", ""], [3, "value", "click"], ["matInput", "", "placeholder", "\u041E\u0413\u0420\u041D", "required", "", "formControlName", "applicantOgrn", 3, "value"], ["matInput", "", "placeholder", "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440", "required", "", "formControlName", "applicantHead", 3, "value"], ["matInput", "", "placeholder", "\u0418\u043C\u044F \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438", "required", "", "formControlName", "applicantSavingName"], ["fxLayoutAlign", "center", 1, "step-content", "ultrawide"], ["formControlName", "applicationMode", "fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between center", 3, "change"], ["value", "print", 3, "ngClass.lt-md", "ngClass"], [2, "width", "70vw", "max-width", "360px", "padding-bottom", "0"], [1, "text-main", "option-header", 2, "height", "25px"], [1, "text-alternative", "option-description", 3, "ngClass.lt-md", "ngClass"], ["fxLayoutAlign", "start center", 1, "text-main", "option-price", 2, "height", "40px"], ["value", "electric", 3, "ngClass.lt-md", "ngClass"], ["fxLayoutAlign", "center", 1, "step-content", "wide"], ["formControlName", "applicationCheckOption", 3, "ngModel", "ngModelChange", "change"], [1, "text-main", "option-header"], [1, "text-alternative", "option-description"], [1, "text-main", "subheader", "wide"], ["fxLayout", "row", "fxLayout.lt-md", "column", "fxLayoutAlign", "space-between start", 2, "width", "100%"], ["fxFlex", "42", "fxFlex.lt-md", "100", "fxLayout", "column", "fxLayoutAlign", "center center", 2, "width", "100%", "padding", "15px"], ["class", "summary-row", 4, "ngIf"], ["fxLayout", "column", "fxLayoutAlign", "start start", 1, "summary-row"], [1, "text-alternative", "label"], [1, "text-main", "value", "line"], ["fxLayout", "column", "fxLayoutAlign", "start start", "class", "summary-row", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 1, "summary-row"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "start start", "style", "width: 100%", 4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-between start", 2, "width", "100%"], [2, "padding", "15px", "margin", "0"], [4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "summary-row"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "start start", 2, "width", "100%"], [1, "text-main", "label"], ["fxFlex", "45", "fxLayout", "column", "fxLayoutAlign", "end bottom", 2, "width", "100%"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "100%"], [1, "text-alternative", "value", "line"], ["fxHide.lt-md", "true", "fxShow", "true", 2, "background", "lightgray", "width", "1px", "height", "100%"], ["fxShow.lt-md", "true", "fxHide", "true", 2, "background", "lightgray", "height", "1px", "width", "100%"], [1, "text-alternative", "class-header"], ["fxLayout", "column", "fxLayoutAlign", "start start", 2, "width", "100%", "padding-top", "15px"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "100%", "padding-top", "15px"], ["fxLayout", "column", "fxLayoutAlign", "start start", "style", "width: 100%; padding-top: 15px", 4, "ngIf"], [1, "text-alternative", "subheader"], [1, "summary-row"], [2, "height", "auto", "width", "auto", "max-height", "75px", "max-width", "75px", 3, "src"]],
      template: function AddComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u043A\u043B\u0430\u0441\u0441\u043E\u0432:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0420\u0430\u0437\u043C\u0435\u0440 \u0433\u043E\u0441\u043F\u043E\u0448\u043B\u0438\u043D\u044B:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, AddComponent_div_23_Template, 1, 0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, AddComponent_mat_divider_24_Template, 1, 0, "mat-divider", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AddComponent_div_25_Template, 3, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AddComponent_div_28_Template, 9, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AddComponent_div_29_Template, 50, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AddComponent_div_30_Template, 28, 2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, AddComponent_div_31_Template, 24, 0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, AddComponent_div_32_Template, 46, 27, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AddComponent_div_33_Template, 45, 11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AddComponent_div_34_Template, 37, 17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, AddComponent_div_35_Template, 100, 37, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AddComponent_button_38_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "mat-divider", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0422\u0438\u043F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "mat-divider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " \u041B\u043E\u0433\u043E\u0442\u0438\u043F ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-divider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "\u0414\u043E\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C\u043D\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "mat-divider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "\u041A\u043B\u0430\u0441\u0441\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-divider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u0417\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "mat-divider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "\u041E\u043F\u0446\u0438\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "mat-divider", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "\u0413\u043E\u0442\u043E\u0432\u043E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AddComponent_Template_button_click_72_listener() {
            return ctx.increasePage();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](55, _c9))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](56, _c10));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](57, _c11));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx.appForm.get("trademarkClasses").value.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.appForm.get("trademarkClasses").value.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx.appForm.get("applicationTax").value !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](16, 47, ctx.appForm.get("applicationTax").value, "RUB", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx.appForm.get("applicationPrice").value !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](22, 51, ctx.appForm.get("applicationPrice").value, "RUB", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.appForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "type");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "logo");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "extra");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "classes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "person");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "options");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage === "done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentPage !== "name");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](58, _c12, ctx.donePages[0]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](60, _c13, ctx.currentPage !== "name", ctx.donePages[0]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](63, _c14, ctx.donePages[0], !ctx.donePages[0]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](66, _c12, ctx.donePages[1]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](68, _c13, ctx.currentPage !== "type", ctx.donePages[1]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](71, _c14, ctx.donePages[1], !ctx.donePages[1]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](74, _c12, ctx.donePages[2]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](76, _c13, ctx.currentPage !== "logo", ctx.donePages[2]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](79, _c14, ctx.donePages[2], !ctx.donePages[2]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](82, _c12, ctx.donePages[3]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](84, _c13, ctx.currentPage !== "extra", ctx.donePages[3]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](87, _c14, ctx.donePages[3], !ctx.donePages[3]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](90, _c12, ctx.donePages[4]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](92, _c13, ctx.currentPage !== "classes", ctx.donePages[4]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](95, _c14, ctx.donePages[4], !ctx.donePages[4]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](98, _c12, ctx.donePages[5]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](100, _c13, ctx.currentPage !== "person", ctx.donePages[5]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](103, _c14, ctx.donePages[5], !ctx.donePages[5]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](106, _c12, ctx.donePages[6]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](108, _c13, ctx.currentPage !== "options", ctx.donePages[6]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](111, _c14, ctx.donePages[6], !ctx.donePages[6]));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](114, _c12, ctx.donePages[7]))("ngClass.lt-md", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](116, _c15, ctx.currentPage !== "done"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.posting);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.currentPage === "done" ? "\u0413\u043E\u0442\u043E\u0432\u043E" : "\u0414\u0430\u043B\u0435\u0435", " ");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_8__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_11__["DefaultLayoutAlignDirective"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCard"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_16__["MatRadioButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardContent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardFooter"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatSuffix"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_19__["MatCheckboxRequiredValidator"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["CurrencyPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_20__["TrademarkPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_20__["ModePipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_20__["OptionPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_20__["ApplicantPipe"]],
      styles: [".stepper-content[_ngcontent-%COMP%] {\r\n  background: lightgrey;\r\n  padding: 25px;\r\n}\r\n\r\n.stepper-control[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  width: 100%;\r\n  background: white;\r\n  height: 90px;\r\n  bottom: 0;\r\n}\r\n\r\n.stepper-label[_ngcontent-%COMP%] {\r\n  padding-top: 45px;\r\n  color: #5f6368;\r\n}\r\n\r\n.radio-normal[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px\r\n}\r\n\r\n.radio-mini[_ngcontent-%COMP%] {\r\n  margin-bottom: 15px;\r\n  width: 79vw;\r\n  max-width: 350px;\r\n}\r\n\r\n.goback[_ngcontent-%COMP%] {\r\n  position: fixed;\r\n  z-index: 2;\r\n  margin-left: 15px;\r\n  margin-top: 15px;\r\n  height: 35px;\r\n  width: 35px;\r\n}\r\n\r\n.gobackmobile[_ngcontent-%COMP%] {\r\n  background: #f5f5f5;\r\n  width: 100%;\r\n  padding-left: 15px;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  display: none;\r\n  \r\n  width: 0;\r\n}\r\n\r\n.checkout[_ngcontent-%COMP%] {\r\n  width: 280px;\r\n  position: fixed;\r\n  right: 15px;\r\n  z-index: 2;\r\n  margin-right: 15px;\r\n  margin-top: 25px;\r\n  padding: 15px;\r\n  background: white;\r\n  border-radius: 6px;\r\n  box-shadow: 0 0 10px #5f6368;\r\n}\r\n\r\n.mini-page[_ngcontent-%COMP%] {\r\n  height: 10px;\r\n  width: 10px;\r\n  margin: 3px;\r\n  background: #5f6368;\r\n}\r\n\r\n.micropage[_ngcontent-%COMP%] {\r\n  height: 6px;\r\n  width: 6px;\r\n  margin: 4px;\r\n  background: #5f6368;\r\n}\r\n\r\n.done[_ngcontent-%COMP%] {\r\n  background: #1e73e8;\r\n}\r\n\r\n.waiting[_ngcontent-%COMP%] {\r\n  background: #5f6368;\r\n}\r\n\r\n.page-divider[_ngcontent-%COMP%] {\r\n\r\n  \r\n  height: .07rem;\r\n  width: 100px\r\n}\r\n\r\n.selector[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background: #2196f3;\r\n}\r\n\r\n.class-header[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.4rem;\r\n  color: #202124;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  padding-right: 25px;\r\n  padding-left: 25px;\r\n  text-wrap: normal;\r\n}\r\n\r\n.class-description[_ngcontent-%COMP%] {\r\n  font-size: 105%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.3rem;\r\n  color: #202124;\r\n  margin-bottom: 15px;\r\n  padding-right: 25px;\r\n  padding-left: 25px;\r\n  text-wrap: normal;\r\n}\r\n\r\n.element-header[_ngcontent-%COMP%] {\r\n  font-size: 115%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.4rem;\r\n  color: #202124;\r\n  padding-left: 25px;\r\n  margin-top: 15px;\r\n  margin-bottom: 15px;\r\n  padding-right: 25px;\r\n  text-wrap: normal;\r\n}\r\n\r\n.option-header[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.4rem;\r\n  color: #202124;\r\n  margin-top: 15px;\r\n  \r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  text-wrap: normal;\r\n  white-space: initial;\r\n}\r\n\r\n.option-description[_ngcontent-%COMP%] {\r\n  font-size: 105%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.3rem;\r\n  color: #5f6368;\r\n  margin-bottom: 10px;\r\n  margin-top: 10px;\r\n  padding-right: 15px;\r\n  padding-left: 15px;\r\n  text-wrap: normal;\r\n  white-space: initial;\r\n}\r\n\r\n.option-price[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.4rem;\r\n  color: #202124;\r\n  padding-left: 15px;\r\n  \r\n  \r\n}\r\n\r\n.crd[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  background: #518bf6;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.card-label[_ngcontent-%COMP%] {\r\n  font-family: 'Google Sans',Roboto,Arial,sans-serif;\r\n  font-size: 1.175rem;\r\n  font-weight: 400;\r\n  color: #202124;\r\n  text-align: center;\r\n}\r\n\r\n.line[_ngcontent-%COMP%] {\r\n  padding-top: 10px;\r\n}\r\n\r\n.step[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  width: 100%;\r\n  \r\n  text-align: center;\r\n}\r\n\r\n.step-footer[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  width: 100%;\r\n  max-width: 450px;\r\n}\r\n\r\n.optional[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  color: #5f6368;\r\n}\r\n\r\n.ultrawide[_ngcontent-%COMP%] {\r\n  max-width: 1000px;\r\n}\r\n\r\n.skip-content[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.step-input[_ngcontent-%COMP%] {\r\n  max-width: 360px;\r\n  width: 90%;\r\n  padding-top: 20px\r\n}\r\n\r\n.\r\n\r\n.wide-bar[_ngcontent-%COMP%] {\r\n  max-width: none;\r\n  width: 100%;\r\n}\r\n\r\n.classheader[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  font-size: 110%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.7rem;\r\n  color: #202124;\r\n  \r\n  \r\n}\r\n\r\n.classbutton[_ngcontent-%COMP%] {\r\n  font-family: 'Google Sans',Arial,sans-serif;\r\n  font-weight: 500;\r\n  letter-spacing: .01785714em;\r\n  font-size: 1.03rem;\r\n  line-height: 1.83rem;\r\n  padding-bottom: 5px;\r\n  padding-top: 5px;\r\n}\r\n\r\n.main-class[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  height: auto;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n}\r\n\r\n.main-class[_ngcontent-%COMP%]:hover {\r\n  color: white;\r\n  background: #518bf6;\r\n  cursor: pointer\r\n}\r\n\r\n.fixed[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n}\r\n\r\n.flexible[_ngcontent-%COMP%] {\r\n  height: auto;\r\n}\r\n\r\n.vertical[_ngcontent-%COMP%] {\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.horizontal[_ngcontent-%COMP%] {\r\n  margin-left: 15px;\r\n  margin-right: 15px;\r\n}\r\n\r\n.test[_ngcontent-%COMP%] {\r\n  \r\n  width: 100%;\r\n  \r\n}\r\n\r\n.label[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  \r\n  color: #5f6368;\r\n}\r\n\r\n.value[_ngcontent-%COMP%] {\r\n  font-size: 107%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  \r\n  text-wrap: normal;\r\n  white-space: initial;\r\n}\r\n\r\n.summary-row[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  width: 100%;\r\n}\r\n\r\n.popup-field[_ngcontent-%COMP%] {\r\n  font-size: 115%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.7rem;\r\n  color: #5f6368;\r\n}\r\n\r\n.popup-price[_ngcontent-%COMP%] {\r\n  font-size: 115%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.7rem;\r\n  color: #202124;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQXFCO0VBQ3JCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGVBQWU7RUFDZixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHdCQUF3QjtBQUMxQjs7QUFJQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFDQSxvQkFBb0I7O0FBQ3BCLHdDQUF3Qzs7QUFFeEMsUUFBUTs7QUFDUix3Q0FBd0M7O0FBRXhDLG1CQUFtQjs7QUFDbkIsOEVBQThFOztBQUM5RSw2QkFBNkI7O0FBQzdCLElBQUk7O0FBQ0o7RUFDRSxrREFBa0Q7RUFDbEQsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUdBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjs7QUFJQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVjtBQUNGOztBQUVBOzs7RUFHRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUlBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkI7QUFDRjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHVCQUF1QjtFQUN2QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWNvbnRlbnQge1xyXG4gIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG59XHJcblxyXG4uc3RlcHBlci1jb250cm9sIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiA5MHB4O1xyXG4gIGJvdHRvbTogMDtcclxufVxyXG5cclxuLnN0ZXBwZXItbGFiZWwge1xyXG4gIHBhZGRpbmctdG9wOiA0NXB4O1xyXG4gIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG4ucmFkaW8tbm9ybWFsIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4XHJcbn1cclxuXHJcbi5yYWRpby1taW5pIHtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHdpZHRoOiA3OXZ3O1xyXG4gIG1heC13aWR0aDogMzUwcHg7XHJcbn1cclxuXHJcbi5nb2JhY2sge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzNXB4O1xyXG59XHJcbi5nb2JhY2ttb2JpbGUge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIC8qYmFja2dyb3VuZDogZ3JlZW47Ki9cclxuICB3aWR0aDogMDtcclxufVxyXG5cclxuLmNoZWNrb3V0IHtcclxuICB3aWR0aDogMjgwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggIzVmNjM2ODtcclxufVxyXG5cclxuLm1pbmktcGFnZSB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIHdpZHRoOiAxMHB4O1xyXG4gIG1hcmdpbjogM3B4O1xyXG4gIGJhY2tncm91bmQ6ICM1ZjYzNjg7XHJcbn1cclxuXHJcbi5taWNyb3BhZ2Uge1xyXG4gIGhlaWdodDogNnB4O1xyXG4gIHdpZHRoOiA2cHg7XHJcbiAgbWFyZ2luOiA0cHg7XHJcbiAgYmFja2dyb3VuZDogIzVmNjM2ODtcclxufVxyXG5cclxuLmRvbmUge1xyXG4gIGJhY2tncm91bmQ6ICMxZTczZTg7XHJcbn1cclxuXHJcbi53YWl0aW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjNWY2MzY4O1xyXG59XHJcblxyXG4ucGFnZS1kaXZpZGVyIHtcclxuXHJcbiAgLyptYXgtd2lkdGg6IDEwMHB4OyAqL1xyXG4gIGhlaWdodDogLjA3cmVtO1xyXG4gIHdpZHRoOiAxMDBweFxyXG59XHJcblxyXG4uc2VsZWN0b3IgOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjMjE5NmYzO1xyXG59XHJcblxyXG4uY2xhc3MtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gIGNvbG9yOiAjMjAyMTI0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjVweDtcclxuICB0ZXh0LXdyYXA6IG5vcm1hbDtcclxufVxyXG5cclxuLmNsYXNzLWRlc2NyaXB0aW9uIHtcclxuICBmb250LXNpemU6IDEwNSU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMS4zcmVtO1xyXG4gIGNvbG9yOiAjMjAyMTI0O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgdGV4dC13cmFwOiBub3JtYWw7XHJcbn1cclxuXHJcbi5lbGVtZW50LWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxMTUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNHJlbTtcclxuICBjb2xvcjogIzIwMjEyNDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgdGV4dC13cmFwOiBub3JtYWw7XHJcbn1cclxuXHJcbi5vcHRpb24taGVhZGVyIHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gIGNvbG9yOiAjMjAyMTI0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgLyptYXJnaW4tYm90dG9tOiAxMHB4OyovXHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgdGV4dC13cmFwOiBub3JtYWw7XHJcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5vcHRpb24tZGVzY3JpcHRpb24ge1xyXG4gIGZvbnQtc2l6ZTogMTA1JTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjNyZW07XHJcbiAgY29sb3I6ICM1ZjYzNjg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHRleHQtd3JhcDogbm9ybWFsO1xyXG4gIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xyXG59XHJcblxyXG4ub3B0aW9uLXByaWNlIHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMS40cmVtO1xyXG4gIGNvbG9yOiAjMjAyMTI0O1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAvKnBhZGRpbmctdG9wOiAxMHB4OyovXHJcbiAgLypwYWRkaW5nLWJvdHRvbTogMTBweDsqL1xyXG59XHJcblxyXG5cclxuXHJcbi5jcmQgOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNTE4YmY2O1xyXG59XHJcbi8qbWF0LWNhcmQgOmhvdmVyIHsqL1xyXG4vKiAgbWF0LWVsZXZhdGlvbigyKSEqYm9yZGVyLWNvbG9yOiA7KiEqL1xyXG5cclxuLyohKn0qISovXHJcbi8qQGltcG9ydCAnfkBhbmd1bGFyL21hdGVyaWFsL3RoZW1pbmcnOyovXHJcblxyXG4vKm1hdC1jYXJkIDpob3ZlcnsqL1xyXG4vKi8vIEFkZHMgYSBzaGFkb3cgZm9yIGVsZXZhdGlvbiBsZXZlbCAyIHdpdGggZGVmYXVsdCBjb2xvciBhbmQgZnVsbCBvcGFjaXR5OiovXHJcbi8qQGluY2x1ZGUgbWF0LWVsZXZhdGlvbigyKTsqL1xyXG4vKn0qL1xyXG4uY2FyZC1sYWJlbCB7XHJcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucycsUm9ib3RvLEFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxLjE3NXJlbTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGNvbG9yOiAjMjAyMTI0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG5cclxuLnN0ZXAge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qYmFja2dyb3VuZDogIzFlNzNlODsqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3RlcC1mb290ZXIge1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5vcHRpb25hbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG5cclxuXHJcbi51bHRyYXdpZGUge1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG59XHJcblxyXG4uc2tpcC1jb250ZW50IHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc3RlcC1pbnB1dCB7XHJcbiAgbWF4LXdpZHRoOiAzNjBweDtcclxuICB3aWR0aDogOTAlO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4XHJcbn1cclxuXHJcbi5cclxuXHJcbi53aWRlLWJhciB7XHJcbiAgbWF4LXdpZHRoOiBub25lO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jbGFzc2hlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTEwJTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgY29sb3I6ICMyMDIxMjQ7XHJcbiAgLypiYWNrZ3JvdW5kOiAjNWY2MzY4OyovXHJcbiAgLypwYWRkaW5nLWxlZnQ6IDE1cHg7Ki9cclxufVxyXG5cclxuLmNsYXNzYnV0dG9uIHtcclxuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJyxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4wMTc4NTcxNGVtO1xyXG4gIGZvbnQtc2l6ZTogMS4wM3JlbTtcclxuICBsaW5lLWhlaWdodDogMS44M3JlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWNsYXNzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ubWFpbi1jbGFzczpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQ6ICM1MThiZjY7XHJcbiAgY3Vyc29yOiBwb2ludGVyXHJcbn1cclxuXHJcbi5maXhlZCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uZmxleGlibGUge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnZlcnRpY2FsIHtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcblxyXG4uaG9yaXpvbnRhbCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4udGVzdCB7XHJcbiAgLyp3aWR0aDogNDAwcHg7Ki9cclxuICB3aWR0aDogMTAwJTtcclxuICAvKmhlaWdodDogNDAwcHg7Ki9cclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAvKmxpbmUtaGVpZ2h0OiAxLjdyZW07Ki9cclxuICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG5cclxuLnZhbHVlIHtcclxuICBmb250LXNpemU6IDEwNyU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAvKmxpbmUtaGVpZ2h0OiAyLjdyZW07Ki9cclxuICB0ZXh0LXdyYXA6IG5vcm1hbDtcclxuICB3aGl0ZS1zcGFjZTogaW5pdGlhbDtcclxufVxyXG5cclxuLnN1bW1hcnktcm93IHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucG9wdXAtZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTE1JTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjdyZW07XHJcbiAgY29sb3I6ICM1ZjYzNjg7XHJcbn1cclxuXHJcbi5wb3B1cC1wcmljZSB7XHJcbiAgZm9udC1zaXplOiAxMTUlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN3JlbTtcclxuICBjb2xvcjogIzIwMjEyNDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-add',
          templateUrl: './add.component.html',
          styleUrls: ['./add.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]
        }, {
          type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
        }];
      }, {
        typeRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['appMode', {
            "static": false
          }]
        }],
        uploadRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['uploader', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/add/add.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _applications_applications_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./applications/applications.component */
    "./src/app/applications/applications.component.ts");
    /* harmony import */


    var _personal_personal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./personal/personal.component */
    "./src/app/personal/personal.component.ts");
    /* harmony import */


    var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./privacy/privacy.component */
    "./src/app/privacy/privacy.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _application_application_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./application/application.component */
    "./src/app/application/application.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'register',
      component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"]
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    }, {
      path: 'account',
      component: _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'error',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"]
    }, {
      path: 'add',
      component: _add_add_component__WEBPACK_IMPORTED_MODULE_7__["AddComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'applications',
      component: _applications_applications_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'applications/:id',
      component: _application_application_component__WEBPACK_IMPORTED_MODULE_14__["ApplicationComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'personal',
      component: _personal_personal_component__WEBPACK_IMPORTED_MODULE_10__["PersonalComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'privacy',
      component: _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_11__["PrivacyComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_8__["AuthGuard"]]
    }, {
      path: 'about',
      component: _about_about_component__WEBPACK_IMPORTED_MODULE_12__["AboutComponent"]
    }, {
      path: 'contacts',
      component: _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_13__["ContactsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");

    function AppComponent_img_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 21);
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    };

    function AppComponent_div_17_button_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function AppComponent_div_17_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_17_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.goToLogin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u043E\u0439\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return ["/account"];
    };

    function AppComponent_div_17_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, ctx_r7.auth.getName() ? ctx_r7.auth.getName().split(" ")[0] : "user"));
      }
    }

    function AppComponent_div_17_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_17_button_4_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r11.logout();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u044B\u0439\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function AppComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_17_button_1_Template, 2, 2, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_div_17_button_2_Template, 2, 0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_div_17_button_3_Template, 3, 5, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_17_button_4_Template, 2, 0, "button", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAuthenticated());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.auth.isAuthenticated());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAuthenticated());

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.auth.isAuthenticated());
      }
    }

    var _c2 = function _c2() {
      return ["/applications"];
    };

    var _c3 = function _c3() {
      return ["/personal"];
    };

    var _c4 = function _c4() {
      return ["/security"];
    };

    function AppComponent_div_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_22_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          return _r2.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_22_Template_div_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          return _r2.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0417\u0430\u044F\u0432\u043A\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_22_Template_div_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          return _r2.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_div_22_Template_div_click_19_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

          return _r2.toggle();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.username, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4));
      }
    }

    var _c5 = function _c5() {
      return {
        exact: true
      };
    };

    var _c6 = function _c6() {
      return ["/privacy"];
    };

    function AppComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "perm_identity");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0413\u043B\u0430\u0432\u043D\u0430\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "library_books");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0417\u0430\u044F\u0432\u043A\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "account_box");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041B\u0438\u0447\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "security");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0411\u0435\u0437\u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c5));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c6));
      }
    }

    var _c7 = function _c7() {
      return ["/"];
    };

    var _c8 = function _c8() {
      return ["/about"];
    };

    var _c9 = function _c9() {
      return ["/contacts"];
    };

    var _c10 = function _c10() {
      return ["/login?authError=true", "/login?expired=true", "/login?registered=true", "/login"];
    };

    var _c11 = function _c11() {
      return ["account", "applications", "personal", "privacy"];
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router, auth) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.auth = auth;
        this.title = 'self-register-mark-II';
        this.opened = false;
        this.username = 'user';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var potentialToken = localStorage.getItem('auth-token');
          var potentialName = localStorage.getItem('username');
          var potentialEmail = localStorage.getItem('email');

          if (potentialToken !== null) {
            this.auth.setToken(potentialToken);
            this.auth.setName(potentialName);
            this.auth.setEmail(potentialEmail);
            this.username = potentialName.split(' ')[0];
          }
        }
      }, {
        key: "goToLogin",
        value: function goToLogin() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "logout",
        value: function logout() {
          this.auth.logout();
          this.router.navigate(['/']);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 37,
      vars: 16,
      consts: [[3, "resize"], ["fxLayout", "row", 2, "width", "100%", "position", "fixed", "top", "0", "z-index", "10"], ["fxLayout", "row", "fxFlex", "10"], ["mat-icon-button", "", "fxHide", "true", "fxShow.lt-md", "true", 2, "height", "40px", "width", "40px", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "nav-block", 3, "routerLink"], ["src", "assets/images/logo.png", "style", "width: 45px; height: 45px", 4, "ngIf"], [1, "text-main", "nav-item"], ["fxFlex", "70", "fxLayout", "row", "fxLayoutAlign", "start center", "fxShow", "true", "fxHide.lt-md", "true", 2, "margin-left", "25px"], [1, "nav-block", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxFlex", "20", "fxFlex.lt-md", "80", 4, "ngIf"], [2, "margin-top", "55px", "height", "auto", "min-height", "100vh"], ["mode", "over", "fixedInViewport", "true", 2, "margin-top", "55px", "height", "100vh", "width", "100vw"], ["sidenav", ""], ["fxLayout", "column", "fxHide", "true", "fxShow.lt-md", "true"], [4, "ngIf"], ["fxLayout", "row", "fxLayoutAlign", "space-around center"], ["fxLayout", "column", "fxLayoutAlign", "end center", 1, "side-block", 3, "routerLink", "click"], ["src", "assets/images/signs.png", 1, "side-block-image"], [1, "text-main", "side-item"], ["src", "assets/images/contacts.png", 1, "side-block-image"], ["fxHide.lt-md", "true", "class", "content-navigator", "fxLayout", "column", 4, "ngIf"], ["src", "assets/images/logo.png", 2, "width", "45px", "height", "45px"], ["fxLayout", "row", "fxLayoutAlign", "end center", "fxFlex", "20", "fxFlex.lt-md", "80"], ["class", "button", "mat-button", "", "fxHide.xs", "true", 3, "routerLink", 4, "ngIf"], ["mat-raised-button", "", "class", "button primary-button", 3, "click", 4, "ngIf"], ["mat-button", "", "fxHide.xs", "true", 1, "button", 3, "routerLink"], ["mat-raised-button", "", 1, "button", "primary-button", 3, "click"], ["fxLayout", "row", "fxLayoutAlign", "center center"], ["src", "assets/images/user.png", 1, "side-image"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "text-main", "header"], ["src", "assets/images/homepage.png", 1, "side-block-image"], ["src", "assets/images/document.png", 1, "side-block-image"], ["src", "assets/images/id-card.png", 1, "side-block-image"], ["src", "assets/images/shield.png", 1, "side-block-image"], ["fxHide.lt-md", "true", "fxLayout", "column", 1, "content-navigator"], ["routerLinkActive", "active", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "content-navigator-item", 3, "routerLink", "routerLinkActiveOptions"], [1, "text-main", "nav-text"], ["routerLinkActive", "active", "fxLayout", "row", "fxLayoutAlign", "start center", 1, "content-navigator-item", 3, "routerLink"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function AppComponent_Template_div_resize_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return _r2.close();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-toolbar", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return _r2.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppComponent_img_7_Template, 1, 0, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Selfreg");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041E \u043D\u0430\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, AppComponent_div_17_Template, 5, 4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-sidenav-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-sidenav", 11, 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, AppComponent_div_22_Template, 23, 9, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return _r2.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041E \u043D\u0430\u0441");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_29_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](20);

            return _r2.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-sidenav-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, AppComponent_div_34_Template, 21, 10, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.router.url != "/login");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c10).includes(ctx.router.url));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.auth.isAuthenticated());

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c8));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c9));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c11).includes(ctx.router.url.split("/")[1]));
        }
      },
      directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbar"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenav"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavContent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_10__["FooterComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["TitleCasePipe"]],
      styles: [".side-block[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n  width: 220px;\r\n  height: 150px;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  cursor: pointer\r\n}\r\n\r\n.side-item[_ngcontent-%COMP%] {\r\n  letter-spacing: .01785714em;\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  line-height: 1.35rem;\r\n  color: #202124;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n}\r\n\r\n.side-block[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\r\n  color: #1e73e8;\r\n}\r\n\r\n.side-image[_ngcontent-%COMP%] {\r\n  height: 75px;\r\n  width: 75px;\r\n  margin: 15px\r\n}\r\n\r\n.side-block-image[_ngcontent-%COMP%] {\r\n  height: 80px;\r\n  width: 80px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGFBQWE7RUFDYix5QkFBaUI7S0FBakIsc0JBQWlCO01BQWpCLHFCQUFpQjtVQUFqQixpQkFBaUI7RUFDakI7QUFDRjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYO0FBQ0Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZS1ibG9jayB7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICB3aWR0aDogMjIwcHg7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBjdXJzb3I6IHBvaW50ZXJcclxufVxyXG5cclxuLnNpZGUtaXRlbSB7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4wMTc4NTcxNGVtO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMzVyZW07XHJcbiAgY29sb3I6ICMyMDIxMjQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5zaWRlLWJsb2NrIDpob3ZlciB7XHJcbiAgY29sb3I6ICMxZTczZTg7XHJcbn1cclxuXHJcbi5zaWRlLWltYWdlIHtcclxuICBoZWlnaHQ6IDc1cHg7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgbWFyZ2luOiAxNXB4XHJcbn1cclxuXHJcbi5zaWRlLWJsb2NrLWltYWdlIHtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./register/register.component */
    "./src/app/register/register.component.ts");
    /* harmony import */


    var _account_account_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account/account.component */
    "./src/app/account/account.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _add_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add/add.component */
    "./src/app/add/add.component.ts");
    /* harmony import */


    var _about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./about/about.component */
    "./src/app/about/about.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _applications_applications_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./applications/applications.component */
    "./src/app/applications/applications.component.ts");
    /* harmony import */


    var _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./personal/personal.component */
    "./src/app/personal/personal.component.ts");
    /* harmony import */


    var _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./privacy/privacy.component */
    "./src/app/privacy/privacy.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/error/error.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _token_interceptor__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./token.interceptor */
    "./src/app/token.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tree.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _application_application_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./application/application.component */
    "./src/app/application/application.component.ts");
    /* harmony import */


    var _custom_pipe__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./custom.pipe */
    "./src/app/custom.pipe.ts"); // import {MatGridListModule} from '@angular/material/grid-list';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
        multi: true,
        useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"]
      }],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"] // MatGridListModule
      ]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"], _applications_applications_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationsComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__["PersonalComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponent"], _application_application_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationComponent"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["ApplicantPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["TrademarkPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["StatusPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["ModePipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["OptionPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["DocTypesPipe"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"] // MatGridListModule
        ]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"], _account_account_component__WEBPACK_IMPORTED_MODULE_5__["AccountComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_14__["ErrorComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _add_add_component__WEBPACK_IMPORTED_MODULE_8__["AddComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_10__["ContactsComponent"], _applications_applications_component__WEBPACK_IMPORTED_MODULE_11__["ApplicationsComponent"], _personal_personal_component__WEBPACK_IMPORTED_MODULE_12__["PersonalComponent"], _privacy_privacy_component__WEBPACK_IMPORTED_MODULE_13__["PrivacyComponent"], _application_application_component__WEBPACK_IMPORTED_MODULE_34__["ApplicationComponent"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["ApplicantPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["TrademarkPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["StatusPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["ModePipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["OptionPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_35__["DocTypesPipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_18__["FlexLayoutModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_22__["MatToolbarModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_23__["MatCardModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_25__["MatSidenavModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_26__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_27__["MatDividerModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_29__["MatTreeModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_30__["MatSelectModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_31__["MatCheckboxModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarModule"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_33__["MatGridListModule"] // MatGridListModule
          ],
          providers: [{
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HTTP_INTERCEPTORS"],
            multi: true,
            useClass: _token_interceptor__WEBPACK_IMPORTED_MODULE_16__["TokenInterceptor"]
          }],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/application/application.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/application/application.component.ts ***!
    \******************************************************/

  /*! exports provided: ApplicationComponent */

  /***/
  function srcAppApplicationApplicationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationComponent", function () {
      return ApplicationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _custom_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../custom.pipe */
    "./src/app/custom.pipe.ts");

    var _c0 = ["href"];

    function ApplicationComponent_button_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationComponent_ng_template_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationComponent_div_34_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r169 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_div_34_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r169);

          var doc_r166 = ctx.$implicit;

          var ctx_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r168.download(doc_r166);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "doctypes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r166 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", doc_r166.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r166.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, doc_r166.type));
      }
    }

    function ApplicationComponent_div_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationComponent_div_34_div_4_Template, 8, 5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r158.application.documents);
      }
    }

    function ApplicationComponent_li_73_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "options");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var opt_r170 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, opt_r170.option));
      }
    }

    function ApplicationComponent_li_99_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cat_r173 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cat_r173.Title, " ");
      }
    }

    function ApplicationComponent_li_99_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationComponent_li_99_li_4_Template, 2, 1, "li", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var cls_r171 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", cls_r171.Number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", cls_r171.Categories);
      }
    }

    function ApplicationComponent_button_122_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u043F\u043B\u0430\u0442\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationComponent_ng_template_123_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u043F\u043B\u0430\u0447\u0435\u043D\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationComponent_div_126_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ApplicationComponent_div_126_div_4_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r178);

          var doc_r175 = ctx.$implicit;

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r177.download(doc_r175);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 46, 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "doctypes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var doc_r175 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", doc_r175.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doc_r175.url);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, doc_r175.type));
      }
    }

    function ApplicationComponent_div_126_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0414\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u044B");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ApplicationComponent_div_126_div_4_Template, 8, 5, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r164.application.documents);
      }
    }

    var _c1 = function _c1() {
      return ["/account"];
    };

    var ApplicationComponent =
    /*#__PURE__*/
    function () {
      function ApplicationComponent(account, route, auth) {
        _classCallCheck(this, ApplicationComponent);

        this.account = account;
        this.route = route;
        this.auth = auth;
        this.id = '';
      }

      _createClass(ApplicationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.fetch();
        }
      }, {
        key: "fetch",
        value: function fetch() {
          var _this7 = this;

          this.paramSub = this.route.params.subscribe(function (params) {
            _this7.id = params.id;
          }, function (error) {
            if (error.status === 401) {
              _this7.auth.logout();
            }
          });
          this.aSub = this.account.getApplicationById(this.id).subscribe(function (app) {
            _this7.application = app;
            console.log('classes', _this7.application.classes);
          }, function (error) {
            if (error.status === 401) {
              _this7.auth.logout();
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }

          if (this.paramSub) {
            this.paramSub.unsubscribe();
          }
        }
      }, {
        key: "download",
        value: function download(doc) {
          var link = document.createElement('a');
          link.setAttribute('type', 'hidden');
          link.href = doc.url;
          link.download = doc.url.split('\\')[2];
          document.body.appendChild(link);
          link.click();
          link.remove(); // this.hRef.nativeElement.href = doc.url;
          // this.hRef.nativeElement.click();
        }
      }]);

      return ApplicationComponent;
    }();

    ApplicationComponent.ɵfac = function ApplicationComponent_Factory(t) {
      return new (t || ApplicationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    ApplicationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationComponent,
      selectors: [["app-application"]],
      viewQuery: function ApplicationComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hRef = _t.first);
        }
      },
      decls: 128,
      vars: 47,
      consts: [[1, "block-one"], ["fxFlex", "23", "fxHide.lt-md", "true", "fxFlex.lt-lg", "30", "fxLayout", "column"], ["fxFlex", "67", "fxFlex.lt-md", "100", "fxFlex.lt-lg", "55", "fxLayout", "column", "fxLayoutAlign", "start start"], [2, "margin-bottom", "15px", "padding", "15px"], ["mat-icon-button", "", 3, "routerLink"], ["fxLayout", "row", "fxLayoutAlign.lt-md", "column", "fxLayoutAlign", "center start", 2, "width", "100%"], ["fxFlex", "60", "fxFlex.lt-lg", "100", 2, "padding", "15px"], ["fxLayout", "row", 1, "app-card"], [1, "text-alternative", "app-status-label"], [1, "text-main", "app-status"], ["fxHide", "true", "fxShow.lt-lg", "true", 1, "app-card"], ["fxLayout", "column", 1, "row-high"], [1, "text-alternative", "app-label"], [1, "text-main", "app-value"], ["fxLayoutAlign", "center center", 1, "row-isolated"], ["mat-raised-button", "", "class", "button payment-button", 4, "ngIf", "ngIfElse"], ["payed", ""], ["class", "row-high-alt", "fxLayout", "column", 4, "ngIf"], [1, "app-card"], ["fxLayoutAlign", "center"], [2, "height", "auto", "width", "auto", "max-width", "300px", "max-height", "150px", 3, "src"], [1, "row-high", "text-main", "app-title"], ["fxLayout", "row", 1, "row-isolated"], ["fxFlex", "50", "fxLayout", "row"], ["src", "/assets/images/app-mode.png", 2, "height", "50px", "width", "50px"], ["fxLayout", "column", 1, "card-info-iconic"], ["src", "/assets/images/type.png", 2, "height", "50px", "width", "50px"], [1, "row-high-alt"], [1, "row-normal", "text-main"], ["fxLayout", "row"], ["src", "/assets/images/app-help.png", 2, "height", "50px", "width", "50px"], [1, "text-main"], [4, "ngFor", "ngForOf"], ["src", "/assets/images/app-colors.png", 2, "height", "50px", "width", "50px"], ["fxLayout", "row", 1, "row-high"], ["src", "/assets/images/app-unsec.png", 2, "height", "50px", "width", "50px"], ["src", "/assets/images/app-classes.png", 2, "height", "45px", "width", "45px"], [2, "padding-left", "0", "list-style", "none"], ["fxFlex", "40", "fxHide.lt-lg", "true", 2, "padding", "15px"], ["fxFlex", "10", "fxHide.lt-md", "true", "fxFlex.lt-lg", "15"], ["mat-raised-button", "", 1, "button", "payment-button"], [1, "text-main", "app-title"], ["fxLayout", "column", 1, "row-high-alt"], ["fxLayout", "row", "fxLayoutAlign", "space-around start", 1, "selectable"], ["class", "container", "fxLayout", "column", "fxLayoutAlign", "start center", 3, "click", 4, "ngFor", "ngForOf"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "container", 3, "click"], ["download", "", 2, "display", "none", 3, "href"], ["href", ""], ["src", "assets/images/app-documents.png", 2, "height", "50px", "width", "50px"], [1, "text-main", "row-normal", 2, "text-align", "center"], ["class", "text-main", 4, "ngFor", "ngForOf"]],
      template: function ApplicationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "arrow_back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0421\u0442\u0430\u0442\u0443\u0441: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-card", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u043E\u0448\u043B\u0438\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ApplicationComponent_button_30_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ApplicationComponent_ng_template_31_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ApplicationComponent_div_34_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "\u0421\u043F\u043E\u0441\u043E\u0431 \u043F\u043E\u0434\u0430\u0447\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](49, "mode");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0422\u0438\u043F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](58, "trademark");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "\u041E\u043F\u0438\u0441\u0430\u043D\u0438\u0435");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043B\u0443\u0433\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "ul", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, ApplicationComponent_li_73_Template, 3, 3, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "\u0426\u0432\u0435\u0442\u0430");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "\u041D\u0435\u043E\u0445\u0440\u0430\u043D\u044F\u0435\u043C\u044B\u0435 \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "\u0412\u044B\u0431\u0440\u0430\u043D\u043D\u044B\u0435 \u043A\u043B\u0430\u0441\u0441\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "ul", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](99, ApplicationComponent_li_99_Template, 5, 2, "li", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "\u0417\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](105, "applicant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "\u0420\u0430\u0437\u043C\u0435\u0440 \u043F\u043E\u0448\u043B\u0438\u043D\u044B");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](113, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "\u0421\u0442\u043E\u0438\u043C\u043E\u0441\u0442\u044C \u0443\u0441\u043B\u0443\u0433");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](118);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](119, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, ApplicationComponent_button_122_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](123, ApplicationComponent_ng_template_123_Template, 2, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](126, ApplicationComponent_div_126_Template, 5, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](127, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](46, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.application.status ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 22, ctx.application.status) : "-", " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](21, 24, ctx.application.tax, "RUB", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](27, 28, ctx.application.price, "RUB", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true)("ngIfElse", _r156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application.payed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.application.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.application.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](49, 32, ctx.application.mode));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](58, 34, ctx.application.type));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.application.logoDescr);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.application.options);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.application.colors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.application.unsecure);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.application.classes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](105, 36, ctx.application.applicant.type));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](113, 38, ctx.application.tax, "RUB", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](119, 42, ctx.application.price, "RUB", "symbol-narrow"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true)("ngIfElse", _r156);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.application.payed);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]],
      pipes: [_custom_pipe__WEBPACK_IMPORTED_MODULE_11__["StatusPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_11__["ModePipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_11__["TrademarkPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_11__["ApplicantPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_11__["DocTypesPipe"], _custom_pipe__WEBPACK_IMPORTED_MODULE_11__["OptionPipe"]],
      styles: [".app-title[_ngcontent-%COMP%] {\r\n  font-size: 160%;\r\n  text-align: center;\r\n}\r\n\r\n.app-status[_ngcontent-%COMP%] {\r\n  font-size: 140%;\r\n  margin-left: 15px;\r\n}\r\n\r\n.app-status-label[_ngcontent-%COMP%] {\r\n  font-size: 140%;\r\n  color: #5f6368;\r\n}\r\n\r\n.app-label[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  color: #5f6368;\r\n}\r\n\r\n.app-value[_ngcontent-%COMP%] {\r\n  font-size: 120%;\r\n  line-height: 2.5rem;\r\n}\r\n\r\n.row-normal[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\r\n\r\n.row-high[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n}\r\n\r\n.row-high-alt[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n}\r\n\r\n.row-isolated[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\n.row-isolated-alt[_ngcontent-%COMP%] {\r\n  padding-top: 25px;\r\n  padding-bottom: 25px;\r\n}\r\n\r\n.card-info-iconic[_ngcontent-%COMP%] {\r\n  padding-left: 15px;\r\n}\r\n\r\n.app-card[_ngcontent-%COMP%] {\r\n  \r\n  \r\n  margin-bottom: 15px;\r\n  padding: 25px;\r\n  \r\n}\r\n\r\n.container[_ngcontent-%COMP%] {\r\n  padding: 15px 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb24vYXBwbGljYXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbi9hcHBsaWNhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFwcC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxNjAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmFwcC1zdGF0dXMge1xyXG4gIGZvbnQtc2l6ZTogMTQwJTtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxufVxyXG5cclxuLmFwcC1zdGF0dXMtbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTQwJTtcclxuICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG5cclxuLmFwcC1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMjAlO1xyXG4gIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG4uYXBwLXZhbHVlIHtcclxuICBmb250LXNpemU6IDEyMCU7XHJcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcclxufVxyXG5cclxuLnJvdy1ub3JtYWwge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbi5yb3ctaGlnaCB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxufVxyXG4ucm93LWhpZ2gtYWx0IHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuLnJvdy1pc29sYXRlZCB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xyXG59XHJcbi5yb3ctaXNvbGF0ZWQtYWx0IHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG4uY2FyZC1pbmZvLWljb25pYyB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uYXBwLWNhcmQge1xyXG4gIC8qcGFkZGluZy1sZWZ0OiAyNXB4OyovXHJcbiAgLypwYWRkaW5nLXJpZ2h0OiAyNXB4OyovXHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIC8qcGFkZGluZy1ib3R0b206IDA7Ki9cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMTVweCA1cHg7XHJcbn1cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-application',
          templateUrl: './application.component.html',
          styleUrls: ['./application.component.css']
        }]
      }], function () {
        return [{
          type: _account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, {
        hRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['href', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/applications/applications.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/applications/applications.component.ts ***!
    \********************************************************/

  /*! exports provided: ApplicationsComponent */

  /***/
  function srcAppApplicationsApplicationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationsComponent", function () {
      return ApplicationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/grid-list */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/grid-list.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");

    var _c0 = ["grid"];

    function ApplicationsComponent_mat_grid_tile_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ApplicationsComponent_mat_grid_tile_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-card", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a1) {
      return ["/applications", a1];
    };

    function ApplicationsComponent_mat_grid_tile_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-grid-tile", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0422\u0438\u043F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\u0417\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u0421\u0442\u0430\u0442\u0443\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r121 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, app_r121._id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", app_r121.logoUrl ? app_r121.logoUrl : "assets/images/logo-empty.png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", app_r121.name, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 7, app_r121.date), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", app_r121.type === "word" ? "\u0421\u043B\u043E\u0432\u0435\u0441\u043D\u044B\u0439" : app_r121.type === "image" ? "\u0418\u0437\u043E\u0431\u0440\u0430\u0437\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439" : "\u041A\u043E\u043C\u0431\u0438\u043D\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r121.applicant.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r121.status);
      }
    }

    var _c2 = function _c2() {
      return ["/add"];
    };

    var _c3 = function _c3(a0) {
      return {
        shine: a0
      };
    };

    var ApplicationsComponent =
    /*#__PURE__*/
    function () {
      function ApplicationsComponent(account, auth) {
        _classCallCheck(this, ApplicationsComponent);

        this.account = account;
        this.auth = auth;
        this.loaded = false;
      }

      _createClass(ApplicationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this8 = this;

          this.adjustGrid();
          this.aSub = this.account.getAllApplications().subscribe(function (apps) {
            console.log('apps', apps);
            _this8.userApps = apps;
            _this8.loaded = true;
          }, function (error) {
            if (error.status === 401) {
              _this8.auth.logout();
            }
          });
        }
      }, {
        key: "adjustGrid",
        value: function adjustGrid() {
          this.columns = window.innerWidth * 0.7 / 320 >> 0;
          console.log('here is width', this.columns, window.innerWidth); // = '100px';
        }
      }]);

      return ApplicationsComponent;
    }();

    ApplicationsComponent.ɵfac = function ApplicationsComponent_Factory(t) {
      return new (t || ApplicationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
    };

    ApplicationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ApplicationsComponent,
      selectors: [["app-applications"]],
      viewQuery: function ApplicationsComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridRef = _t.first);
        }
      },
      decls: 18,
      vars: 10,
      consts: [[1, "block-one"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "30", "fxLayout", "column"], ["fxFlex", "70", "fxFlex.lt-md", "100", "fxFlex.lt-lg", "55", "fxLayout", "column", "fxLayoutAlign", "start center"], [1, "text-main", "header", 2, "margin-top", "35px", "margin-bottom", "25px", "text-align", "center"], ["rowHeight", "450px", 2, "width", "100%", 3, "cols", "resize"], ["grid", ""], [1, "shadow", 3, "routerLink"], [2, "padding", "0", "height", "385px", "width", "300px", "margin", "50px 8px 15px", 3, "ngClass"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "content", 2, "height", "100%", 3, "fxHide"], ["src", "assets/images/plus%20(1).png", 2, "height", "120px", "width", "120px"], [1, "text-main", "subheader", 2, "margin-top", "35px", "text-align", "center"], [4, "ngIf"], ["class", "shadow", 3, "routerLink", 4, "ngFor", "ngForOf"], ["fxFlex", "10", "fxHide.lt-md", "true", "fxFlex.lt-lg", "15"], [1, "shine", 2, "padding", "0", "height", "385px", "width", "300px", "margin", "50px 8px 15px"], [2, "padding", "0", "height", "385px", "width", "300px", "margin", "50px 8px 15px"], [1, "content"], ["fxLayout", "column", "fxLayoutAlign", "start center", 1, "trademark-header-background"], ["fxLayoutAlign", "center center", 1, "trademark-header-logo"], [2, "height", "50px", "width", "50px", 3, "src"], ["fxLayout", "column", "fxLayoutAlign", "center start", 1, "trademark-header-content"], [1, "text-main", "trademark-header"], [1, "text-main"], ["fxLayout", "row", 1, "trademark-block", "element"], ["fxLayoutAlign", "center center", 2, "width", "50px"], ["src", "assets/images/type.png", 2, "height", "35px", "width", "35px"], ["fxLayout", "column", 2, "width", "100%", "padding-left", "5px"], [1, "text-main", "trademark-field"], [1, "text-alternative", "trademark-value"], ["fxLayout", "row", 1, "trademark-block", "element", "end"], ["src", "assets/images/user-card.png", 2, "height", "25px", "width", "25px"], ["fxLayout", "row", 1, "trademark-block", "element", "footer"], ["src", "assets/images/progress.png", 2, "height", "35px", "width", "35px"]],
      template: function ApplicationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0417\u0430\u044F\u0432\u043A\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-grid-list", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ApplicationsComponent_Template_mat_grid_list_resize_5_listener() {
            return ctx.adjustGrid();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-grid-tile", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-card", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043D\u043E\u0432\u0443\u044E \u0437\u0430\u044F\u0432\u043A\u0443 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ApplicationsComponent_mat_grid_tile_13_Template, 2, 0, "mat-grid-tile", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ApplicationsComponent_mat_grid_tile_14_Template, 2, 0, "mat-grid-tile", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ApplicationsComponent_mat_grid_tile_16_Template, 37, 11, "mat-grid-tile", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("cols", ctx.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c3, !ctx.loaded));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxHide", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.userApps);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridList"], _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_5__["MatGridTile"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_4__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_9__["MatDivider"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"]],
      styles: [".create-empty[_ngcontent-%COMP%] {\r\n  max-width: 400px;\r\n  padding-top: 25px;\r\n  width: 100%;\r\n  \r\n}\r\n\r\n.trademark-header[_ngcontent-%COMP%] {\r\n  font-size: 150%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.65rem;\r\n  color: #202124;\r\n}\r\n\r\n.trademark-field[_ngcontent-%COMP%] {\r\n  font-size: 100%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.75rem;\r\n  color: #5f6368;\r\n}\r\n\r\n.trademark-value[_ngcontent-%COMP%] {\r\n  font-size: 110%;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 1.45rem;\r\n  color: #202124;\r\n  text-overflow:ellipsis;\r\n  white-space:nowrap;\r\n  width: 230px;\r\n  overflow:hidden;\r\n\r\n}\r\n\r\n.trademark-header-background[_ngcontent-%COMP%] {\r\n  height: 170px;\r\n  background-image: url(\"/assets/images/trademark-header.png\");\r\n  border-radius: 4px 4px 0 0;\r\n  padding-left: 15px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.trademark-header-logo[_ngcontent-%COMP%] {\r\n  background: white;\r\n  margin-top: -50px;\r\n  border-radius: 50%;\r\n  height: 100px;\r\n  width: 100px;\r\n  box-shadow: 0 2px 5px #5f6368;\r\n}\r\n\r\n.trademark-header-content[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n  text-align: left;\r\n  height: 120px;\r\n  padding: 15px 15px 5px 45px;\r\n}\r\n\r\n.trademark-block[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n  padding-right: 15px;\r\n}\r\n\r\n.element[_ngcontent-%COMP%] {\r\n  padding-top: 10px\r\n}\r\n\r\n.end[_ngcontent-%COMP%] {\r\n  padding-bottom: 10px\r\n}\r\n\r\n.footer[_ngcontent-%COMP%] {\r\n  \r\n  padding-bottom: 5px;\r\n  \r\n  \r\n}\r\n\r\n.content[_ngcontent-%COMP%] {\r\n  pointer-events: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwbGljYXRpb25zL2FwcGxpY2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osZUFBZTs7QUFFakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsNERBQTREO0VBQzVELDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLFlBQVk7RUFDWiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYiwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0U7QUFDRjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBR0E7RUFDRSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9hcHBsaWNhdGlvbnMvYXBwbGljYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3JlYXRlLWVtcHR5IHtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC8qYmFja2dyb3VuZDogIzVmNjM2ODsqL1xyXG59XHJcblxyXG4udHJhZGVtYXJrLWhlYWRlciB7XHJcbiAgZm9udC1zaXplOiAxNTAlO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjVyZW07XHJcbiAgY29sb3I6ICMyMDIxMjQ7XHJcbn1cclxuXHJcbi50cmFkZW1hcmstZmllbGQge1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc1cmVtO1xyXG4gIGNvbG9yOiAjNWY2MzY4O1xyXG59XHJcblxyXG4udHJhZGVtYXJrLXZhbHVlIHtcclxuICBmb250LXNpemU6IDExMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMS40NXJlbTtcclxuICBjb2xvcjogIzIwMjEyNDtcclxuICB0ZXh0LW92ZXJmbG93OmVsbGlwc2lzO1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICB3aWR0aDogMjMwcHg7XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG5cclxufVxyXG5cclxuLnRyYWRlbWFyay1oZWFkZXItYmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiAxNzBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy90cmFkZW1hcmstaGVhZGVyLnBuZ1wiKTtcclxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcclxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLnRyYWRlbWFyay1oZWFkZXItbG9nbyB7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWFyZ2luLXRvcDogLTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgd2lkdGg6IDEwMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAjNWY2MzY4O1xyXG59XHJcblxyXG4udHJhZGVtYXJrLWhlYWRlci1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGhlaWdodDogMTIwcHg7XHJcbiAgcGFkZGluZzogMTVweCAxNXB4IDVweCA0NXB4O1xyXG59XHJcblxyXG4udHJhZGVtYXJrLWJsb2NrIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmVsZW1lbnQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4XHJcbn1cclxuXHJcbi5lbmQge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4XHJcbn1cclxuXHJcbi5mb290ZXIge1xyXG4gIC8qcGFkZGluZy10b3A6IDEwcHg7Ki9cclxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIC8qcGFkZGluZy1sZWZ0OiAxNXB4OyovXHJcbiAgLypwYWRkaW5nLXJpZ2h0OiAxNXB4OyovXHJcbn1cclxuXHJcblxyXG4uY29udGVudCB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-applications',
          templateUrl: './applications.component.html',
          styleUrls: ['./applications.component.css']
        }]
      }], function () {
        return [{
          type: _account_service__WEBPACK_IMPORTED_MODULE_1__["AccountService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }];
      }, {
        gridRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['grid', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(auth, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          if (this.auth.isAuthenticated()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
          } else {
            this.router.navigate(['/login']);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(false);
          }
        }
      }, {
        key: "canActivateChild",
        value: function canActivateChild(route, state) {
          return this.canActivate(route, state);
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ɵfac = function AuthGuard_Factory(t) {
      return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
      token: AuthGuard,
      factory: AuthGuard.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/auth.service.ts":
  /*!*********************************!*\
    !*** ./src/app/auth.service.ts ***!
    \*********************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AuthService =
    /*#__PURE__*/
    function () {
      function AuthService(http) {
        _classCallCheck(this, AuthService);

        this.http = http;
        this.token = null;
        this.userName = null;
        this.email = null;
      }

      _createClass(AuthService, [{
        key: "register",
        value: function register(user) {
          return this.http.post('/api/auth/register', user);
        }
      }, {
        key: "login",
        value: function login(user) {
          var _this9 = this;

          return this.http.post('/api/auth/login', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (_ref2) {
            var token = _ref2.token,
                name = _ref2.name,
                email = _ref2.email;
            localStorage.setItem('auth-token', token);
            localStorage.setItem('username', name);
            localStorage.setItem('email', email);
            console.log('here are you', name, email);

            _this9.setToken(token);

            _this9.setName(name);

            _this9.setEmail(email);
          }));
        }
      }, {
        key: "checkPassword",
        value: function checkPassword(password) {
          console.log('i have a pass', password);
          return this.http.post('/api/auth/check', password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (val) {
            console.log('value is', val);
          }));
        }
      }, {
        key: "updatePassword",
        value: function updatePassword(update) {
          return this.http.patch('/api/auth/update', update);
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          var _this10 = this;

          return this.http.patch('/api/auth/edit', user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (result) {
            localStorage.setItem('username', result.username);
            localStorage.setItem('email', result.email);
            console.log('here are you', result.username, result.email); // this.setToken(token);

            _this10.setName(result.username);

            _this10.setEmail(result.email);
          }));
        }
      }, {
        key: "setToken",
        value: function setToken(token) {
          this.token = token;
        }
      }, {
        key: "getToken",
        value: function getToken() {
          return this.token;
        }
      }, {
        key: "setName",
        value: function setName(name) {
          this.userName = name;
        }
      }, {
        key: "getName",
        value: function getName() {
          return this.userName;
        }
      }, {
        key: "setEmail",
        value: function setEmail(email) {
          this.email = email;
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return this.email;
        }
      }, {
        key: "isAuthenticated",
        value: function isAuthenticated() {
          return !!this.token;
        }
      }, {
        key: "logout",
        value: function logout() {
          this.setToken(null);
          this.setName(null);
          localStorage.clear();
        }
      }]);

      return AuthService;
    }();

    AuthService.ɵfac = function AuthService_Factory(t) {
      return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AuthService,
      factory: AuthService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/class.service.ts":
  /*!**********************************!*\
    !*** ./src/app/class.service.ts ***!
    \**********************************/

  /*! exports provided: ClassService */

  /***/
  function srcAppClassServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassService", function () {
      return ClassService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ClassService =
    /*#__PURE__*/
    function () {
      // private mainclesses = null;
      function ClassService(http) {
        _classCallCheck(this, ClassService);

        this.http = http;
      }

      _createClass(ClassService, [{
        key: "getMain",
        value: function getMain() {
          return this.http.get("/api/class");
        }
      }, {
        key: "getChildren",
        value: function getChildren(id) {
          return this.http.get("/api/class/children/".concat(id));
        }
      }, {
        key: "getById",
        value: function getById(id) {
          return this.http.get("/api/class/".concat(id));
        }
      }, {
        key: "getUp",
        value: function getUp(id) {
          return this.http.get("/api/class/up/".concat(id));
        }
      }]);

      return ClassService;
    }();

    ClassService.ɵfac = function ClassService_Factory(t) {
      return new (t || ClassService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    ClassService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ClassService,
      factory: ClassService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ClassService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ContactsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0420\u0430\u0437\u0434\u0435\u043B \u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0441\u044F \u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u043A\u0435, \u043D\u043E \u044D\u0442\u043E \u043D\u0435\u043D\u0430\u0434\u043E\u043B\u0433\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ContactsComponent =
    /*#__PURE__*/
    function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 4,
      vars: 1,
      consts: [[1, "block-one"], [1, "text-main", "header", 2, "margin-top", "35px", "text-align", "center"], ["class", "text-main subheader", 4, "ngIf"], [1, "text-main", "subheader"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ContactsComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5jc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/custom.pipe.ts":
  /*!********************************!*\
    !*** ./src/app/custom.pipe.ts ***!
    \********************************/

  /*! exports provided: ApplicantPipe, ModePipe, TrademarkPipe, StatusPipe, OptionPipe, DocTypesPipe */

  /***/
  function srcAppCustomPipeTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicantPipe", function () {
      return ApplicantPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModePipe", function () {
      return ModePipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrademarkPipe", function () {
      return TrademarkPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StatusPipe", function () {
      return StatusPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OptionPipe", function () {
      return OptionPipe;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocTypesPipe", function () {
      return DocTypesPipe;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ApplicantPipe =
    /*#__PURE__*/
    function () {
      function ApplicantPipe() {
        _classCallCheck(this, ApplicantPipe);
      }

      _createClass(ApplicantPipe, [{
        key: "transform",
        value: function transform(value) {
          return value === 'UL' ? 'Юридическое лицо' : 'Индивидуальный предприниматель';
        }
      }]);

      return ApplicantPipe;
    }();

    ApplicantPipe.ɵfac = function ApplicantPipe_Factory(t) {
      return new (t || ApplicantPipe)();
    };

    ApplicantPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "applicant",
      type: ApplicantPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicantPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'applicant'
        }]
      }], null, null);
    })();

    var ModePipe =
    /*#__PURE__*/
    function () {
      function ModePipe() {
        _classCallCheck(this, ModePipe);
      }

      _createClass(ModePipe, [{
        key: "transform",
        value: function transform(value) {
          return value === 'electric' ? 'Электронная форма' : 'Самостоятельно';
        }
      }]);

      return ModePipe;
    }();

    ModePipe.ɵfac = function ModePipe_Factory(t) {
      return new (t || ModePipe)();
    };

    ModePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "mode",
      type: ModePipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'mode'
        }]
      }], null, null);
    })();

    var TrademarkPipe =
    /*#__PURE__*/
    function () {
      function TrademarkPipe() {
        _classCallCheck(this, TrademarkPipe);
      }

      _createClass(TrademarkPipe, [{
        key: "transform",
        value: function transform(value) {
          if (value === 'word') {
            return 'Словесный';
          } else if (value === 'image') {
            return 'Изобразительный';
          } else {
            return 'Комбинированный';
          }
        }
      }]);

      return TrademarkPipe;
    }();

    TrademarkPipe.ɵfac = function TrademarkPipe_Factory(t) {
      return new (t || TrademarkPipe)();
    };

    TrademarkPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "trademark",
      type: TrademarkPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TrademarkPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'trademark'
        }]
      }], null, null);
    })();

    var StatusPipe =
    /*#__PURE__*/
    function () {
      function StatusPipe() {
        _classCallCheck(this, StatusPipe);
      }

      _createClass(StatusPipe, [{
        key: "transform",
        value: function transform(value) {
          switch (value) {
            case 'created':
              return 'Создан';

            case 'waiting':
              return 'Ожидает оплаты услуг';

            case 'processing':
              return 'Подан в обработку';

            case 'checking':
              return 'Проверяется';

            case 'done':
              return 'Готов';

            case 'tax':
              return 'Ожидание оплаты госпошлины';

            default:
              return value;
          }
        }
      }]);

      return StatusPipe;
    }();

    StatusPipe.ɵfac = function StatusPipe_Factory(t) {
      return new (t || StatusPipe)();
    };

    StatusPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "status",
      type: StatusPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StatusPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'status'
        }]
      }], null, null);
    })();

    var OptionPipe =
    /*#__PURE__*/
    function () {
      function OptionPipe() {
        _classCallCheck(this, OptionPipe);
      }

      _createClass(OptionPipe, [{
        key: "transform",
        value: function transform(value) {
          switch (value) {
            case 'fullCheck':
              return 'Полная проверка товарного знака';

            case '':
              return 'Нет';

            default:
              return value;
          }
        }
      }]);

      return OptionPipe;
    }();

    OptionPipe.ɵfac = function OptionPipe_Factory(t) {
      return new (t || OptionPipe)();
    };

    OptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "options",
      type: OptionPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptionPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'options'
        }]
      }], null, null);
    })();

    var DocTypesPipe =
    /*#__PURE__*/
    function () {
      function DocTypesPipe() {
        _classCallCheck(this, DocTypesPipe);
      }

      _createClass(DocTypesPipe, [{
        key: "transform",
        value: function transform(value) {
          switch (value) {
            case 'tax':
              return 'Квитанция на госпошлину';

            case 'proxy':
              return 'Доверенность';

            case 'permission':
              return 'Согласие на обработку';

            default:
              return value;
          }
        }
      }]);

      return DocTypesPipe;
    }();

    DocTypesPipe.ɵfac = function DocTypesPipe_Factory(t) {
      return new (t || DocTypesPipe)();
    };

    DocTypesPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "doctypes",
      type: DocTypesPipe,
      pure: true
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DocTypesPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'doctypes'
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/custom.validators.ts":
  /*!**************************************!*\
    !*** ./src/app/custom.validators.ts ***!
    \**************************************/

  /*! exports provided: CustomValidators */

  /***/
  function srcAppCustomValidatorsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
      return CustomValidators;
    });

    var CustomValidators =
    /*#__PURE__*/
    function () {
      function CustomValidators() {
        _classCallCheck(this, CustomValidators);
      }

      _createClass(CustomValidators, null, [{
        key: "confirmPassword",
        value: function confirmPassword(group) {
          // if (group.get('password') === null) { return null; }
          // if (group.get('confirm') === null) { return null; }
          var pass = group.get('password').value;
          var confirmPass = group.get('confirm').value; // group.get('confirm').invalid = true;
          // console.log('проверка', pass, confirmPass);

          return pass === confirmPass ? null : {
            notSame: true
          };
        }
      }]);

      return CustomValidators;
    }();
    /***/

  },

  /***/
  "./src/app/error/error.component.ts":
  /*!******************************************!*\
    !*** ./src/app/error/error.component.ts ***!
    \******************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
      return new (t || ErrorComponent)();
    };

    ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ErrorComponent,
      selectors: [["app-error"]],
      decls: 9,
      vars: 2,
      consts: [["div", "", "fxLayout", "column", "fxLayoutAlign", "center center", 1, "block-one"], ["fxLayoutAlign", "center", 1, "error"], ["src", "assets/images/emoji.svg"], ["fxLayoutAlign", "center", 1, "text-main", "header", "error"], ["mat-raised-button", "", "color", "warn", 1, "button", 3, "routerLink"]],
      template: function ErrorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u0439... \u0430 \u0442\u0430\u043A\u043E\u0439 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u044B \u043D\u0435\u0442");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0412\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0433\u043B\u0430\u0432\u043D\u0443\u044E");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_1__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
      styles: [".error[_ngcontent-%COMP%] {\r\n  margin: 15px;\r\n}\r\nimg[_ngcontent-%COMP%] {\r\n  height: 200px;\r\n  width: 200px;\r\n}\r\n.content[_ngcontent-%COMP%] {\r\n  \r\n  margin-top: 20%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yIHtcclxuICBtYXJnaW46IDE1cHg7XHJcbn1cclxuaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4uY29udGVudCB7XHJcbiAgLypkaXNwbGF5OiBmbGV4OyovXHJcbiAgbWFyZ2luLXRvcDogMjAlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-error',
          templateUrl: './error.component.html',
          styleUrls: ['./error.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 11,
      vars: 0,
      consts: [[2, "margin", "25px"], ["fxLayout", "row", "fxLayout.xs", "column", 2, "margin-right", "25px", "margin-left", "25px", "margin-bottom", "25px"], ["fxFlex", "50", "fxLayoutAlign", "start", "fxLayoutAlign.xs", "center"], ["fxLayout", "row", "fxFlexAlign", "center center"], ["fxFlex", "50", "fxLayoutAlign", "center"], ["src", "assets/images/inst.png", 2, "width", "25px", "height", "25px"], ["fxFlex", "50", "fxLayoutAlign", "end", "fxLayoutAlign.xs", "center"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-divider", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "small");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xA9 Created by .digital");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_2__["DefaultFlexAlignDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function HomeComponent_mat_error_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 '\u0418\u043C\u044F' \u044F\u0432\u043B\u044F\u0435\u0442\u0441\u044F \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u044B\u043C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_mat_error_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function HomeComponent_mat_error_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    };

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(router, auth) {
        _classCallCheck(this, HomeComponent);

        this.router = router;
        this.auth = auth;
        this.background = 'url(assets/images/background-1080-blurry1.png)';
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.auth.isAuthenticated()) {
            console.log(true);
            this.router.navigate(['/account']);
          } else {
            this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
            });
            console.log(false);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this11 = this;

          if (this.registerForm.invalid) {
            console.log('wrong'); //this.router.navigate(['/register'])
          } else {
            this.registerForm.disable();
            this.aSub = this.auth.register(this.registerForm.value).subscribe(function () {
              _this11.router.navigate(['/login'], {
                queryParams: {
                  registered: true
                }
              });
            }, function (error) {
              _this11.router.navigate(['/register'], {
                queryParams: {
                  emailExists: true
                }
              });

              _this11.registerForm.enable();
            });
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 27,
      vars: 9,
      consts: [["fxLayout.lt-md", "column", "fxLayout.gt-sm", "row", "fxLayoutAlign", "space-evenly center", 1, "block-one"], [1, "description"], [1, "text-main", "greetings-header"], [1, "text-alternative", "greetings-text"], ["fxHide.lt-md", "true", "fxShow", "true", 1, "register-card"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "text-main"], ["formControlName", "username", "matInput", "", "placeholder", "\u0418\u043C\u044F", "fxLayoutAlign", "center"], [4, "ngIf"], ["formControlName", "email", "type", "email", "matInput", "", "placeholder", "email"], ["formControlName", "password", "type", "password", "matInput", "", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C"], ["type", "submit", "mat-raised-button", "", 1, "primary-button", "register-button"], ["mat-flat-button", "", "fxHide", "true", "fxShow.lt-md", "true", 1, "primary-button", "register-button-alt", 3, "routerLink"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u0443\u0439 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " SelfReg \u044D\u0442\u043E \u0441\u0435\u0440\u0432\u0438\u0441, \u043F\u043E\u0437\u0432\u043E\u043B\u044F\u044E\u0449\u0438\u0439 \u0442\u0435\u0431\u0435 \u0441\u0430\u043C\u043E\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u0442\u043E\u0432\u0430\u0440\u043D\u044B\u0435 \u0437\u043D\u0430\u043A\u0438 \u0431\u0435\u0437 \u043C\u0430\u043C, \u043F\u0430\u043F \u0438 \u043A\u0440\u0435\u0434\u0438\u0442\u043E\u0432 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function HomeComponent_Template_form_ngSubmit_7_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, HomeComponent_mat_error_12_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, HomeComponent_mat_error_17_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-form-field", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, HomeComponent_mat_error_22_Template, 2, 0, "mat-error", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("background-image: ", ctx.background, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("username").invalid && ctx.registerForm.get("username").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("email").invalid && ctx.registerForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.registerForm.get("password").invalid && ctx.registerForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: [".register-button[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 80%;\r\n  height: 50px;\r\n  margin-top: 15px;\r\n  margin-left: 10%;\r\n  font-family: 'Google Sans',Arial,sans-serif;\r\n  font-weight: 500;\r\n  letter-spacing: .01785714em;\r\n  font-size: 1.1rem;\r\n  line-height: 1.29rem;\r\n}\r\n\r\n.register-button-alt[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  max-width: 400px;\r\n  height: 60px;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  font-family: 'Google Sans',Arial,sans-serif;\r\n  font-weight: 500;\r\n  letter-spacing: .01785714em;\r\n  font-size: 1.33rem;\r\n  line-height: 1.29rem;\r\n}\r\n\r\n.greetings-header[_ngcontent-%COMP%] {\r\n  font-size: 2.25rem;\r\n  font-weight: 400;\r\n  letter-spacing: 0;\r\n  line-height: 2.85rem;\r\n  color: #202124;\r\n  text-align: left;\r\n  padding-top: 5px;\r\n}\r\n\r\n.greetings-text[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n  text-align: left;\r\n  letter-spacing: .01785714em;\r\n  font-family: 'Google Sans',Roboto,Arial,sans-serif;\r\n  font-size: 1.48rem;\r\n  font-weight: 500;\r\n  line-height: 1.85rem;\r\n  color: #5f6368;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n  width: 80%;\r\n  max-width: 400px;\r\n}\r\n\r\n.register-card[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  max-width: 400px;\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n  margin-top: 25px;\r\n  margin-bottom: 25px;\r\n}\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  display: inline-block;\r\n  width: 80%;\r\n  margin-top: 10px;\r\n  margin-left: 10%;\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLDJDQUEyQztFQUMzQyxnQkFBZ0I7RUFDaEIsMkJBQTJCO0VBQzNCLGtCQUFrQjtFQUNsQixvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixvQkFBb0I7RUFDcEIsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrREFBa0Q7RUFDbEQsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsZ0JBQWdCOztBQUVsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlZ2lzdGVyLWJ1dHRvbiB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJyxBcmlhbCxzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC4wMTc4NTcxNGVtO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjI5cmVtO1xyXG59XHJcblxyXG4ucmVnaXN0ZXItYnV0dG9uLWFsdCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucycsQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDE3ODU3MTRlbTtcclxuICBmb250LXNpemU6IDEuMzNyZW07XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjlyZW07XHJcbn1cclxuXHJcbi5ncmVldGluZ3MtaGVhZGVyIHtcclxuICBmb250LXNpemU6IDIuMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMDtcclxuICBsaW5lLWhlaWdodDogMi44NXJlbTtcclxuICBjb2xvcjogIzIwMjEyNDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5ncmVldGluZ3MtdGV4dCB7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDE3ODU3MTRlbTtcclxuICBmb250LWZhbWlseTogJ0dvb2dsZSBTYW5zJyxSb2JvdG8sQXJpYWwsc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEuNDhyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS44NXJlbTtcclxuICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG59XHJcblxyXG4ucmVnaXN0ZXItY2FyZCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBtYXgtd2lkdGg6IDQwMHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxufVxyXG5cclxubWF0LWZvcm0tZmllbGQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogODAlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function LoginComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043B\u043E\u0433\u0438\u043D \u0438\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0435\u0430\u043D\u0441 \u0437\u0430\u043A\u043E\u043D\u0447\u0435\u043D, \u0432\u043E\u0439\u0434\u0438\u0442\u0435 \u0437\u0430\u043D\u043E\u0432\u043E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0423\u0440\u0430! \u0422\u0435\u043F\u0435\u0440\u044C \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u0432\u043E\u0439\u0442\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function LoginComponent_mat_error_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0() {
      return ["/register"];
    }; //


    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(auth, router, route) {
        _classCallCheck(this, LoginComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
        this.wrongAuth = false;
        this.expired = false;
        this.canLogin = false;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
          });
          this.route.queryParams.subscribe(function (params) {
            if (params['registered']) {
              _this12.canLogin = true;
            }

            if (params['expired']) {
              _this12.expired = true;
            }

            if (params['authError']) {
              _this12.wrongAuth = true;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log(this.aSub);

          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this13 = this;

          this.loginForm.disable();
          this.aSub = this.auth.login(this.loginForm.value).subscribe(function () {
            _this13.router.navigate(['/account']);
          }, function (error) {
            console.warn(error);

            _this13.router.navigate(['/login'], {
              queryParams: {
                authError: true
              }
            }); // this.snackBar.open('message', 'OK', {
            //   duration: 2000,
            // });
            // SnackbarService.snack('Неверный логин')  //this.wrongAuth = true// this.openSnackBar('Message archived');


            _this13.loginForm.enable();
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ɵfac = function LoginComponent_Factory(t) {
      return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LoginComponent,
      selectors: [["app-login"]],
      decls: 28,
      vars: 9,
      consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "block-one"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "login-window"], ["src", "assets/images/logo.png", 2, "height", "45px", "width", "45px", "margin-bottom", "10px"], [1, "card-header"], [1, "text-alternative", "description"], ["class", "text-alternative announcement-negative", "fxLayoutAlign", "center center", 4, "ngIf"], ["class", "text-alternative announcement-positive", "fxLayoutAlign", "center center", 4, "ngIf"], [3, "formGroup", "ngSubmit"], ["appearance", "outline", 1, "form-filed", "text-main"], ["formControlName", "email", "type", "email", "matInput", "", "placeholder", "email"], [4, "ngIf"], ["formControlName", "password", "type", "password", "matInput", "", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C"], [1, "form-filed", "button", "alternative-button", 2, "margin-bottom", "15%", "margin-top", "0"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 1, "form-filed"], ["CLASS", "button alternative-button", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", 1, "button", "primary-button", 3, "disabled"], ["fxLayoutAlign", "center center", 1, "text-alternative", "announcement-negative"], ["fxLayoutAlign", "center center", 1, "text-alternative", "announcement-positive"]],
      template: function LoginComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0412\u0445\u043E\u0434 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0418\u0441\u043F\u043E\u043B\u044C\u0437\u0443\u0439\u0442\u0435 \u0441\u0432\u043E\u044E \u0443\u0447\u0435\u0442\u043D\u0443\u044E \u0437\u0430\u043F\u0438\u0441\u044C \u0434\u043B\u044F \u0432\u0445\u043E\u0434\u0430 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, LoginComponent_div_8_Template, 2, 0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function LoginComponent_Template_form_ngSubmit_10_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_mat_error_15_Template, 2, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, LoginComponent_mat_error_20_Template, 2, 0, "mat-error", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u0417\u0430\u0431\u044B\u043B\u0438 \u043F\u0430\u0440\u043E\u043B\u044C? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0421\u043E\u0437\u0434\u0430\u0442\u044C \u0430\u043A\u043A\u0430\u0443\u043D\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u043E\u0439\u0442\u0438");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.wrongAuth);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.expired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.canLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("email").invalid && ctx.loginForm.get("email").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginForm.get("password").invalid && ctx.loginForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginForm.invalid || ctx.loginForm.disabled);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: [".login-window[_ngcontent-%COMP%] {\r\n  padding-bottom: 50px;\r\n  padding-top: 50px;\r\n  width: 90%;\r\n  max-width: 350px;\r\n}\r\n\r\n.description[_ngcontent-%COMP%] {\r\n  width: 80%;\r\n  text-align: center;\r\n  margin-top: 15px;\r\n  letter-spacing: .01785714em;\r\n  font-size: 1.01rem;\r\n  font-weight: 500;\r\n  line-height: 1.69rem;\r\n  color: #5f6368;\r\n}\r\n\r\nh4[_ngcontent-%COMP%] {\r\n  font-family: 'Google Sans',arial,sans-serif;\r\n  background: red;\r\n  \r\n  \r\n}\r\n\r\n.form-filed[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-top: 5px;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\na[_ngcontent-%COMP%] {\r\n  color: #2196f3;\r\n  text-decoration: none;\r\n  font-family: 'Google Sans',arial,sans-serif;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLDJCQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFDQTtFQUNFLFVBQVU7RUFDVixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMkNBQTJDO0FBQzdDIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi13aW5kb3cge1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuLmRlc2NyaXB0aW9uIHtcclxuICB3aWR0aDogODAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAuMDE3ODU3MTRlbTtcclxuICBmb250LXNpemU6IDEuMDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS42OXJlbTtcclxuICBjb2xvcjogIzVmNjM2ODtcclxufVxyXG5cclxuaDQge1xyXG4gIGZvbnQtZmFtaWx5OiAnR29vZ2xlIFNhbnMnLGFyaWFsLHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG4gIC8qaGVpZ2h0OiAxMDAlOyovXHJcbiAgLyp3aWR0aDogMTAwJTsqL1xyXG59XHJcbi5mb3JtLWZpbGVkIHtcclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5hIHtcclxuICBjb2xvcjogIzIxOTZmMztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6ICdHb29nbGUgU2FucycsYXJpYWwsc2Fucy1zZXJpZjtcclxufVxyXG5cclxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-login',
          templateUrl: './login.component.html',
          styleUrls: ['./login.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/personal/personal.component.ts":
  /*!************************************************!*\
    !*** ./src/app/personal/personal.component.ts ***!
    \************************************************/

  /*! exports provided: PersonalComponent */

  /***/
  function srcAppPersonalPersonalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PersonalComponent", function () {
      return PersonalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _account_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../account.service */
    "./src/app/account.service.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _snackbars_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../snackbars.service */
    "./src/app/snackbars.service.ts");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["appMode"];

    function PersonalComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_3_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r126);

          var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r125.add = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "arrow_back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalComponent_div_4_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r127.username);
      }
    }

    function PersonalComponent_div_4_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0418\u043C\u044F \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalComponent_div_4_div_19_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r129.email);
      }
    }

    function PersonalComponent_div_4_mat_error_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalComponent_div_4_div_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_4_div_27_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r136);

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r135.canEdit = true;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalComponent_div_4_button_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalComponent_div_4_div_29_Template(rf, ctx) {
      if (rf & 1) {
        var _r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_4_div_29_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r138);

          var ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r137.canEdit = false;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041E\u0442\u043C\u0435\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PersonalComponent_div_4_mat_card_39_Template(rf, ctx) {
      if (rf & 1) {
        var _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 37, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0410\u0434\u0440\u0435\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_4_mat_card_39_Template_button_click_15_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var app_r139 = ctx.$implicit;

          var ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r141.addNewApplicant(false, app_r139);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_4_mat_card_39_Template_button_click_18_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r142);

          var app_r139 = ctx.$implicit;

          var ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r143.removeApplicant(app_r139);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0423\u0434\u0430\u043B\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var app_r139 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r139.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r139.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", app_r139.type === "UL" ? "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E" : "\u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r139.address);
      }
    }

    function PersonalComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r145 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0414\u0430\u043D\u043D\u044B\u0435 \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PersonalComponent_div_4_Template_form_submit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r144.updateUserData();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0418\u043C\u044F \u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PersonalComponent_div_4_div_9_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PersonalComponent_div_4_mat_error_14_Template, 2, 0, "mat-error", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Email");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, PersonalComponent_div_4_div_19_Template, 2, 1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, PersonalComponent_div_4_mat_error_24_Template, 2, 0, "mat-error", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "mat-divider");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, PersonalComponent_div_4_div_27_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PersonalComponent_div_4_button_28_Template, 2, 0, "button", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, PersonalComponent_div_4_div_29_Template, 2, 0, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " \u0417\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u0438 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-card", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PersonalComponent_div_4_Template_mat_card_click_33_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r145);

          var ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r146.addNewApplicant(true, null);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u043D\u043E\u0432\u043E\u0433\u043E \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, PersonalComponent_div_4_mat_card_39_Template, 21, 4, "mat-card", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r123.userForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r123.username);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.userForm.get("username").invalid && ctx_r123.userForm.get("username").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("fxShow", ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r123.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.userForm.get("email").invalid && ctx_r123.userForm.get("email").touched);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r123.canEdit);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r123.applicants);
      }
    }

    function PersonalComponent_div_5_mat_form_field_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0413\u0420\u041D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r148.appForm.get("ogrn").value);
      }
    }

    function PersonalComponent_div_5_mat_form_field_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r149.appForm.get("head").value);
      }
    }

    function PersonalComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u0414\u0430\u043D\u043D\u044B\u0435 \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044F ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PersonalComponent_div_5_Template_form_submit_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r151);

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r150.changeApplicant();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0421\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u044F\u0432\u0438\u0442\u0435\u043B\u044F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select", 48, 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u043E\u0435 \u043B\u0438\u0446\u043E ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-option", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0418\u043D\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043B\u044C\u043D\u044B\u0439 \u043F\u0440\u0435\u0434\u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0442\u0435\u043B\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0418\u041D\u041D");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-form-field", 52);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u041A\u041F\u041F");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "input", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, PersonalComponent_div_5_mat_form_field_28_Template, 4, 1, "mat-form-field", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "input", 56);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, PersonalComponent_div_5_mat_form_field_33_Template, 4, 1, "mat-form-field", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u0418\u043C\u044F \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "input", 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 58);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10);

        var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r124.appForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", "IP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r147.value === "UL" ? "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438" : "\u0424\u0418\u041E");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r124.appForm.get("name").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r124.appForm.get("inn").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.value === "UL");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_r147.value === "UL" ? "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441" : "\u0410\u0434\u0440\u0435\u0441");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", ctx_r124.appForm.get("address").value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r147.value === "UL");
      }
    }

    var PersonalComponent =
    /*#__PURE__*/
    function () {
      function PersonalComponent(account, auth, snack) {
        _classCallCheck(this, PersonalComponent);

        this.account = account;
        this.auth = auth;
        this.snack = snack;
        this.canEdit = false;
        this.add = false;
        this.editApp = true;
        this.username = 'user';
        this.email = 'user@email.ru';
      }

      _createClass(PersonalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // console.log(this.auth.getEmail())
          this.fetch();
          this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.username, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
          });
          this.appForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            _id: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            inn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            kpp: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            ogrn: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            head: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
          });
        }
      }, {
        key: "fetch",
        value: function fetch() {
          var _this14 = this;

          this.username = this.auth.getName();
          this.email = this.auth.getEmail(); // console.log('res', this.username, this.email);

          this.aSub = this.account.getAllApplicants().subscribe(function (applicants) {
            // this.username = main.name;
            // this.appsCount = main.apps;
            // timeInterval(5000);
            // this.loaded = true;
            // console.log('apps', applicants);
            _this14.applicants = applicants;
          }, function (error) {
            if (error.code === 401) {
              _this14.auth.logout();
            }
          });
        }
      }, {
        key: "updateUserData",
        value: function updateUserData() {
          var _this15 = this;

          this.aSub = this.auth.updateUserData(this.userForm.value).subscribe(function (user) {
            _this15.username = user.username;
            _this15.email = user.email;
            _this15.canEdit = false;

            _this15.snack.show('Данные успешно обновлены');
          }, function (error) {
            if (error.code === 401) {
              _this15.auth.logout();
            } else {}
          });
        }
      }, {
        key: "addNewApplicant",
        value: function addNewApplicant(newApp, app) {
          // console.log(app);
          // console.log(this.appForm.value);
          this.add = true;

          if (!newApp) {
            this.editApp = true; // @ts-ignore

            this.typeRef.value = app.type; // console.log(this.typeRef.nativeElement, appl.type)

            this.appForm.controls.address.setValue(app.address);
            this.appForm.controls.type.setValue(app.type);
            this.appForm.controls.name.setValue(app.name);
            this.appForm.controls.head.setValue(app.head);
            this.appForm.controls.inn.setValue(app.inn);
            this.appForm.controls.kpp.setValue(app.kpp);
            this.appForm.controls.ogrn.setValue(app.ogrn);
            this.appForm.controls.title.setValue(app.title);

            this.appForm.controls._id.setValue(app._id);

            console.log(this.appForm.value);
          } else {
            this.editApp = false;
          }
        }
      }, {
        key: "changeApplicant",
        value: function changeApplicant() {
          var _this16 = this;

          if (this.editApp) {
            this.aSub = this.account.updateApplicant(this.appForm.value).subscribe(function (answer) {
              _this16.snack.show('Обновление прошло успешно');

              var index = _this16.applicants.findIndex(function (obj) {
                return obj._id === answer._id;
              });

              _this16.applicants[index] = answer;
              _this16.add = false;
            }, function (error) {
              if (error.status === 401) {
                _this16.auth.logout();
              }

              if (error.status === 409) {
                _this16.snack.show('Непредвиденная ошибка');
              }
            });
          } else {
            this.aSub = this.account.saveNewApplicant(this.appForm.value).subscribe(function (answer) {
              _this16.snack.show('Новый заявитель добавлен');

              _this16.add = false;

              _this16.applicants.push(answer);
            }, function (error) {
              if (error.status === 401) {
                _this16.auth.logout();
              }

              if (error.status === 409) {
                _this16.snack.show('Непредвиденная ошибка');
              }
            });
          }
        }
      }, {
        key: "removeApplicant",
        value: function removeApplicant(app) {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }]);

      return PersonalComponent;
    }();

    PersonalComponent.ɵfac = function PersonalComponent_Factory(t) {
      return new (t || PersonalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_snackbars_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarsService"]));
    };

    PersonalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PersonalComponent,
      selectors: [["app-personal"]],
      viewQuery: function PersonalComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.typeRef = _t.first);
        }
      },
      decls: 7,
      vars: 3,
      consts: [[1, "block-one"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "30", "fxLayout", "column"], ["fxFlex", "60", "fxFlex.lt-md", "100", "fxFlex.lt-lg", "55"], ["fxLayoutAlign", "start", "style", "padding: 10px; position: fixed; z-index: 2", 4, "ngIf"], ["style", "width: 100%", "fxLayout", "column", "fxLayoutAlign", "start center", 4, "ngIf"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "15"], ["fxLayoutAlign", "start", 2, "padding", "10px", "position", "fixed", "z-index", "2"], ["mat-icon-button", "", 3, "click"], ["fxLayout", "column", "fxLayoutAlign", "start center", 2, "width", "100%"], [1, "text-main", "header", 2, "margin-top", "35px", "text-align", "center"], [1, "step-content-alt", "long"], [2, "width", "100%", "padding", "0"], [3, "formGroup", "submit"], ["fxLayout", "row", "fxLayout.lt-sm", "column", 2, "padding", "15px 25px", "height", "85px"], ["fxFlex", "50", "fxLayoutAlign", "start center", 1, "text-main", "form-label"], ["fxFlex", "50", "fxLayoutAlign", "start center", "class", "form-value", 4, "ngIf"], ["fxFlex", "50", 3, "fxShow"], ["appearance", "outline", 1, "text-main", 2, "margin-top", "-5px", "width", "100%", "height", "100%"], ["formControlName", "username", "type", "text", "matInput", "", 3, "value"], [4, "ngIf"], ["formControlName", "email", "type", "email", "matInput", "", 3, "value"], ["fxLayout", "row", "fxLayoutAlign", "start center", 2, "padding", "15px 25px", "height", "85px"], ["class", "button alternative-button", 3, "click", 4, "ngIf"], ["type", "submit", "mat-raised-button", "", "class", "button primary-button", "style", "margin-right: 25px", 4, "ngIf"], [1, "text-main", "subheader", 2, "margin-top", "35px", "text-align", "center"], [1, "step-content", "long", "shadow"], [3, "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 2, "pointer-events", "none"], ["src", "assets/images/plus%20(1).png", 2, "height", "50px", "width", "50px", "margin-bottom", "15px"], [1, "text-main", "form-value", 2, "text-align", "center"], ["style", "margin-top: 25px; padding-bottom: 0; ", 4, "ngFor", "ngForOf"], ["fxFlex", "50", "fxLayoutAlign", "start center", 1, "form-value"], [1, "button", "alternative-button", 3, "click"], ["type", "submit", "mat-raised-button", "", 1, "button", "primary-button", 2, "margin-right", "25px"], [2, "margin-top", "25px", "padding-bottom", "0"], [1, "text-alternative", "applicant-title"], [1, "text-main", "applicant-name"], [1, "text-main", "applicant-type"], ["appMode", ""], [1, "text-main", "applicant-label"], [1, "text-alternative", "applicant-address"], [2, "padding-bottom", "15px", "padding-top", "15px"], ["mat-raised-button", "", 1, "button", "primary-button", 2, "margin-right", "25px", 3, "click"], ["mat-raised-button", "", 1, "button", "negative-button", 3, "click"], [1, "step-content", "normal"], [2, "padding-top", "25px", "padding-bottom", "25px"], ["fxLayout", "column", "fxLayoutAlign", "center center", 3, "formGroup", "submit"], ["appearance", "outline", 2, "width", "90%"], ["formControlName", "type"], [3, "value"], ["matInput", "", "placeholder", "\u041D\u0430\u0438\u043C\u0435\u043D\u043E\u0432\u0430\u043D\u0438\u0435 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438", "required", "", "formControlName", "name", 3, "value"], ["fxLayout", "row", "fxLayoutAlign", "space-between center", 2, "width", "90%"], ["appearance", "outline", 2, "width", "45%"], ["matInput", "", "placeholder", "\u0418\u041D\u041D", "required", "", "formControlName", "inn", 3, "value"], ["matInput", "", "placeholder", "\u041A\u041F\u041F", "required", "", "formControlName", "kpp"], ["appearance", "outline", "style", "width: 90%", 4, "ngIf"], ["matInput", "", "placeholder", "\u042E\u0440\u0438\u0434\u0438\u0447\u0435\u0441\u043A\u0438\u0439 \u0430\u0434\u0440\u0435\u0441", "required", "", "formControlName", "address", 3, "value"], ["matInput", "", "placeholder", "\u0418\u043C\u044F \u043F\u0440\u0438 \u0441\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0438", "required", "", "formControlName", "title"], ["mat-raised-button", "", "type", "submit", 1, "button", "primary-button"], ["matInput", "", "placeholder", "\u041E\u0413\u0420\u041D", "required", "", "formControlName", "ogrn", 3, "value"], ["matInput", "", "placeholder", "\u0413\u0435\u043D\u0435\u0440\u0430\u043B\u044C\u043D\u044B\u0439 \u0434\u0438\u0440\u0435\u043A\u0442\u043E\u0440", "required", "", "formControlName", "head", 3, "value"]],
      template: function PersonalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PersonalComponent_div_3_Template, 4, 0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PersonalComponent_div_4_Template, 40, 13, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PersonalComponent_div_5_Template, 41, 10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.add);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.add);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]],
      styles: [".form-label[_ngcontent-%COMP%] {\r\n  font-size: 112%;\r\n}\r\n\r\n.form-value[_ngcontent-%COMP%] {\r\n  font-size: 122%;\r\n}\r\n\r\n.applicant-name[_ngcontent-%COMP%] {\r\n  font-size: 130%;\r\n}\r\n\r\n.applicant-address[_ngcontent-%COMP%] {\r\n  font-size: 110%;\r\n\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.applicant-type[_ngcontent-%COMP%] {\r\n  font-size: 90%;\r\n  line-height: 1.55rem;\r\n}\r\n\r\n.applicant-title[_ngcontent-%COMP%] {\r\n  font-size: 105%;\r\n  text-align: right;\r\n  color: #1e73e8;\r\n}\r\n\r\n.applicant-label[_ngcontent-%COMP%] {\r\n  margin-top: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGVyc29uYWwvcGVyc29uYWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7O0VBRWYsbUJBQW1CO0FBQ3JCOztBQUNBO0VBQ0UsY0FBYztFQUNkLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BlcnNvbmFsL3BlcnNvbmFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMTIlO1xyXG59XHJcblxyXG4uZm9ybS12YWx1ZSB7XHJcbiAgZm9udC1zaXplOiAxMjIlO1xyXG59XHJcblxyXG4uYXBwbGljYW50LW5hbWUge1xyXG4gIGZvbnQtc2l6ZTogMTMwJTtcclxufVxyXG5cclxuLmFwcGxpY2FudC1hZGRyZXNzIHtcclxuICBmb250LXNpemU6IDExMCU7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLmFwcGxpY2FudC10eXBlIHtcclxuICBmb250LXNpemU6IDkwJTtcclxuICBsaW5lLWhlaWdodDogMS41NXJlbTtcclxufVxyXG5cclxuLmFwcGxpY2FudC10aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMDUlO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIGNvbG9yOiAjMWU3M2U4O1xyXG59XHJcblxyXG4uYXBwbGljYW50LWxhYmVsIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PersonalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-personal',
          templateUrl: './personal.component.html',
          styleUrls: ['./personal.component.css']
        }]
      }], function () {
        return [{
          type: _account_service__WEBPACK_IMPORTED_MODULE_2__["AccountService"]
        }, {
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _snackbars_service__WEBPACK_IMPORTED_MODULE_4__["SnackbarsService"]
        }];
      }, {
        typeRef: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['appMode', {
            "static": false
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/privacy/privacy.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/privacy/privacy.component.ts ***!
    \**********************************************/

  /*! exports provided: PrivacyComponent */

  /***/
  function srcAppPrivacyPrivacyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PrivacyComponent", function () {
      return PrivacyComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _custom_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../custom.validators */
    "./src/app/custom.validators.ts");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/divider.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    function PrivacyComponent_mat_error_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0435\u043D \u043D\u0435\u0432\u0435\u0440\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivacyComponent_mat_error_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C \u043D\u0435 \u043C\u0435\u043D\u0435\u0435 8 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function PrivacyComponent_mat_error_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u0430\u0440\u043E\u043B\u0438 \u0434\u043E\u043B\u0436\u043D\u044B \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var PrivacyComponent =
    /*#__PURE__*/
    function () {
      function PrivacyComponent(auth, snackBar) {
        _classCallCheck(this, PrivacyComponent);

        this.auth = auth;
        this.snackBar = snackBar;
      }

      _createClass(PrivacyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.passForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            old: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)]),
            confirm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
          }, {
            validators: _custom_validators__WEBPACK_IMPORTED_MODULE_2__["CustomValidators"].confirmPassword
          });
        }
      }, {
        key: "updatePassword",
        value: function updatePassword() {
          var _this17 = this;

          this.passForm.disable();
          this.aSub = this.auth.updatePassword(this.passForm.value).subscribe(function (action) {
            // console.log('action', action);
            _this17.openSnackBar('Пароль успешно изменен', 'ОК');

            _this17.passForm.enable();
          }, function (error) {
            if (error.code === 401) {
              _this17.auth.logout();
            }

            console.log('err');

            _this17.openSnackBar('Неправильный текущий пароль', 'ОК');

            if (error.code === 409) {}

            _this17.passForm.enable();
          });
        }
      }, {
        key: "confirmPasswords",
        value: function confirmPasswords(group) {
          if (group.get('password') === null) {
            return null;
          }

          if (group.get('confirm') === null) {
            return null;
          }

          var pass = group.get('password').value;
          var confirmPass = group.get('confirm').value;
          console.log('проверка', pass, confirmPass);
          return pass === confirmPass ? null : {
            notSame: true
          };
        }
      }, {
        key: "checkOldPassword",
        value: function checkOldPassword(control, auth) {
          console.log('check validator', control.value);
          return this.auth.checkPassword(control.value);
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 2000
          });
        }
      }, {
        key: "a",
        value: function a() {
          console.log(this.passForm.errors.notSame);
        }
      }]);

      return PrivacyComponent;
    }();

    PrivacyComponent.ɵfac = function PrivacyComponent_Factory(t) {
      return new (t || PrivacyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]));
    };

    PrivacyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PrivacyComponent,
      selectors: [["app-privacy"]],
      decls: 42,
      vars: 5,
      consts: [[1, "block-one"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "30", "fxLayout", "column"], ["fxFlex", "60", "fxFlex.lt-md", "100", "fxFlex.lt-lg", "55", "fxLayout", "column", "fxLayoutAlign", "start center"], [1, "text-main", "header", 2, "margin-top", "35px", "text-align", "center"], [1, "step-content-alt", "long"], [2, "width", "100%", "padding", "15px 0 0 0"], [3, "formGroup", "submit"], ["fxLayout", "row", 2, "padding", "15px 25px", "height", "85px"], ["fxFlex", "50", "fxHide.lt-sm", "true", "fxLayoutAlign", "start center", 1, "text-main", "form-label"], ["fxFlex", "50", "fxFlex.lt-sm", "100"], ["appearance", "outline", 1, "text-main", 2, "margin-top", "-5px", "width", "100%", "height", "100%"], ["fxHide", "true", "fxShow.lt-sm", "true"], ["type", "password", "matInput", "", "formControlName", "old"], [4, "ngIf"], ["type", "password", "matInput", "", "formControlName", "password"], ["fxLayout", "row", 2, "padding", "15px 25px", "height", "85px", "margin-bottom", "15px"], ["type", "password", "matInput", "", "formControlName", "confirm"], [3, "click"], ["fxLayout", "row", 2, "padding", "15px 25px", "height", "65px"], ["mat-raised-button", "", "type", "submit", 1, "button", "primary-button", 3, "disabled"], ["fxFlex", "20", "fxHide.lt-md", "true", "fxFlex.lt-lg", "15"]],
      template: function PrivacyComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function PrivacyComponent_Template_form_submit_7_listener() {
            return ctx.updatePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, PrivacyComponent_mat_error_16_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, PrivacyComponent_mat_error_25_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PrivacyComponent_mat_error_34_Template, 2, 0, "mat-error", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PrivacyComponent_Template_button_click_35_listener() {
            return ctx.a();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.passForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passForm.get("old").invalid && ctx.passForm.get("old").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passForm.get("password").invalid && ctx.passForm.get("password").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.passForm.errors ? ctx.passForm.errors.notSame : false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.passForm.invalid || ctx.passForm.disabled);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_6__["DefaultShowHideDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_11__["MatDivider"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatError"]],
      styles: [".form-label[_ngcontent-%COMP%] {\r\n  font-size: 112%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcHJpdmFjeS9wcml2YWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiAxMTIlO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PrivacyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-privacy',
          templateUrl: './privacy.component.html',
          styleUrls: ['./privacy.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/register/register.component.ts":
  /*!************************************************!*\
    !*** ./src/app/register/register.component.ts ***!
    \************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/flex-layout/flex */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/flex-layout/extended */
    "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");

    var _c0 = function _c0() {
      return ["/login"];
    };

    var RegisterComponent =
    /*#__PURE__*/
    function () {
      function RegisterComponent(auth, router, route) {
        _classCallCheck(this, RegisterComponent);

        this.auth = auth;
        this.router = router;
        this.route = route;
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8)])
          });
          this.route.queryParams.subscribe(function (params) {// if (params['registered']) {
            //
            // }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.aSub) {
            this.aSub.unsubscribe();
          }
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this18 = this;

          this.registerForm.disable();
          this.aSub = this.auth.register(this.registerForm.value).subscribe(function () {
            _this18.router.navigate(['/login'], {
              queryParams: {
                registered: true
              }
            });
          }, function (error) {
            _this18.router.navigate(['/register'], {
              queryParams: {
                emailExists: true
              }
            });

            _this18.registerForm.enable();
          });
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
      return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
    };

    RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegisterComponent,
      selectors: [["app-register"]],
      decls: 33,
      vars: 4,
      consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "block-one"], ["fxLayout", "row", "fxLayoutAlign", "center center", 1, "register-window"], ["fxFlex.lt-md", "100", "fxLayout", "column", "fxLayoutAlign", "start center", 2, "width", "350px"], [1, "register-block"], ["src", "assets/images/logo.png", 2, "height", "45px", "width", "45px", "margin-bottom", "10px"], [1, "card-header", "register-header"], [1, "register-block", 3, "formGroup", "ngSubmit"], ["fxLayout", "row"], ["appearance", "outline", 1, "text-main", 2, "width", "100%"], ["formControlName", "username", "matInput", "", "placeholder", "\u0418\u043C\u044F"], ["appearance", "outline", 1, "text-main"], ["formControlName", "email", "type", "email", "matInput", "", "placeholder", "email"], ["formControlName", "password", "type", "password", "matInput", "", "placeholder", "\u041F\u0430\u0440\u043E\u043B\u044C"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "button", "alternative-button", 3, "routerLink"], ["type", "submit", "mat-raised-button", "", 1, "button", "primary-button", 3, "disabled"], ["fxHide.lt-md", "true", "fxLayout", "column", "fxLayoutAlign", "center center", 2, "width", "350px"], ["fxLayout", "column", "fxLayoutAlign", "center center"], ["src", "assets/images/register-logo.png", 2, "height", "50%", "width", "50%"], [1, "text-alternative", "card-description"]],
      template: function RegisterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0421\u043E\u0437\u0434\u0430\u0439\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegisterComponent_Template_form_ngSubmit_7_listener() {
            return ctx.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u043C\u044F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "e-mail");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u041F\u0430\u0440\u043E\u043B\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " \u0412\u043E\u0439\u0442\u0438 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " \u0421\u043E\u0437\u0434\u0430\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442. \u041F\u043E\u0434\u0430\u0432\u0430\u0439 \u0437\u0430\u044F\u0432\u043A\u0438 \u043E\u0442\u043E\u0432\u0441\u044E\u0434\u0443. \u041F\u043E\u043B\u0443\u0447\u0430\u0439 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.registerForm.invalid || ctx.registerForm.disabled);
        }
      },
      directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultShowHideDirective"]],
      styles: [".register-header[_ngcontent-%COMP%] {\r\n  text-align: left;\r\n  width: 90%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n\r\n\r\n.register-body[_ngcontent-%COMP%] {\r\n  padding-top: 50px;\r\n  padding-bottom: 50px;\r\n}\r\n\r\n\r\n\r\n.register-window[_ngcontent-%COMP%] {\r\n  height: 450px;\r\n  width: 90%;\r\n  max-width: 700px;\r\n}\r\n\r\n\r\n\r\n.register-block[_ngcontent-%COMP%] {\r\n  width: 90%;\r\n  margin-left: 5%;\r\n  margin-right: 5%;\r\n}\r\n\r\n\r\n\r\nmat-form-field[_ngcontent-%COMP%] {\r\n  width: 100%;\r\n}\r\n\r\n\r\n\r\n.register-line[_ngcontent-%COMP%] {\r\n  text-align: center;\r\n  padding: 5%;\r\n  font-family: \"Segoe UI Light\";\r\n  font-size: 1.1rem;\r\n  \r\n}\r\n\r\n\r\n\r\na[_ngcontent-%COMP%] {\r\n  text-decoration: none;\r\n  color: dodgerblue;\r\n}\r\n\r\n\r\n\r\n.error-box[_ngcontent-%COMP%] {\r\n  background: #c73934;\r\n  color: #f6f6f6;\r\n  position: absolute;\r\n  bottom: 25px;\r\n  height: 40px;\r\n  width: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7Ozs7QUFJQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEI7Ozs7QUFDQTtFQUNFLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOzs7O0FBQ0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7OztBQUNBO0VBQ0UsV0FBVztBQUNiOzs7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQkFBaUI7RUFDakIsdUJBQXVCO0FBQ3pCOzs7O0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COzs7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVnaXN0ZXItaGVhZGVyIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcblxyXG5cclxuLnJlZ2lzdGVyLWJvZHkge1xyXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1MHB4O1xyXG59XHJcbi5yZWdpc3Rlci13aW5kb3cge1xyXG4gIGhlaWdodDogNDUwcHg7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXgtd2lkdGg6IDcwMHB4O1xyXG59XHJcbi5yZWdpc3Rlci1ibG9jayB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcclxufVxyXG5tYXQtZm9ybS1maWVsZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnJlZ2lzdGVyLWxpbmUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1JTtcclxuICBmb250LWZhbWlseTogXCJTZWdvZSBVSSBMaWdodFwiO1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG4gIC8qbGV0dGVyLXNwYWNpbmc6IDNweDsqL1xyXG59XHJcbmEge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjb2xvcjogZG9kZ2VyYmx1ZTtcclxufVxyXG4uZXJyb3ItYm94IHtcclxuICBiYWNrZ3JvdW5kOiAjYzczOTM0O1xyXG4gIGNvbG9yOiAjZjZmNmY2O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDI1cHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-register',
          templateUrl: './register.component.html',
          styleUrls: ['./register.component.css']
        }]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/snackbars.service.ts":
  /*!**************************************!*\
    !*** ./src/app/snackbars.service.ts ***!
    \**************************************/

  /*! exports provided: SnackbarsService */

  /***/
  function srcAppSnackbarsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SnackbarsService", function () {
      return SnackbarsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");

    var SnackbarsService =
    /*#__PURE__*/
    function () {
      function SnackbarsService(snackBar) {
        _classCallCheck(this, SnackbarsService);

        this.snackBar = snackBar;
      }

      _createClass(SnackbarsService, [{
        key: "show",
        value: function show(message) {
          this.snackBar.open(message, 'OK', {
            duration: 2000
          });
        }
      }]);

      return SnackbarsService;
    }();

    SnackbarsService.ɵfac = function SnackbarsService_Factory(t) {
      return new (t || SnackbarsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]));
    };

    SnackbarsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SnackbarsService,
      factory: SnackbarsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SnackbarsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/token.interceptor.ts":
  /*!**************************************!*\
    !*** ./src/app/token.interceptor.ts ***!
    \**************************************/

  /*! exports provided: TokenInterceptor */

  /***/
  function srcAppTokenInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function () {
      return TokenInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./auth.service */
    "./src/app/auth.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var TokenInterceptor =
    /*#__PURE__*/
    function () {
      function TokenInterceptor(auth, router) {
        _classCallCheck(this, TokenInterceptor);

        this.auth = auth;
        this.router = router;
      }

      _createClass(TokenInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var _this19 = this;

          if (this.auth.isAuthenticated()) {
            req = req.clone({
              setHeaders: {
                Authorization: this.auth.getToken()
              }
            });
          }

          return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            return _this19.handleAuthError(error);
          }));
        }
      }, {
        key: "handleAuthError",
        value: function handleAuthError(error) {
          if (error.status === 401) {
            this.router.navigate(['/login'], {
              queryParams: {
                expired: true
              }
            });
          }

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error);
        }
      }]);

      return TokenInterceptor;
    }();

    TokenInterceptor.ɵfac = function TokenInterceptor_Factory(t) {
      return new (t || TokenInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
    };

    TokenInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: TokenInterceptor,
      factory: TokenInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TokenInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\ventr\WebstormProjects\self-register-mark-II\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map