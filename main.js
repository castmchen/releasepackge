(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cio_report_cio_report_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cio-report/cio-report.component */ "./src/app/cio-report/cio-report.component.ts");




var routes = [
    {
        path: 'index',
        component: _cio_report_cio_report_component__WEBPACK_IMPORTED_MODULE_3__["CioReportComponent"]
    },
    {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cio-root\">\r\n    <!-- <echarts [options]=\"options\" [initOpts]=\"initOpts\"></echarts> -->\r\n    <router-outlet></router-outlet>\r\n    <!-- <div echarts [options]=\"chartOption\" class=\"demo-chart\"></div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cio-root {\n  height: 100%;\n  width: 100%;\n  background: #f8f8f9; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXGNpb25vd1xcY2lvbm93L3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Npby1yb290IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2Y4ZjhmOTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'CIO Now';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _materal_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./materal.module */ "./src/app/materal.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_cio_line_cio_line_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/cio-line/cio-line.component */ "./src/app/components/cio-line/cio-line.component.ts");
/* harmony import */ var _components_cio_pie_cio_pie_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/cio-pie/cio-pie.component */ "./src/app/components/cio-pie/cio-pie.component.ts");
/* harmony import */ var _components_cio_bar_cio_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/cio-bar/cio-bar.component */ "./src/app/components/cio-bar/cio-bar.component.ts");
/* harmony import */ var _components_cio_sphere_cio_sphere_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/cio-sphere/cio-sphere.component */ "./src/app/components/cio-sphere/cio-sphere.component.ts");
/* harmony import */ var _cio_report_cio_report_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cio-report/cio-report.component */ "./src/app/cio-report/cio-report.component.ts");
/* harmony import */ var _components_cio_run_cio_run_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/cio-run/cio-run.component */ "./src/app/components/cio-run/cio-run.component.ts");
/* harmony import */ var _controls_cio_dropdown_cio_dropdown_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./controls/cio-dropdown/cio-dropdown.component */ "./src/app/controls/cio-dropdown/cio-dropdown.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/fesm5/ngx-echarts.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_cio_line_cio_line_component__WEBPACK_IMPORTED_MODULE_8__["CioLineComponent"],
                _components_cio_pie_cio_pie_component__WEBPACK_IMPORTED_MODULE_9__["CioPieComponent"],
                _components_cio_bar_cio_bar_component__WEBPACK_IMPORTED_MODULE_10__["CioBarComponent"],
                _components_cio_sphere_cio_sphere_component__WEBPACK_IMPORTED_MODULE_11__["CioSphereComponent"],
                _cio_report_cio_report_component__WEBPACK_IMPORTED_MODULE_12__["CioReportComponent"],
                _components_cio_run_cio_run_component__WEBPACK_IMPORTED_MODULE_13__["CioRunComponent"],
                _controls_cio_dropdown_cio_dropdown_component__WEBPACK_IMPORTED_MODULE_14__["CioDropdownComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_15__["NgxEchartsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _materal_module__WEBPACK_IMPORTED_MODULE_4__["MateralModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cio-report/cio-report.component.html":
/*!******************************************************!*\
  !*** ./src/app/cio-report/cio-report.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"cio-report\">\r\n    <div id=\"cio-report-filter\">\r\n        <div class=\"app-cio-dropdown\">\r\n            <mat-form-field class=\"cio-dropdown-options\">\r\n                <mat-label>Porfolio</mat-label>\r\n                <mat-select [(value)]=\"selectedPorfolio\" (selectionChange)=\"changePosition($event)\">\r\n                    <mat-option *ngFor=\"let position of this.positionPorfolioList\" [value]=\"position\">\r\n                        {{position.eid}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"app-cio-dropdown\">\r\n            <mat-form-field class=\"cio-dropdown-options\">\r\n                <mat-label>MD</mat-label>\r\n                <mat-select [(value)]=\"selectedMD\" (selectionChange)=\"changePosition($event)\">\r\n                    <mat-option *ngFor=\"let position of this.positionMDList\" [value]=\"position\">\r\n                        {{position.eid}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"app-cio-dropdown\">\r\n            <mat-form-field class=\"cio-dropdown-options\">\r\n                <mat-label>OPS Leader</mat-label>\r\n                <mat-select [(value)]=\"selectedLeader\" (selectionChange)=\"changePosition($event)\">\r\n                    <mat-option *ngFor=\"let position of this.positionLeaderList\" [value]=\"position\">\r\n                        {{position.eid}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"app-cio-dropdown\">\r\n            <mat-form-field class=\"cio-dropdown-options\">\r\n                <mat-label>Manager</mat-label>\r\n                <mat-select [(value)]=\"selectedManager\" (selectionChange)=\"changePosition($event)\">\r\n                    <mat-option *ngFor=\"let position of this.positionManagerList\" [value]=\"position\">\r\n                        {{position.eid}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"app-cio-dropdown\">\r\n            <mat-form-field class=\"cio-dropdown-options\">\r\n                <mat-label>Period</mat-label>\r\n                <mat-select [(value)]=\"currentPeriodModel\">\r\n                    <mat-option value=\"1\">Lasted 1 Day</mat-option>\r\n                    <mat-option value=\"2\">Lasted 3 Days</mat-option>\r\n                    <mat-option value=\"3\">Lasted 7 Days</mat-option>\r\n                    <mat-option value=\"4\">Lasted 1 Month</mat-option>\r\n                    <mat-option value=\"5\">Lasted 6 Months</mat-option>\r\n                    <mat-option value=\"6\">Lasted 1 Year</mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        <div class=\"app-cio-search-blank\">\r\n            \r\n        </div>\r\n\r\n        <div class=\"app-cio-search\">\r\n            <button mat-raised-button (click)=\"getChartByPosition()\">Search</button>\r\n        </div>\r\n\r\n    </div>\r\n    <div id=\"cio-report-content\">\r\n\r\n        <!-- <app-cio-sphere class=\"cio-report-third\"></app-cio-sphere> -->\r\n        <app-cio-bar class=\"cio-report-half\"></app-cio-bar>\r\n        <app-cio-pie class=\"cio-report-half\"></app-cio-pie>\r\n        <!-- <app-cio-run class=\"cio-report-half\"></app-cio-run> -->\r\n        <!-- <app-cio-line class=\"cio-report-line\"></app-cio-line> -->\r\n    </div>\r\n\r\n    <div id=\"cio-report-footer\">\r\n        <span>@Copyright 2019 Accenture. Accenture Confidential. For internal use only. \r\n            <span style=\"font-size: 17px; color:black\">| </span> \r\n            <span style=\"color: blue\">\r\n            @china.swf.cio.cio001.TE.myTEdev.Scrums.Scrum3@accenture.com\r\n            </span>\r\n        </span>\r\n    </div>\r\n\r\n    <div id=\"cio-loading\" *ngIf=\"isLoadingFlag\">\r\n        <mat-spinner style=\"position:absolute;top:0;right:0;bottom:0;left:0;margin:auto\" [diameter]=\"50\"></mat-spinner>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cio-report/cio-report.component.scss":
/*!******************************************************!*\
  !*** ./src/app/cio-report/cio-report.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#cio-report {\n  position: absolute;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-around;\n  align-content: space-between;\n  width: 100%;\n  height: 100%;\n  color: rgba(0, 0, 0, 0.54);\n  box-shadow: #495060 1px 1px 5px 5px; }\n\n#cio-report-filter {\n  height: 20%;\n  width: 95%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-between;\n  border-bottom: 1px solid #e9eaec; }\n\n#cio-report-filter .app-cio-dropdown {\n    width: 20%;\n    height: 60%;\n    position: relative;\n    display: flex;\n    align-items: flex-end; }\n\n#cio-report-filter .app-cio-dropdown .cio-dropdown-options {\n      width: 100%; }\n\n#cio-report-filter .app-cio-search-blank {\n    width: 80%; }\n\n#cio-report-filter .app-cio-search {\n    width: 20%;\n    height: 30%; }\n\n#cio-report-filter .app-cio-search button {\n      font-size: 25px;\n      font-weight: bold;\n      width: 100%;\n      height: 75%;\n      background: #495060;\n      color: #ffffff; }\n\n#cio-report-content {\n  height: 74%;\n  width: 98%;\n  display: flex;\n  flex-flow: row wrap;\n  justify-content: space-around;\n  align-content: space-around;\n  box-shadow: 1px 1px 10px 1px #495060 inset;\n  border-radius: 15px; }\n\n#cio-report-content .cio-report-half {\n    width: 48%;\n    height: 70%; }\n\n#cio-report-content .cio-report-half:first-child {\n    border-bottom: 1px solid #e9eaec; }\n\n#cio-report-content .cio-report-bar {\n    width: 30%;\n    height: 50%; }\n\n#cio-report-content .cio-report-line {\n    width: 70%;\n    height: 72%; }\n\n#cio-report-content .cio-report-third {\n    width: 30%;\n    height: 45%;\n    border: 1px solid #e9eaec;\n    border-radius: 5%; }\n\n#cio-report-footer {\n  width: 100%;\n  height: 5%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #495060; }\n\n.cio-report-Period {\n  width: 80%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  flex-flow: row wrap;\n  display: flex;\n  align-items: center; }\n\n.cio-report-Period p {\n    color: rgba(0, 0, 0, 0.54);\n    line-height: 48px;\n    padding-right: 20px;\n    display: block;\n    height: 48px; }\n\n.cio-report-Period .cio-report-Period-child {\n    width: 80%;\n    display: flex;\n    justify-content: space-between;\n    flex-flow: row nowrap; }\n\n.cio-report-Period .cio-report-Period-child span {\n      width: calc(100% / 3);\n      text-align: center; }\n\n.cio-report-Period .cio-report-Period-child:first-child {\n    background: #ffced3;\n    color: #ffffff; }\n\nmat-slider {\n  width: 90%; }\n\nmat-icon {\n  cursor: pointer;\n  font-size: 48px; }\n\n.cio-dropdown {\n  width: 20%;\n  display: flex;\n  align-items: center;\n  position: relative; }\n\n.cio-dropdown .cio-dropdown-options {\n    width: 100%; }\n\n.cio-dropdown button {\n    height: 20%;\n    width: 100%;\n    font-weight: bold; }\n\n.selectedModel {\n  background: #8bab68; }\n\n#cio-loading {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.5);\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: auto; }\n\n.mat-progress-spinner::ng-deep circle {\n  stroke: #ffffff !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2lvLXJlcG9ydC9EOlxcY2lvbm93XFxjaW9ub3cvc3JjXFxhcHBcXGNpby1yZXBvcnRcXGNpby1yZXBvcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0IsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCxZQUFZO0VBQ1osMEJBQXlCO0VBQ3pCLG1DQUFtQyxFQUFBOztBQUd2QztFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsZ0NBQWdDLEVBQUE7O0FBTnBDO0lBUVEsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHFCQUFxQixFQUFBOztBQVo3QjtNQWNZLFdBQVcsRUFBQTs7QUFkdkI7SUFrQlEsVUFBVSxFQUFBOztBQWxCbEI7SUFxQlEsVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUF0Qm5CO01Bd0JZLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsV0FBVztNQUNYLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsY0FBYyxFQUFBOztBQUsxQjtFQUNJLFdBQVc7RUFDWCxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDBDQUEwQztFQUMxQyxtQkFBbUIsRUFBQTs7QUFSdkI7SUFVUSxVQUFVO0lBQ1YsV0FBVyxFQUFBOztBQVhuQjtJQWNRLGdDQUFnQyxFQUFBOztBQWR4QztJQWlCUSxVQUFVO0lBQ1YsV0FBVyxFQUFBOztBQWxCbkI7SUFxQlEsVUFBVTtJQUNWLFdBQVcsRUFBQTs7QUF0Qm5CO0lBeUJRLFVBeEVFO0lBeUVGLFdBMUVDO0lBMkVELHlCQUF5QjtJQUN6QixpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUIsRUFBQTs7QUFQdkI7SUFTUSwwQkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsWUFBWSxFQUFBOztBQWJwQjtJQWdCUSxVQUFVO0lBQ1YsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUIsRUFBQTs7QUFuQjdCO01BcUJZLHFCQUFxQjtNQUNyQixrQkFBa0IsRUFBQTs7QUF0QjlCO0lBMEJRLG1CQUFtQjtJQUNuQixjQUFjLEVBQUE7O0FBSXRCO0VBQ0ksVUFBVSxFQUFBOztBQUdkO0VBQ0ksZUFBZTtFQUNmLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFKdEI7SUFNUSxXQUFXLEVBQUE7O0FBTm5CO0lBU1EsV0FBVztJQUNYLFdBQVc7SUFDWCxpQkFBaUIsRUFBQTs7QUFJekI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIsTUFBTTtFQUNOLFFBQVE7RUFDUixTQUFTO0VBQ1QsT0FBTztFQUNQLFlBQVksRUFBQTs7QUFHaEI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2Npby1yZXBvcnQvY2lvLXJlcG9ydC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRoYWxmOjQ1JTtcclxuJHRoaXJkOjMwJTtcclxuI2Npby1yZXBvcnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgLjU0KTtcclxuICAgIGJveC1zaGFkb3c6ICM0OTUwNjAgMXB4IDFweCA1cHggNXB4O1xyXG59XHJcblxyXG4jY2lvLXJlcG9ydC1maWx0ZXIge1xyXG4gICAgaGVpZ2h0OiAyMCU7XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZWFlYztcclxuICAgIC5hcHAtY2lvLWRyb3Bkb3duIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogNjAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcclxuICAgICAgICAuY2lvLWRyb3Bkb3duLW9wdGlvbnMge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuYXBwLWNpby1zZWFyY2gtYmxhbmt7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxuICAgIC5hcHAtY2lvLXNlYXJjaHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogMzAlO1xyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogNzUlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjNDk1MDYwO1xyXG4gICAgICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiNjaW8tcmVwb3J0LWNvbnRlbnQge1xyXG4gICAgaGVpZ2h0OiA3NCU7XHJcbiAgICB3aWR0aDogOTglO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMTBweCAxcHggIzQ5NTA2MCBpbnNldDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICAuY2lvLXJlcG9ydC1oYWxmIHtcclxuICAgICAgICB3aWR0aDogNDglO1xyXG4gICAgICAgIGhlaWdodDogNzAlO1xyXG4gICAgfVxyXG4gICAgLmNpby1yZXBvcnQtaGFsZjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVhZWM7XHJcbiAgICB9XHJcbiAgICAuY2lvLXJlcG9ydC1iYXIge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB9XHJcbiAgICAuY2lvLXJlcG9ydC1saW5lIHtcclxuICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgIGhlaWdodDogNzIlO1xyXG4gICAgfVxyXG4gICAgLmNpby1yZXBvcnQtdGhpcmQge1xyXG4gICAgICAgIHdpZHRoOiAkdGhpcmQ7XHJcbiAgICAgICAgaGVpZ2h0OiAkaGFsZjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTllYWVjO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgfVxyXG59XHJcblxyXG4jY2lvLXJlcG9ydC1mb290ZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNSU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgY29sb3I6ICM0OTUwNjA7XHJcbn1cclxuLmNpby1yZXBvcnQtUGVyaW9kIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBoZWlnaHQ6IDEwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHAge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIC41NCk7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB9XHJcbiAgICAuY2lvLXJlcG9ydC1QZXJpb2QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgZmxleC1mbG93OiByb3cgbm93cmFwO1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2lvLXJlcG9ydC1QZXJpb2QtY2hpbGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmNlZDM7XHJcbiAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB9XHJcbn1cclxuXHJcbm1hdC1zbGlkZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG5cclxubWF0LWljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiA0OHB4O1xyXG59XHJcblxyXG4uY2lvLWRyb3Bkb3duIHtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5jaW8tZHJvcGRvd24tb3B0aW9ucyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBidXR0b24ge1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG59XHJcblxyXG4uc2VsZWN0ZWRNb2RlbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOGJhYjY4O1xyXG59XHJcblxyXG4jY2lvLWxvYWRpbmcge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtcHJvZ3Jlc3Mtc3Bpbm5lcjo6bmctZGVlcCBjaXJjbGUge1xyXG4gICAgc3Ryb2tlOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/cio-report/cio-report.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cio-report/cio-report.component.ts ***!
  \****************************************************/
/*! exports provided: CioReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioReportComponent", function() { return CioReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_chart_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/chart-service.service */ "./src/app/services/chart-service.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_3__);




var CioReportComponent = /** @class */ (function () {
    function CioReportComponent(chartService) {
        this.chartService = chartService;
        this.positionPorfolioList = [];
        this.positionMDList = [];
        this.positionLeaderList = [];
        this.positionManagerList = [];
        this.positionCache = [];
        this.selectedPorfolio = null;
        this.selectedMD = null;
        this.selectedLeader = null;
        this.selectedManager = null;
    }
    CioReportComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoadingFlag = true;
        this.setupPeriod();
        this.chartService.getDefaultLevel().subscribe(function (result) {
            _this.positionCache = result;
            for (var _i = 0, _a = _this.positionCache; _i < _a.length; _i++) {
                var positionPorfolioItem = _a[_i];
                _this.positionPorfolioList.push({
                    level: positionPorfolioItem.level,
                    eid: positionPorfolioItem.eid
                });
            }
        });
        this.chartService.filterbypositionandperiod().subscribe(function (result) {
            var charData = _this.setupChartData(result);
            _this.chartService.triggerResetChart(charData);
            _this.isLoadingFlag = false;
        });
        this.connectWS();
    };
    CioReportComponent.prototype.connectWS = function () {
        var that = this;
        if (this.ws != null) {
            this.ws.close();
        }
        this.ws = new WebSocket('ws://cionowapi.azurewebsites.net/realtime');
        this.ws.onopen = function (event) {
            console.log('WS has connected successfully.');
        };
        this.ws.onmessage = function (event) {
            try {
                if (event.data) {
                    console.log('------------ An new data has been refreshed -----------');
                    var newChartOption = JSON.parse(event.data);
                    console.log(newChartOption);
                    var isNeedRefresh = that.currentPeriodStart <= newChartOption.eventTime;
                    var currentSelectedPositionLevel = that.checkCurrentPositionLevel();
                    var tempEid = '';
                    switch (currentSelectedPositionLevel) {
                        case 0: {
                            if (isNeedRefresh) {
                                tempEid = newChartOption.portfolioEid;
                            }
                            break;
                        }
                        case 1: {
                            isNeedRefresh =
                                isNeedRefresh &&
                                    that.selectedPorfolio.eid === newChartOption.portfolioEid;
                            if (isNeedRefresh) {
                                tempEid = newChartOption.mdEid;
                            }
                            break;
                        }
                        case 2: {
                            isNeedRefresh =
                                isNeedRefresh &&
                                    (that.selectedPorfolio.eid === newChartOption.portfolioEid &&
                                        that.selectedMD.eid === newChartOption.mdEid);
                            if (isNeedRefresh) {
                                tempEid = newChartOption.leaderEid;
                            }
                            break;
                        }
                        case 3: {
                            isNeedRefresh =
                                isNeedRefresh &&
                                    (that.selectedPorfolio.eid === newChartOption.portfolioEid &&
                                        that.selectedMD.eid === newChartOption.mdEid &&
                                        that.selectedLeader.eid === newChartOption.leaderEid);
                            if (isNeedRefresh) {
                                tempEid = newChartOption.managerEid;
                            }
                            break;
                        }
                        case 4: {
                            isNeedRefresh =
                                isNeedRefresh &&
                                    (that.selectedPorfolio.eid === newChartOption.portfolioEid &&
                                        that.selectedMD.eid === newChartOption.mdEid &&
                                        that.selectedLeader.eid === newChartOption.leaderEid &&
                                        that.selectedManager.eid === newChartOption.managerEid);
                            if (isNeedRefresh) {
                                tempEid = newChartOption.clientName;
                            }
                            break;
                        }
                    }
                    if (tempEid !== '') {
                        that.chartService.triggerMonitorChart({
                            name: tempEid,
                            value: newChartOption.hours
                        });
                    }
                }
            }
            catch (error) {
                console.error("An error has been occured while getting WS data, Details: " + error);
            }
        };
        this.ws.onerror = function (event) {
            console.log("An error has occured while connecting WS, Details: " + event);
        };
        this.ws.onclose = function (event) {
            console.log('WS connection has been closed.');
        };
    };
    CioReportComponent.prototype.checkCurrentPositionLevel = function () {
        var currentSelectedPositionLevel = null;
        if (this.selectedPorfolio == null) {
            currentSelectedPositionLevel = 0;
        }
        else if (this.selectedMD == null) {
            currentSelectedPositionLevel = 1;
        }
        else if (this.selectedLeader == null) {
            currentSelectedPositionLevel = 2;
        }
        else if (this.selectedManager == null) {
            currentSelectedPositionLevel = 3;
        }
        else {
            currentSelectedPositionLevel = 4;
        }
        return currentSelectedPositionLevel;
    };
    CioReportComponent.prototype.setupChartData = function (callbackChartArray) {
        var currentSelectedPositionLevel = this.checkCurrentPositionLevel();
        var newChartArray = [];
        if (currentSelectedPositionLevel == null) {
            return newChartArray;
        }
        callbackChartArray.forEach(function (callbackChartItem) {
            var tempEid = '';
            switch (currentSelectedPositionLevel) {
                case 0: {
                    tempEid = callbackChartItem.portfolioEid;
                    break;
                }
                case 1: {
                    tempEid = callbackChartItem.mdEid;
                    break;
                }
                case 2: {
                    tempEid = callbackChartItem.leaderEid;
                    break;
                }
                case 3: {
                    tempEid = callbackChartItem.managerEid;
                    break;
                }
                case 4: {
                    tempEid = callbackChartItem.clientName;
                    break;
                }
            }
            var existInfo = newChartArray.find(function (newChartItem) { return newChartItem.name === tempEid; });
            if (existInfo) {
                existInfo.value += parseFloat(callbackChartItem.hours);
            }
            else {
                newChartArray.push({
                    name: tempEid,
                    value: parseFloat(callbackChartItem.hours)
                });
            }
        });
        return newChartArray;
    };
    CioReportComponent.prototype.setupPeriod = function () {
        if (this.currentPeriodModel == null) {
            this.currentPeriodModel = '1';
        }
        var periodEndDate = new Date();
        this.currentPeriodEnd = periodEndDate.getTime();
        switch (this.currentPeriodModel) {
            case '1': {
                this.currentPeriodStart = new Date(periodEndDate.getFullYear(), periodEndDate.getMonth(), periodEndDate.getDate() - 1).getTime();
                break;
            }
            case '2': {
                this.currentPeriodStart = new Date(periodEndDate.getFullYear(), periodEndDate.getMonth(), periodEndDate.getDate() - 3).getTime();
                break;
            }
            case '3': {
                this.currentPeriodStart = new Date(periodEndDate.getFullYear(), periodEndDate.getMonth(), periodEndDate.getDate() - 7).getTime();
                break;
            }
            case '4': {
                this.currentPeriodStart = new Date(periodEndDate.getFullYear(), periodEndDate.getMonth() - 1, periodEndDate.getDate()).getTime();
                break;
            }
            case '5': {
                this.currentPeriodStart = new Date(periodEndDate.getFullYear(), periodEndDate.getMonth() - 6, periodEndDate.getDate()).getTime();
                break;
            }
            case '6': {
                this.currentPeriodStart = new Date(periodEndDate.getFullYear() - 1, periodEndDate.getMonth(), periodEndDate.getDate()).getTime();
                break;
            }
            default: {
                this.currentPeriodStart = this.currentPeriodEnd;
            }
        }
    };
    CioReportComponent.prototype.setupLowerPositions = function (positions, currentSelectedInfo, outputList) {
        var _this = this;
        if (positions[0].level === currentSelectedInfo.level) {
            positions.forEach(function (_) {
                if (_.eid === currentSelectedInfo.eid) {
                    _.lowerPositions.forEach(function (__) {
                        outputList.push({
                            eid: __.eid,
                            level: __.level
                        });
                    });
                }
            });
            return outputList;
        }
        else {
            positions.forEach(function (_) {
                outputList.concat(_this.setupLowerPositions(_.lowerPositions, currentSelectedInfo, outputList));
            });
            return outputList;
        }
    };
    CioReportComponent.prototype.changePosition = function (event) {
        var _this = this;
        var paramInfo = event.value;
        if (paramInfo) {
            this.isLoadingFlag = true;
            // const targetPositions = this.setupLowerPositions(
            //   this.positionCache,
            //   paramInfo,
            //   []
            // );
            // tslint:disable-next-line: radix
            switch (parseInt(paramInfo.level)) {
                case 0: {
                    this.positionLeaderList = [];
                    this.positionManagerList = [];
                    this.selectedMD = null;
                    this.selectedLeader = null;
                    this.selectedManager = null;
                    var targetPositions_1 = [];
                    this.positionCache.forEach(function (_) {
                        if (_.eid === paramInfo.eid) {
                            _.lowerPositions.forEach(function (__) {
                                targetPositions_1.push({
                                    eid: __.eid,
                                    level: __.level
                                });
                            });
                        }
                    });
                    this.positionMDList = targetPositions_1;
                    break;
                }
                case 1: {
                    this.positionManagerList = [];
                    this.selectedManager = null;
                    var targetPositions_2 = [];
                    this.positionCache.forEach(function (_) {
                        if (_.eid === _this.selectedPorfolio.eid) {
                            _.lowerPositions.forEach(function (__) {
                                if (__.eid === _this.selectedMD.eid) {
                                    __.lowerPositions.forEach(function (___) {
                                        targetPositions_2.push({
                                            eid: ___.eid,
                                            level: ___.level
                                        });
                                    });
                                }
                            });
                        }
                    });
                    this.positionLeaderList = targetPositions_2;
                    break;
                }
                case 2: {
                    var targetPositions_3 = [];
                    this.positionCache.forEach(function (_) {
                        if (_.eid === _this.selectedPorfolio.eid) {
                            _.lowerPositions.forEach(function (__) {
                                if (__.eid === _this.selectedMD.eid) {
                                    __.lowerPositions.forEach(function (___) {
                                        if (___.eid === _this.selectedLeader.eid) {
                                            ___.lowerPositions.forEach(function (____) {
                                                targetPositions_3.push({
                                                    eid: ____.eid,
                                                    level: ____.level
                                                });
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                    this.positionManagerList = targetPositions_3;
                    break;
                }
            }
            this.isLoadingFlag = false;
        }
    };
    CioReportComponent.prototype.getChartByPosition = function () {
        var _this = this;
        this.isLoadingFlag = true;
        this.setupPeriod();
        var requestInfo = {
            periodEnd: this.currentPeriodEnd,
            periodStart: this.currentPeriodStart
        };
        if (this.selectedPorfolio) {
            requestInfo.portfolioEid = this.selectedPorfolio.eid;
        }
        if (this.selectedMD) {
            requestInfo.mdEid = this.selectedMD.eid;
        }
        if (this.selectedLeader) {
            requestInfo.leaderEid = this.selectedLeader.eid;
        }
        if (this.selectedManager) {
            requestInfo.managerEid = this.selectedManager.eid;
        }
        this.chartService
            .getChartByPositionAndPeriod(requestInfo)
            .subscribe(function (result) {
            var newChartArray = _this.setupChartData(result);
            _this.chartService.triggerResetChart(newChartArray);
            _this.isLoadingFlag = false;
        });
    };
    CioReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-cio-report',
            template: __webpack_require__(/*! ./cio-report.component.html */ "./src/app/cio-report/cio-report.component.html"),
            styles: [__webpack_require__(/*! ./cio-report.component.scss */ "./src/app/cio-report/cio-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chart_service_service__WEBPACK_IMPORTED_MODULE_1__["ChartServiceService"]])
    ], CioReportComponent);
    return CioReportComponent;
}());



/***/ }),

/***/ "./src/app/components/cio-bar/cio-bar.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-bar/cio-bar.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cio-bar\">\r\n    <div [ngStyle]=\"{display: isShowFlag ? 'block' : 'none'}\" id=\"cioBar\" #cioBar echarts [options]=\"options\" theme=\"macarons\" class=\"chart-main\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cio-bar/cio-bar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-bar/cio-bar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cio-bar {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaW8tYmFyL0Q6XFxjaW9ub3dcXGNpb25vdy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2lvLWJhclxcY2lvLWJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lvLWJhci9jaW8tYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpby1iYXIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cio-bar/cio-bar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/cio-bar/cio-bar.component.ts ***!
  \*********************************************************/
/*! exports provided: CioBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioBarComponent", function() { return CioBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chart-service.service */ "./src/app/services/chart-service.service.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);




var CioBarComponent = /** @class */ (function () {
    function CioBarComponent(chartService) {
        this.chartService = chartService;
        this.isShowFlag = false;
        this.options = {
            title: {
                text: 'Bar Chart',
                subtext: 'Hour Unit'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Automatic']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    saveAsImage: { show: true },
                }
            },
            xAxis: [
                {
                    boundaryGap: true,
                    type: 'category'
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} H'
                    }
                }
            ],
            series: [
                {
                    name: 'Automatic',
                    type: 'bar',
                    markPoint: {
                        data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Average' }]
                    }
                }
            ]
        };
    }
    CioBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        setTimeout(function () {
            that.barInstance = echarts__WEBPACK_IMPORTED_MODULE_3__["getInstanceByDom"](document.getElementById('cioBar'));
        }, 100);
        this.chartService.onResetChart.subscribe(function (result) {
            _this.isShowFlag = result && result.length;
            if (_this.isShowFlag) {
                if (!_this.barInstance) {
                    that.barInstance = echarts__WEBPACK_IMPORTED_MODULE_3__["getInstanceByDom"](document.getElementById('cioBar'));
                }
                var chartSeries = _this.options.series;
                var xAxis = _this.options.xAxis;
                xAxis[0].data = result.map(function (_) { return _.name; });
                chartSeries[0].data = result.map(function (_) { return _.value; });
                _this.barInstance.setOption(_this.options);
            }
        });
        this.chartService.onMonitorChart.subscribe(function (result) {
            var chartSeries = _this.options.series;
            var xAxis = _this.options.xAxis;
            var existIndex = xAxis[0].data.findIndex(function (element) { return element === result.name; });
            if (existIndex > -1) {
                chartSeries[0].data[existIndex] =
                    parseFloat(chartSeries[0].data[existIndex]) +
                        parseFloat(result.value);
            }
            else {
                xAxis[0].data.push(result.name);
                chartSeries[0].data.push(result.value);
            }
            _this.barInstance.setOption(_this.options);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CioBarComponent.prototype, "selectedValue", void 0);
    CioBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cio-bar',
            template: __webpack_require__(/*! ./cio-bar.component.html */ "./src/app/components/cio-bar/cio-bar.component.html"),
            styles: [__webpack_require__(/*! ./cio-bar.component.scss */ "./src/app/components/cio-bar/cio-bar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chart_service_service__WEBPACK_IMPORTED_MODULE_2__["ChartServiceService"]])
    ], CioBarComponent);
    return CioBarComponent;
}());



/***/ }),

/***/ "./src/app/components/cio-line/cio-line.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/cio-line/cio-line.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cio-line\">\r\n    <div echarts #cioLine id=\"cioLine\" [options]=\"options\" theme=\"macarons\" class=\"chart-main\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cio-line/cio-line.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/cio-line/cio-line.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cio-line {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaW8tbGluZS9EOlxcY2lvbm93XFxjaW9ub3cvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNpby1saW5lXFxjaW8tbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lvLWxpbmUvY2lvLWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2lvLWxpbmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cio-line/cio-line.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-line/cio-line.component.ts ***!
  \***********************************************************/
/*! exports provided: CioLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioLineComponent", function() { return CioLineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chart_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/chart-service.service */ "./src/app/services/chart-service.service.ts");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_3__);




var CioLineComponent = /** @class */ (function () {
    function CioLineComponent(chartService) {
        this.chartService = chartService;
        this.options = {
            title: {
                text: 'Automatic&Manual Sparklines',
                subtext: 'Hour Unit'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['Automatic', 'Manual']
            },
            toolbox: {
                show: true,
                feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    saveAsImage: { show: true }
                }
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    splitLine: {
                        show: false
                    },
                    data: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT', 'SUN']
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} H'
                    },
                    splitLine: {
                        show: false
                    }
                }
            ],
            series: [
                {
                    name: 'Automatic',
                    type: 'line',
                    data: [1, 1, 1, 1, 1, 1, 1],
                    markPoint: {
                        data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Average' }]
                    }
                },
                {
                    name: 'Manual',
                    type: 'line',
                    data: [10, 10, 10, 10, 10, 10, 10],
                    markPoint: {
                        data: [{ type: 'max', name: 'Max' }, { type: 'min', name: 'Min' }]
                    },
                    markLine: {
                        data: [{ type: 'average', name: 'Average' }]
                    }
                }
            ]
        };
    }
    CioLineComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        setTimeout(function () {
            that.lineInstance = echarts__WEBPACK_IMPORTED_MODULE_3__["getInstanceByDom"](document.getElementById('cioLine'));
        }, 100);
        this.chartService.onResetChart.subscribe(function (chartOptions) {
            var automaticArray = [];
            var manualArray = [];
            var periodArray = [];
            for (var _i = 0, chartOptions_1 = chartOptions; _i < chartOptions_1.length; _i++) {
                var chartOption = chartOptions_1[_i];
                if (typeof chartOption.triggerTime !== 'undefined' &&
                    chartOption.triggerTime) {
                    automaticArray.unshift(chartOption.automaticValue);
                    manualArray.unshift(chartOption.manualValue);
                    periodArray.unshift(new Date(chartOption.triggerTime)
                        .toLocaleString()
                        .replace(/T/, ' ')
                        .replace(/\..+/, ''));
                }
            }
            _this.lineInstance.clear();
            _this.options.xAxis[0].data = periodArray;
            var chartSeries = _this.options.series;
            chartSeries[0].data = automaticArray;
            chartSeries[1].data = manualArray;
            _this.lineInstance.setOption(_this.options);
        });
        this.chartService.onMonitorChart.subscribe(function (chartOption) {
            var currentXAxis = _this.options.xAxis[0].data;
            var chartSeries = _this.options.series;
            var newValue = new Date(chartOption.periodTime)
                .toLocaleString()
                .replace(/T/, ' ')
                .replace(/\..+/, '');
            if (currentXAxis.length > 15) {
                chartSeries[0].data.shift();
                chartSeries[1].data.shift();
                currentXAxis.shift();
            }
            currentXAxis.push(newValue);
            chartSeries[0].data.push(chartOption.automatica);
            chartSeries[1].data.push(chartOption.manual);
            _this.lineInstance.setOption(_this.options);
        });
    };
    CioLineComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cio-line',
            template: __webpack_require__(/*! ./cio-line.component.html */ "./src/app/components/cio-line/cio-line.component.html"),
            styles: [__webpack_require__(/*! ./cio-line.component.scss */ "./src/app/components/cio-line/cio-line.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chart_service_service__WEBPACK_IMPORTED_MODULE_2__["ChartServiceService"]])
    ], CioLineComponent);
    return CioLineComponent;
}());



/***/ }),

/***/ "./src/app/components/cio-pie/cio-pie.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-pie/cio-pie.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cio-pie\">\r\n    <div id=\"cioPie\" #cioPie echarts [options]=\"options\" theme=\"macarons\" class=\"chart-main\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cio-pie/cio-pie.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-pie/cio-pie.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cio-pie {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaW8tcGllL0Q6XFxjaW9ub3dcXGNpb25vdy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2lvLXBpZVxcY2lvLXBpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lvLXBpZS9jaW8tcGllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpby1waWUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cio-pie/cio-pie.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/cio-pie/cio-pie.component.ts ***!
  \*********************************************************/
/*! exports provided: CioPieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioPieComponent", function() { return CioPieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_chart_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/chart-service.service */ "./src/app/services/chart-service.service.ts");




var CioPieComponent = /** @class */ (function () {
    function CioPieComponent(chartService) {
        this.chartService = chartService;
        this.options = {
            tooltip: {
                formatter: '{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'right'
            },
            series: [
                {
                    label: {
                        normal: {
                            formatter: '  {b}：  {per|{d}%}  ',
                            backgroundColor: '#eee',
                            borderColor: '#aaa',
                            borderWidth: 1,
                            borderRadius: 4,
                            rich: {
                                a: {
                                    color: '#999',
                                    lineHeight: 22,
                                    align: 'center'
                                },
                                hr: {
                                    borderColor: '#aaa',
                                    width: '100%',
                                    borderWidth: 0.5,
                                    height: 0
                                },
                                b: {
                                    fontSize: 16,
                                    lineHeight: 33
                                },
                                per: {
                                    color: '#eee',
                                    backgroundColor: '#334455',
                                    padding: [2, 4],
                                    borderRadius: 2
                                }
                            }
                        }
                    },
                    type: 'pie'
                }
            ]
        };
    }
    CioPieComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        setTimeout(function () {
            that.pieInstance = echarts__WEBPACK_IMPORTED_MODULE_2__["getInstanceByDom"](document.getElementById('cioPie'));
        }, 100);
        this.chartService.onResetChart.subscribe(function (result) {
            var chartSeries = _this.options.series;
            chartSeries[0].data = result;
            chartSeries[0].legend = result.map(function (_) { return _.name; });
            _this.pieInstance.setOption(_this.options);
        });
        this.chartService.onMonitorChart.subscribe(function (result) {
            var chartSeries = _this.options.series;
            var xAxis = _this.options.xAxis;
            var existIndex = chartSeries[0].data.findIndex(function (element) { return element.name === result.name; });
            if (existIndex > -1) {
                chartSeries[0].data[existIndex].value =
                    parseFloat(chartSeries[0].data[existIndex].value) +
                        parseFloat(result.value);
            }
            else {
                chartSeries[0].data.push(result);
                chartSeries[0].legend.push(result.name);
            }
            _this.pieInstance.setOption(_this.options);
        });
    };
    CioPieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cio-pie',
            template: __webpack_require__(/*! ./cio-pie.component.html */ "./src/app/components/cio-pie/cio-pie.component.html"),
            styles: [__webpack_require__(/*! ./cio-pie.component.scss */ "./src/app/components/cio-pie/cio-pie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chart_service_service__WEBPACK_IMPORTED_MODULE_3__["ChartServiceService"]])
    ], CioPieComponent);
    return CioPieComponent;
}());



/***/ }),

/***/ "./src/app/components/cio-run/cio-run.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-run/cio-run.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cio-run\">\r\n    <div echarts [options]=\"options\" class=\"chart-main\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cio-run/cio-run.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/cio-run/cio-run.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cio-run {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaW8tcnVuL0Q6XFxjaW9ub3dcXGNpb25vdy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2lvLXJ1blxcY2lvLXJ1bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lvLXJ1bi9jaW8tcnVuLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpby1ydW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cio-run/cio-run.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/cio-run/cio-run.component.ts ***!
  \*********************************************************/
/*! exports provided: CioRunComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioRunComponent", function() { return CioRunComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CioRunComponent = /** @class */ (function () {
    function CioRunComponent() {
        this.options = {
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    data: [820, 932, 901, 934, 1290, 1330, 1320],
                    type: 'gauge'
                }
            ]
        };
    }
    CioRunComponent.prototype.ngOnInit = function () { };
    CioRunComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cio-run',
            template: __webpack_require__(/*! ./cio-run.component.html */ "./src/app/components/cio-run/cio-run.component.html"),
            styles: [__webpack_require__(/*! ./cio-run.component.scss */ "./src/app/components/cio-run/cio-run.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CioRunComponent);
    return CioRunComponent;
}());



/***/ }),

/***/ "./src/app/components/cio-sphere/cio-sphere.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/cio-sphere/cio-sphere.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cio-sphere\">\r\n    <div echarts [options]=\"options\" class=\"chart-main\"></div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/cio-sphere/cio-sphere.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/cio-sphere/cio-sphere.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cio-sphere {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaW8tc3BoZXJlL0Q6XFxjaW9ub3dcXGNpb25vdy9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2lvLXNwaGVyZVxcY2lvLXNwaGVyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2lvLXNwaGVyZS9jaW8tc3BoZXJlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNpby1zcGhlcmUge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/cio-sphere/cio-sphere.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/cio-sphere/cio-sphere.component.ts ***!
  \***************************************************************/
/*! exports provided: CioSphereComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioSphereComponent", function() { return CioSphereComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CioSphereComponent = /** @class */ (function () {
    function CioSphereComponent() {
        // private options: EChartOption = {
        //   xAxis: {
        //     type: 'category',
        //     data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        //   },
        //   yAxis: {
        //     type: 'value'
        //   },
        //   series: [
        //     {
        //       data: [820, 932, 901, 934, 1290, 1330, 1320],
        //       type: 'gauge'
        //     }
        //   ]
        // };
        this.options = {
            backgroundColor: '#000',
            globe: {
                baseTexture: 'data-gl/asset/world.topo.bathy.200401.jpg',
                heightTexture: 'data-gl/asset/world.topo.bathy.200401.jpg',
                displacementScale: 0.04,
                shading: 'realistic',
                environment: 'data-gl/asset/starfield.jpg',
                realisticMaterial: {
                    roughness: 0.9
                },
                postEffect: {
                    enable: true
                },
                light: {
                    main: {
                        intensity: 5,
                        shadow: true
                    },
                    ambientCubemap: {
                        texture: 'data-gl/asset/pisa.hdr',
                        diffuseIntensity: 0.2
                    }
                }
            }
        };
    }
    CioSphereComponent.prototype.ngOnInit = function () { };
    CioSphereComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cio-sphere',
            template: __webpack_require__(/*! ./cio-sphere.component.html */ "./src/app/components/cio-sphere/cio-sphere.component.html"),
            styles: [__webpack_require__(/*! ./cio-sphere.component.scss */ "./src/app/components/cio-sphere/cio-sphere.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CioSphereComponent);
    return CioSphereComponent;
}());



/***/ }),

/***/ "./src/app/controls/cio-dropdown/cio-dropdown.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/controls/cio-dropdown/cio-dropdown.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cio-dropdown\">\r\n    <mat-form-field class=\"cio-dropdown-options\">\r\n        <mat-label>Manager name</mat-label>\r\n        <mat-select [(value)]=\"selected\">\r\n            <mat-option *ngFor=\"let position of positions\" [value]=\"position\">\r\n                {{position.eid}}\r\n            </mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</div>"

/***/ }),

/***/ "./src/app/controls/cio-dropdown/cio-dropdown.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/controls/cio-dropdown/cio-dropdown.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cio-dropdown {\n  position: absolute;\n  width: 100%; }\n  .cio-dropdown .cio-dropdown-options {\n    width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udHJvbHMvY2lvLWRyb3Bkb3duL0Q6XFxjaW9ub3dcXGNpb25vdy9zcmNcXGFwcFxcY29udHJvbHNcXGNpby1kcm9wZG93blxcY2lvLWRyb3Bkb3duLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVcsRUFBQTtFQUZmO0lBSVEsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvY29udHJvbHMvY2lvLWRyb3Bkb3duL2Npby1kcm9wZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaW8tZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICAuY2lvLWRyb3Bkb3duLW9wdGlvbnMge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/controls/cio-dropdown/cio-dropdown.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/controls/cio-dropdown/cio-dropdown.component.ts ***!
  \*****************************************************************/
/*! exports provided: CioDropdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CioDropdownComponent", function() { return CioDropdownComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CioDropdownComponent = /** @class */ (function () {
    function CioDropdownComponent() {
    }
    CioDropdownComponent.prototype.ngOnInit = function () { };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CioDropdownComponent.prototype, "positions", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], CioDropdownComponent.prototype, "selected", void 0);
    CioDropdownComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cio-dropdown',
            template: __webpack_require__(/*! ./cio-dropdown.component.html */ "./src/app/controls/cio-dropdown/cio-dropdown.component.html"),
            styles: [__webpack_require__(/*! ./cio-dropdown.component.scss */ "./src/app/controls/cio-dropdown/cio-dropdown.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CioDropdownComponent);
    return CioDropdownComponent;
}());



/***/ }),

/***/ "./src/app/materal.module.ts":
/*!***********************************!*\
  !*** ./src/app/materal.module.ts ***!
  \***********************************/
/*! exports provided: MateralModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MateralModule", function() { return MateralModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");










var MateralModule = /** @class */ (function () {
    function MateralModule(matIconRegistry) {
        this.matIconRegistry = matIconRegistry;
        this.matIconRegistry.registerFontClassAlias('fa');
    }
    MateralModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_8__["NgModule"])({
            declarations: [],
            imports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"]
            ],
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_5__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_6__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_7__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["DragDropModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_3__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_4__["ScrollingModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTreeModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"]])
    ], MateralModule);
    return MateralModule;
}());



/***/ }),

/***/ "./src/app/services/chart-service.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/chart-service.service.ts ***!
  \***************************************************/
/*! exports provided: ChartServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartServiceService", function() { return ChartServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ChartServiceService = /** @class */ (function () {
    function ChartServiceService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-type': 'application/json'
            })
        };
        this.baseUrl = 'http://cionowapi.azurewebsites.net';
        this.onResetChart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onResetChartPie = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMonitorChart = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ChartServiceService.prototype.getChartByPositionAndPeriod = function (filterInfo) {
        var targetUrl = this.baseUrl + "/chart/filterbypositionandperiod";
        return this.http.post(targetUrl, filterInfo, this.httpOptions);
    };
    ChartServiceService.prototype.filterbypositionandperiod = function () {
        var targetUrl = this.baseUrl + "/chart/filterbypositionandperiod";
        return this.http.post(targetUrl, this.httpOptions);
    };
    ChartServiceService.prototype.getLowerLevel = function (positionInfo) {
        var targetUrl = this.baseUrl + "/getlowerlevel";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromString: "level=" + positionInfo.level + "&eid=" + positionInfo.eid
        });
        return this.http.get(targetUrl, { params: params });
    };
    ChartServiceService.prototype.getLowerLevelTwo = function () {
        var targetUrl = this.baseUrl + "/getlowerlevel";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]({
            fromString: "level=0&eid=lili.c.liu"
        });
        return this.http.get(targetUrl, { params: params });
    };
    ChartServiceService.prototype.getDefaultLevel = function () {
        var targetUrl = this.baseUrl + "/getDefaultlevel";
        return this.http.get(targetUrl);
    };
    ChartServiceService.prototype.getPeriodByModel = function (currentModel) {
        var timePeriod = [];
        switch (currentModel) {
            case 1: {
                timePeriod = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
                break;
            }
            case 2: {
                timePeriod = ['First Week', 'Second Week', 'Third Week', 'Fourth Week'];
                break;
            }
            case 3: {
                timePeriod = [
                    'Jan',
                    'Feb',
                    'Mar',
                    'Apr',
                    'May',
                    'June',
                    'July',
                    'Aug',
                    'Sep',
                    'Oct',
                    'Nov',
                    'Dec'
                ];
                break;
            }
        }
        return timePeriod;
    };
    ChartServiceService.prototype.triggerResetChart = function (charOptions) {
        this.onResetChart.emit(charOptions);
    };
    ChartServiceService.prototype.triggerResetChartPie = function (charOptions) {
        this.onResetChartPie.emit(charOptions);
    };
    ChartServiceService.prototype.triggerMonitorChart = function (chartOption) {
        this.onMonitorChart.emit(chartOption);
    };
    ChartServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ChartServiceService);
    return ChartServiceService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! echarts/theme/macarons.js */ "./node_modules/echarts/theme/macarons.js");
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\cionow\cionow\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map