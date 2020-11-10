(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["admin-admin-module"],{

/***/ "0/63":
/*!********************************************************************!*\
  !*** ./src/app/admin/admin-dashboard/admin-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AdminDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminDashboardComponent", function() { return AdminDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../selective-preloading-strategy.service */ "/s+T");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function AdminDashboardComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const module_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](module_r1);
} }
class AdminDashboardComponent {
    constructor(route, preloadStrategy) {
        this.route = route;
        this.modules = preloadStrategy.preloadedModules;
    }
    ngOnInit() {
        // Capture the session ID if available
        this.sessionId = this.route
            .queryParamMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(params => params.get('session_id') || 'None'));
        // Capture the fragment if available
        this.token = this.route
            .fragment
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(fragment => fragment || 'None'));
    }
}
AdminDashboardComponent.ɵfac = function AdminDashboardComponent_Factory(t) { return new (t || AdminDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_3__["SelectivePreloadingStrategyService"])); };
AdminDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminDashboardComponent, selectors: [["app-admin-dashboard"]], decls: 12, vars: 7, consts: [["id", "anchor"], [4, "ngFor", "ngForOf"]], template: function AdminDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Preloaded Modules\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AdminDashboardComponent_li_11_Template, 2, 1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Session ID: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, ctx.sessionId), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Token: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](8, 5, ctx.token), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modules);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLWRhc2hib2FyZC9hZG1pbi1kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin-dashboard',
                templateUrl: './admin-dashboard.component.html',
                styleUrls: ['./admin-dashboard.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _selective_preloading_strategy_service__WEBPACK_IMPORTED_MODULE_3__["SelectivePreloadingStrategyService"] }]; }, null); })();


/***/ }),

/***/ "0Em7":
/*!***********************************************!*\
  !*** ./src/app/admin/admin-routing.module.ts ***!
  \***********************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "hYta");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-crises/manage-crises.component */ "X30N");
/* harmony import */ var _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ "KJYB");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth/auth.guard */ "P+IX");









const adminRoutes = [
    {
        path: '',
        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        children: [
            {
                path: '',
                canActivateChild: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
                children: [
                    { path: 'crises', component: _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_4__["ManageCrisesComponent"] },
                    { path: 'heroes', component: _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_5__["ManageHeroesComponent"] },
                    { path: '', component: _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"] }
                ]
            }
        ]
    }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(adminRoutes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(adminRoutes)
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "KJYB":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-heroes/manage-heroes.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageHeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageHeroesComponent", function() { return ManageHeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ManageHeroesComponent {
}
ManageHeroesComponent.ɵfac = function ManageHeroesComponent_Factory(t) { return new (t || ManageHeroesComponent)(); };
ManageHeroesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageHeroesComponent, selectors: [["app-manage-hereos"]], decls: 2, vars: 0, template: function ManageHeroesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage your heroes here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hbmFnZS1oZXJvZXMvbWFuYWdlLWhlcm9lcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageHeroesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-hereos',
                templateUrl: './manage-heroes.component.html',
                styleUrls: ['./manage-heroes.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "X30N":
/*!****************************************************************!*\
  !*** ./src/app/admin/manage-crises/manage-crises.component.ts ***!
  \****************************************************************/
/*! exports provided: ManageCrisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageCrisesComponent", function() { return ManageCrisesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ManageCrisesComponent {
}
ManageCrisesComponent.ɵfac = function ManageCrisesComponent_Factory(t) { return new (t || ManageCrisesComponent)(); };
ManageCrisesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ManageCrisesComponent, selectors: [["app-manage-crises"]], decls: 2, vars: 0, template: function ManageCrisesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Manage your crises here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL21hbmFnZS1jcmlzZXMvbWFuYWdlLWNyaXNlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ManageCrisesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-manage-crises',
                templateUrl: './manage-crises.component.html',
                styleUrls: ['./manage-crises.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "hYta":
/*!************************************************!*\
  !*** ./src/app/admin/admin/admin.component.ts ***!
  \************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return { exact: true }; };
class AdminComponent {
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(); };
AdminComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 10, vars: 2, consts: [["routerLink", "./", "routerLinkActive", "active", 3, "routerLinkActiveOptions"], ["routerLink", "./crises", "routerLinkActive", "active"], ["routerLink", "./heroes", "routerLinkActive", "active"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "ADMIN");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Manage Crises");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Manage Heroes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-admin',
                templateUrl: './admin.component.html',
                styleUrls: ['./admin.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "jkDv":
/*!***************************************!*\
  !*** ./src/app/admin/admin.module.ts ***!
  \***************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/admin.component */ "hYta");
/* harmony import */ var _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin-dashboard/admin-dashboard.component */ "0/63");
/* harmony import */ var _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./manage-crises/manage-crises.component */ "X30N");
/* harmony import */ var _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-heroes/manage-heroes.component */ "KJYB");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "0Em7");








class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
        _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"],
        _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_4__["ManageCrisesComponent"],
        _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_5__["ManageHeroesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"]
                ],
                declarations: [
                    _admin_admin_component__WEBPACK_IMPORTED_MODULE_2__["AdminComponent"],
                    _admin_dashboard_admin_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["AdminDashboardComponent"],
                    _manage_crises_manage_crises_component__WEBPACK_IMPORTED_MODULE_4__["ManageCrisesComponent"],
                    _manage_heroes_manage_heroes_component__WEBPACK_IMPORTED_MODULE_5__["ManageHeroesComponent"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=admin-admin-module-es2015.js.map