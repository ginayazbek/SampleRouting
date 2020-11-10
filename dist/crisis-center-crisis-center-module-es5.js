(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["crisis-center-crisis-center-module"], {
    /***/
    "4yGZ":
    /*!*******************************************************!*\
      !*** ./src/app/crisis-center/crisis-center.module.ts ***!
      \*******************************************************/

    /*! exports provided: CrisisCenterModule */

    /***/
    function yGZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisCenterModule", function () {
        return CrisisCenterModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crisis-center-home/crisis-center-home.component */
      "6tC0");
      /* harmony import */


      var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./crisis-list/crisis-list.component */
      "XaPe");
      /* harmony import */


      var _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crisis-center/crisis-center.component */
      "Qgk0");
      /* harmony import */


      var _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./crisis-detail/crisis-detail.component */
      "C8sC");
      /* harmony import */


      var _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./crisis-center-routing.module */
      "FBWy");

      var CrisisCenterModule = function CrisisCenterModule() {
        _classCallCheck(this, CrisisCenterModule);
      };

      CrisisCenterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CrisisCenterModule
      });
      CrisisCenterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CrisisCenterModule_Factory(t) {
          return new (t || CrisisCenterModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_7__["CrisisCenterRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrisisCenterModule, {
          declarations: [_crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_5__["CrisisCenterComponent"], _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_4__["CrisisListComponent"], _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_3__["CrisisCenterHomeComponent"], _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_6__["CrisisDetailComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_7__["CrisisCenterRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisCenterModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"], _crisis_center_routing_module__WEBPACK_IMPORTED_MODULE_7__["CrisisCenterRoutingModule"]],
            declarations: [_crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_5__["CrisisCenterComponent"], _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_4__["CrisisListComponent"], _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_3__["CrisisCenterHomeComponent"], _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_6__["CrisisDetailComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "6tC0":
    /*!**********************************************************************************!*\
      !*** ./src/app/crisis-center/crisis-center-home/crisis-center-home.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: CrisisCenterHomeComponent */

    /***/
    function tC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisCenterHomeComponent", function () {
        return CrisisCenterHomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CrisisCenterHomeComponent = function CrisisCenterHomeComponent() {
        _classCallCheck(this, CrisisCenterHomeComponent);
      };

      CrisisCenterHomeComponent.ɵfac = function CrisisCenterHomeComponent_Factory(t) {
        return new (t || CrisisCenterHomeComponent)();
      };

      CrisisCenterHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CrisisCenterHomeComponent,
        selectors: [["app-crisis-center-home"]],
        decls: 2,
        vars: 0,
        template: function CrisisCenterHomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Welcome to the Crisis Center");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1jZW50ZXIvY3Jpc2lzLWNlbnRlci1ob21lL2NyaXNpcy1jZW50ZXItaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisCenterHomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-crisis-center-home',
            templateUrl: './crisis-center-home.component.html',
            styleUrls: ['./crisis-center-home.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "C8sC":
    /*!************************************************************************!*\
      !*** ./src/app/crisis-center/crisis-detail/crisis-detail.component.ts ***!
      \************************************************************************/

    /*! exports provided: CrisisDetailComponent */

    /***/
    function C8sC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisDetailComponent", function () {
        return CrisisDetailComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../dialog.service */
      "Cw5F");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function CrisisDetailComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Id: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CrisisDetailComponent_div_0_Template_input_ngModelChange_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r1.editName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrisisDetailComponent_div_0_Template_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CrisisDetailComponent_div_0_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Cancel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\"", ctx_r0.editName, "\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.crisis.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.editName);
        }
      }

      var CrisisDetailComponent = /*#__PURE__*/function () {
        function CrisisDetailComponent(route, router, dialogService) {
          _classCallCheck(this, CrisisDetailComponent);

          this.route = route;
          this.router = router;
          this.dialogService = dialogService;
        }

        _createClass(CrisisDetailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.route.data.subscribe(function (data) {
              _this.editName = data.crisis.name;
              _this.crisis = data.crisis;
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.gotoCrises();
          }
        }, {
          key: "save",
          value: function save() {
            this.crisis.name = this.editName;
            this.gotoCrises();
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged
            if (!this.crisis || this.crisis.name === this.editName) {
              return true;
            } // Otherwise ask the user with the dialog service and return its
            // observable which resolves to true or false when the user decides


            return this.dialogService.confirm('Discard changes?');
          }
        }, {
          key: "gotoCrises",
          value: function gotoCrises() {
            var crisisId = this.crisis ? this.crisis.id : null; // Pass along the crisis id if available
            // so that the CrisisListComponent can select that crisis.
            // Add a totally useless `foo` parameter for kicks.
            // Relative navigation back to the crises

            this.router.navigate(['../', {
              id: crisisId,
              foo: 'foo'
            }], {
              relativeTo: this.route
            });
          }
        }]);

        return CrisisDetailComponent;
      }();

      CrisisDetailComponent.ɵfac = function CrisisDetailComponent_Factory(t) {
        return new (t || CrisisDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]));
      };

      CrisisDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CrisisDetailComponent,
        selectors: [["app-crisis-detail"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], ["placeholder", "name", 3, "ngModel", "ngModelChange"], [3, "click"]],
        template: function CrisisDetailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CrisisDetailComponent_div_0_Template, 16, 3, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.crisis);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]],
        styles: ["input[_ngcontent-%COMP%] {\n  width: 20em\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jpc2lzLWNlbnRlci9jcmlzaXMtZGV0YWlsL2NyaXNpcy1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jcmlzaXMtY2VudGVyL2NyaXNpcy1kZXRhaWwvY3Jpc2lzLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW5wdXQge1xuICB3aWR0aDogMjBlbVxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisDetailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-crisis-detail',
            templateUrl: './crisis-detail.component.html',
            styleUrls: ['./crisis-detail.component.css']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _dialog_service__WEBPACK_IMPORTED_MODULE_2__["DialogService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Cw5F":
    /*!***********************************!*\
      !*** ./src/app/dialog.service.ts ***!
      \***********************************/

    /*! exports provided: DialogService */

    /***/
    function Cw5F(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DialogService", function () {
        return DialogService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /**
       * Async modal dialog service
       * DialogService makes this app easier to test by faking this service.
       * TODO: better modal implementation that doesn't use window.confirm
       */


      var DialogService = /*#__PURE__*/function () {
        function DialogService() {
          _classCallCheck(this, DialogService);
        }

        _createClass(DialogService, [{
          key: "confirm",

          /**
           * Ask user to confirm an action. `message` explains the action and choices.
           * Returns observable resolving to `true`=confirm or `false`=cancel
           */
          value: function confirm(message) {
            var confirmation = window.confirm(message || 'Is it OK?');
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(confirmation);
          }
        }]);

        return DialogService;
      }();

      DialogService.ɵfac = function DialogService_Factory(t) {
        return new (t || DialogService)();
      };

      DialogService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DialogService,
        factory: DialogService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DialogService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "FBWy":
    /*!***************************************************************!*\
      !*** ./src/app/crisis-center/crisis-center-routing.module.ts ***!
      \***************************************************************/

    /*! exports provided: CrisisCenterRoutingModule */

    /***/
    function FBWy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisCenterRoutingModule", function () {
        return CrisisCenterRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./crisis-center-home/crisis-center-home.component */
      "6tC0");
      /* harmony import */


      var _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crisis-list/crisis-list.component */
      "XaPe");
      /* harmony import */


      var _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./crisis-center/crisis-center.component */
      "Qgk0");
      /* harmony import */


      var _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./crisis-detail/crisis-detail.component */
      "C8sC");
      /* harmony import */


      var _can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../can-deactivate.guard */
      "vvvQ");
      /* harmony import */


      var _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./crisis-detail-resolver.service */
      "Iem4");

      var crisisCenterRoutes = [{
        path: '',
        component: _crisis_center_crisis_center_component__WEBPACK_IMPORTED_MODULE_4__["CrisisCenterComponent"],
        children: [{
          path: '',
          component: _crisis_list_crisis_list_component__WEBPACK_IMPORTED_MODULE_3__["CrisisListComponent"],
          children: [{
            path: ':id',
            component: _crisis_detail_crisis_detail_component__WEBPACK_IMPORTED_MODULE_5__["CrisisDetailComponent"],
            canDeactivate: [_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_6__["CanDeactivateGuard"]],
            resolve: {
              crisis: _crisis_detail_resolver_service__WEBPACK_IMPORTED_MODULE_7__["CrisisDetailResolverService"]
            }
          }, {
            path: '',
            component: _crisis_center_home_crisis_center_home_component__WEBPACK_IMPORTED_MODULE_2__["CrisisCenterHomeComponent"]
          }]
        }]
      }];

      var CrisisCenterRoutingModule = function CrisisCenterRoutingModule() {
        _classCallCheck(this, CrisisCenterRoutingModule);
      };

      CrisisCenterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: CrisisCenterRoutingModule
      });
      CrisisCenterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function CrisisCenterRoutingModule_Factory(t) {
          return new (t || CrisisCenterRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(crisisCenterRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CrisisCenterRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisCenterRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(crisisCenterRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Id7j":
    /*!**********************************************!*\
      !*** ./src/app/crisis-center/mock-crises.ts ***!
      \**********************************************/

    /*! exports provided: CRISES */

    /***/
    function Id7j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CRISES", function () {
        return CRISES;
      });

      var CRISES = [{
        id: 1,
        name: 'Dragon Burning Cities'
      }, {
        id: 2,
        name: 'Sky Rains Great White Sharks'
      }, {
        id: 3,
        name: 'Giant Asteroid Heading For Earth'
      }, {
        id: 4,
        name: 'Procrastinators Meeting Delayed Again'
      }];
      /***/
    },

    /***/
    "Iem4":
    /*!*****************************************************************!*\
      !*** ./src/app/crisis-center/crisis-detail-resolver.service.ts ***!
      \*****************************************************************/

    /*! exports provided: CrisisDetailResolverService */

    /***/
    function Iem4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisDetailResolverService", function () {
        return CrisisDetailResolverService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _crisis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./crisis.service */
      "jD27");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CrisisDetailResolverService = /*#__PURE__*/function () {
        function CrisisDetailResolverService(cs, router) {
          _classCallCheck(this, CrisisDetailResolverService);

          this.cs = cs;
          this.router = router;
        }

        _createClass(CrisisDetailResolverService, [{
          key: "resolve",
          value: function resolve(route, state) {
            var _this2 = this;

            var id = route.paramMap.get('id');
            return this.cs.getCrisis(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function (crisis) {
              if (crisis) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(crisis);
              } else {
                // id not found
                _this2.router.navigate(['/crisis-center']);

                return rxjs__WEBPACK_IMPORTED_MODULE_1__["EMPTY"];
              }
            }));
          }
        }]);

        return CrisisDetailResolverService;
      }();

      CrisisDetailResolverService.ɵfac = function CrisisDetailResolverService_Factory(t) {
        return new (t || CrisisDetailResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_crisis_service__WEBPACK_IMPORTED_MODULE_3__["CrisisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]));
      };

      CrisisDetailResolverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CrisisDetailResolverService,
        factory: CrisisDetailResolverService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisDetailResolverService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _crisis_service__WEBPACK_IMPORTED_MODULE_3__["CrisisService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "Qgk0":
    /*!************************************************************************!*\
      !*** ./src/app/crisis-center/crisis-center/crisis-center.component.ts ***!
      \************************************************************************/

    /*! exports provided: CrisisCenterComponent */

    /***/
    function Qgk0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisCenterComponent", function () {
        return CrisisCenterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var CrisisCenterComponent = function CrisisCenterComponent() {
        _classCallCheck(this, CrisisCenterComponent);
      };

      CrisisCenterComponent.ɵfac = function CrisisCenterComponent_Factory(t) {
        return new (t || CrisisCenterComponent)();
      };

      CrisisCenterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CrisisCenterComponent,
        selectors: [["app-crisis-center"]],
        decls: 3,
        vars: 0,
        template: function CrisisCenterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "CRISIS CENTER");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyaXNpcy1jZW50ZXIvY3Jpc2lzLWNlbnRlci9jcmlzaXMtY2VudGVyLmNvbXBvbmVudC5jc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisCenterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-crisis-center',
            templateUrl: './crisis-center.component.html',
            styleUrls: ['./crisis-center.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "XaPe":
    /*!********************************************************************!*\
      !*** ./src/app/crisis-center/crisis-list/crisis-list.component.ts ***!
      \********************************************************************/

    /*! exports provided: CrisisListComponent */

    /***/
    function XaPe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisListComponent", function () {
        return CrisisListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _crisis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../crisis.service */
      "jD27");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      var _c0 = function _c0(a0) {
        return [a0];
      };

      function CrisisListComponent_li_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var crisis_r1 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", crisis_r1.id === ctx_r0.selectedId);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, crisis_r1.id));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](crisis_r1.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", crisis_r1.name, " ");
        }
      }

      var CrisisListComponent = /*#__PURE__*/function () {
        function CrisisListComponent(service, route) {
          _classCallCheck(this, CrisisListComponent);

          this.service = service;
          this.route = route;
        }

        _createClass(CrisisListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            this.crises$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])(function (params) {
              _this3.selectedId = +params.get('id');
              return _this3.service.getCrises();
            }));
          }
        }]);

        return CrisisListComponent;
      }();

      CrisisListComponent.ɵfac = function CrisisListComponent_Factory(t) {
        return new (t || CrisisListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_crisis_service__WEBPACK_IMPORTED_MODULE_2__["CrisisService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]));
      };

      CrisisListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CrisisListComponent,
        selectors: [["app-crisis-list"]],
        decls: 4,
        vars: 3,
        consts: [[1, "crises"], [3, "selected", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "badge"]],
        template: function CrisisListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CrisisListComponent_li_1_Template, 5, 7, "li", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.crises$));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
        styles: [".crises[_ngcontent-%COMP%] {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 24em;\n}\n.crises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  cursor: pointer;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.crises[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #888;\n  text-decoration: none;\n  display: block;\n}\n.crises[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color:#607D8B;\n}\n.crises[_ngcontent-%COMP%]   .badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  min-width: 16px;\n  text-align: right;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\nbutton[_ngcontent-%COMP%] {\n  background-color: #eee;\n  border: none;\n  padding: 5px 10px;\n  border-radius: 4px;\n  cursor: pointer;\n  cursor: hand;\n  font-family: Arial;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: #cfd8dc;\n}\nbutton.delete[_ngcontent-%COMP%] {\n  position: relative;\n  left: 194px;\n  top: -32px;\n  background-color: gray !important;\n  color: white;\n}\n.crises[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%] {\n  background-color: #CFD8DC;\n  color: white;\n}\n.crises[_ngcontent-%COMP%]   li.selected[_ngcontent-%COMP%]:hover {\n  background-color: #BBD8DC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3Jpc2lzLWNlbnRlci9jcmlzaXMtbGlzdC9jcmlzaXMtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztFQUNFLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLFdBQVc7QUFDYjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxjQUFjO0VBQ2Qsc0JBQXNCO0VBQ3RCLFVBQVU7QUFDWjtBQUVBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLDRCQUE0QjtFQUM1Qix5QkFBeUI7RUFDekIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixpQ0FBaUM7RUFDakMsWUFBWTtBQUNkO0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0IiLCJmaWxlIjoic3JjL2FwcC9jcmlzaXMtY2VudGVyL2NyaXNpcy1saXN0L2NyaXNpcy1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBDcmlzaXNMaXN0Q29tcG9uZW50J3MgcHJpdmF0ZSBDU1Mgc3R5bGVzICovXG4uY3Jpc2VzIHtcbiAgbWFyZ2luOiAwIDAgMmVtIDA7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDI0ZW07XG59XG4uY3Jpc2VzIGxpIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIG1hcmdpbjogLjVlbTtcbiAgcGFkZGluZzogLjNlbSAwO1xuICBoZWlnaHQ6IDEuNmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5jcmlzZXMgbGk6aG92ZXIge1xuICBjb2xvcjogIzYwN0Q4QjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0RERDtcbiAgbGVmdDogLjFlbTtcbn1cblxuLmNyaXNlcyBhIHtcbiAgY29sb3I6ICM4ODg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jcmlzZXMgYTpob3ZlciB7XG4gIGNvbG9yOiM2MDdEOEI7XG59XG5cbi5jcmlzZXMgLmJhZGdlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtaW4td2lkdGg6IDE2cHg7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufVxuXG5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmc6IDVweCAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY3Vyc29yOiBoYW5kO1xuICBmb250LWZhbWlseTogQXJpYWw7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmQ4ZGM7XG59XG5cbmJ1dHRvbi5kZWxldGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDE5NHB4O1xuICB0b3A6IC0zMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNyaXNlcyBsaS5zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDRkQ4REM7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5jcmlzZXMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CrisisListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-crisis-list',
            templateUrl: './crisis-list.component.html',
            styleUrls: ['./crisis-list.component.css']
          }]
        }], function () {
          return [{
            type: _crisis_service__WEBPACK_IMPORTED_MODULE_2__["CrisisService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "jD27":
    /*!*************************************************!*\
      !*** ./src/app/crisis-center/crisis.service.ts ***!
      \*************************************************/

    /*! exports provided: CrisisService */

    /***/
    function jD27(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CrisisService", function () {
        return CrisisService;
      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _mock_crises__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./mock-crises */
      "Id7j");
      /* harmony import */


      var _message_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../message.service */
      "OdHV");

      var CrisisService = /*#__PURE__*/function () {
        function CrisisService(messageService) {
          _classCallCheck(this, CrisisService);

          this.messageService = messageService;
          this.crises$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_mock_crises__WEBPACK_IMPORTED_MODULE_3__["CRISES"]);
        }

        _createClass(CrisisService, [{
          key: "getCrises",
          value: function getCrises() {
            return this.crises$;
          }
        }, {
          key: "getCrisis",
          value: function getCrisis(id) {
            return this.getCrises().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (crises) {
              return crises.find(function (crisis) {
                return crisis.id === +id;
              });
            }));
          }
        }, {
          key: "addCrisis",
          value: function addCrisis(name) {
            name = name.trim();

            if (name) {
              var crisis = {
                id: CrisisService.nextCrisisId++,
                name: name
              };

              _mock_crises__WEBPACK_IMPORTED_MODULE_3__["CRISES"].push(crisis);

              this.crises$.next(_mock_crises__WEBPACK_IMPORTED_MODULE_3__["CRISES"]);
            }
          }
        }]);

        return CrisisService;
      }();

      CrisisService.nextCrisisId = 100;

      CrisisService.ɵfac = function CrisisService_Factory(t) {
        return new (t || CrisisService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]));
      };

      CrisisService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: CrisisService,
        factory: CrisisService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](CrisisService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _message_service__WEBPACK_IMPORTED_MODULE_4__["MessageService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "vvvQ":
    /*!*****************************************!*\
      !*** ./src/app/can-deactivate.guard.ts ***!
      \*****************************************/

    /*! exports provided: CanDeactivateGuard */

    /***/
    function vvvQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CanDeactivateGuard", function () {
        return CanDeactivateGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var CanDeactivateGuard = /*#__PURE__*/function () {
        function CanDeactivateGuard() {
          _classCallCheck(this, CanDeactivateGuard);
        }

        _createClass(CanDeactivateGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            return component.canDeactivate ? component.canDeactivate() : true;
          }
        }]);

        return CanDeactivateGuard;
      }();

      CanDeactivateGuard.ɵfac = function CanDeactivateGuard_Factory(t) {
        return new (t || CanDeactivateGuard)();
      };

      CanDeactivateGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: CanDeactivateGuard,
        factory: CanDeactivateGuard.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanDeactivateGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=crisis-center-crisis-center-module-es5.js.map