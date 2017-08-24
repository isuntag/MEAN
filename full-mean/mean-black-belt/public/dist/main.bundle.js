webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Add a thing:</h1>\n    <p *ngIf='error'>{{error}}</p>\n    <form #form=\"ngForm\" (submit)=\"onSubmit()\">\n        <div>\n            <label for=\"contenttitle\">Title:</label>\n            <input\n            type=\"text\"\n            name=\"contenttitle\"\n            required\n            minlength=\"8\"\n            [(ngModel)]=\"content.contenttitle\"\n            #subject=\"ngModel\"\n            >\n            <div *ngIf=\"content.contenttitle.invalid\">\n                <span *ngIf=\"content.contenttitle.length < 1\">Question is required.</span>\n                <span *ngIf=\"content.contenttitle.length >= 1 && content.contenttitle.length < 8\">Question must be at least 8 characters.</span>\n            </div>\n        </div>\n        <div>\n            <input\n            type=\"submit\"\n            value=\"Create\"\n            [disabled]=\"form.invalid\"\n            > <button [routerLink]=\"['/']\">Go back</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_content__ = __webpack_require__("../../../../../src/app/classes/content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddComponent = (function () {
    function AddComponent(_cs, _router, _us) {
        this._cs = _cs;
        this._router = _router;
        this._us = _us;
        this.content = new __WEBPACK_IMPORTED_MODULE_1__classes_content__["a" /* Content */]();
        this.error = "";
    }
    AddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.checkstatus()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return _this._router.navigateByUrl('/login'); });
    };
    AddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.content._username = this.user.name;
        this.content._userID = this.user._id;
        this._cs.addContent(this.content)
            .then(function (response) {
            console.log(response);
            _this._router.navigateByUrl('/');
        })
            .catch(function (error) {
            console.error(error);
            _this.error = error;
        });
    };
    return AddComponent;
}());
AddComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-add',
        template: __webpack_require__("../../../../../src/app/add/add.component.html"),
        styles: [__webpack_require__("../../../../../src/app/add/add.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _c || Object])
], AddComponent);

var _a, _b, _c;
//# sourceMappingURL=add.component.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__view_addsub_addsub_component__ = __webpack_require__("../../../../../src/app/view/addsub/addsub.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'create', component: __WEBPACK_IMPORTED_MODULE_4__add_add_component__["a" /* AddComponent */] },
    { path: ':id', component: __WEBPACK_IMPORTED_MODULE_5__view_view_component__["a" /* ViewComponent */] },
    { path: ':id/add', component: __WEBPACK_IMPORTED_MODULE_6__view_addsub_addsub_component__["a" /* AddsubComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_add_component__ = __webpack_require__("../../../../../src/app/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__view_view_component__ = __webpack_require__("../../../../../src/app/view/view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__view_addsub_addsub_component__ = __webpack_require__("../../../../../src/app/view/addsub/addsub.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__view_subdash_subdash_component__ = __webpack_require__("../../../../../src/app/view/subdash/subdash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__home_contentdash_contentdash_component__ = __webpack_require__("../../../../../src/app/home/contentdash/contentdash.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__add_add_component__["a" /* AddComponent */],
            __WEBPACK_IMPORTED_MODULE_9__view_view_component__["a" /* ViewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__view_addsub_addsub_component__["a" /* AddsubComponent */],
            __WEBPACK_IMPORTED_MODULE_11__view_subdash_subdash_component__["a" /* SubdashComponent */],
            __WEBPACK_IMPORTED_MODULE_14__home_contentdash_contentdash_component__["a" /* ContentdashComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_13__services_content_service__["a" /* ContentService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/classes/content.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Content; });
var Content = (function () {
    function Content() {
        this.contenttitle = "";
        this.contentsub = [];
        this._username = "";
        this._userID = "";
    }
    return Content;
}());

//# sourceMappingURL=content.js.map

/***/ }),

/***/ "../../../../../src/app/classes/contentsub.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Contentsub; });
var Contentsub = (function () {
    function Contentsub() {
        this.subtitle = "";
        this.count = 0;
        this._content = "";
        this._username = "";
        this._userID = "";
    }
    return Contentsub;
}());

//# sourceMappingURL=contentsub.js.map

/***/ }),

/***/ "../../../../../src/app/classes/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
        this.name = '';
    }
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ "../../../../../src/app/home/contentdash/contentdash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/contentdash/contentdash.component.html":
/***/ (function(module, exports) {

module.exports = "<form #searchForm=\"ngForm\" (submit)=\"search()\">\n    <input type=\"search\" name=\"value\" required #value=\"ngModel\" [(ngModel)]=\"searchfield.value\">\n    <input type=\"submit\" value=\"Search\" [disabled]=\"searchForm.invalid\">\n    <button (click)=\"reset()\">Show All</button>\n</form>\n\n<table>\n    <tr>\n        <th>User</th>\n        <th>Content Title</th>\n        <th>Sub Count</th>\n        <th>Date Posted</th>\n        <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let content of display_contents\">\n        <td>{{ content._username }}</td>\n        <td><a [routerLink]=\"[content._id]\">{{ content.contenttitle }}</a></td>\n        <td>{{ content.contentsubs.length }}</td>\n        <td>{{ content.createdAt }}</td>\n        <td><button *ngIf=\"content._userID == userid\" (click)=\"delete(content._id)\">Delete</button></td>\n    </tr>\n</table>\n"

/***/ }),

/***/ "../../../../../src/app/home/contentdash/contentdash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentdashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentdashComponent = (function () {
    function ContentdashComponent(_cs, _router) {
        this._cs = _cs;
        this._router = _router;
        this._contents = [];
        this.display_contents = [];
        this.searchfield = {
            value: ""
        };
        this.refresh = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
    }
    Object.defineProperty(ContentdashComponent.prototype, "contents", {
        set: function (newcontents) {
            this._contents = newcontents;
            this.display_contents = this._contents;
        },
        enumerable: true,
        configurable: true
    });
    ContentdashComponent.prototype.ngOnInit = function () {
    };
    ContentdashComponent.prototype.delete = function (contentID) {
        var _this = this;
        this._cs.delete(contentID)
            .then(function (result) { return _this.refresh.emit('update!'); })
            .catch(function (err) { return console.log(err); });
    };
    ContentdashComponent.prototype.search = function () {
        var _this = this;
        this.display_contents = this._contents.filter(function (content) {
            return content.contenttitle.toLowerCase().includes(_this.searchfield.value.toLowerCase());
        });
        this.searchfield = {
            value: ""
        };
    };
    ContentdashComponent.prototype.reset = function () {
        this.display_contents = this._contents;
    };
    return ContentdashComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ContentdashComponent.prototype, "contents", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ContentdashComponent.prototype, "userid", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */])(),
    __metadata("design:type", Object)
], ContentdashComponent.prototype, "refresh", void 0);
ContentdashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contentdash',
        template: __webpack_require__("../../../../../src/app/home/contentdash/contentdash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/contentdash/contentdash.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_content_service__["a" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ContentdashComponent);

var _a, _b;
//# sourceMappingURL=contentdash.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 *ngIf=\"user\">Welcome {{ user.name }}!</h1>\n<a [routerLink]=\"['/create']\"><button>Create a thing</button></a>\n<button name=\"logout\" (click)=\"logout()\">Logout</button>\n\n<app-contentdash *ngIf=\"user\" [contents] = \"contents\" [userid]=\"user.id\" (refresh)=\"refreshlist($event)\"></app-contentdash>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomeComponent = (function () {
    function HomeComponent(_us, _cs, _router) {
        this._us = _us;
        this._cs = _cs;
        this._router = _router;
        this.contents = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.checkstatus()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return _this._router.navigateByUrl('/login'); });
        this._cs.getContents()
            .then(function (contents) {
            _this.contents = contents;
        })
            .catch(function (err) { return console.log(err); });
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        this._us.logout()
            .then(function (response) { return _this._router.navigateByUrl('/login'); });
    };
    HomeComponent.prototype.refreshlist = function (eventData) {
        var _this = this;
        this._cs.getContents()
            .then(function (contents) {
            _this.contents = contents;
        })
            .catch(function (err) { return console.log(err); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _c || Object])
], HomeComponent);

var _a, _b, _c;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" (submit)=\"login()\">\n    Name: <input\n    type=\"text\"\n    name=\"name\"\n    required\n    #name=\"ngModel\"\n    [(ngModel)]=\"user.name\"\n    >\n    <input type=\"submit\" value=\"Login\" [disabled]=\"form.invalid\">\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_user__ = __webpack_require__("../../../../../src/app/classes/user.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(_us, _router) {
        this._us = _us;
        this._router = _router;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__classes_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._us.checkstatus()
            .then(function (user) { return _this._router.navigateByUrl('/'); })
            .catch(function (err) { return console.log(err); });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._us.login(this.user)
            .then(function (data) {
            _this._router.navigateByUrl('/');
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/content.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContentService = (function () {
    function ContentService(_http) {
        this._http = _http;
    }
    ContentService.prototype.addContent = function (content) {
        return this._http.post('/api/contents', content)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ContentService.prototype.getContents = function () {
        return this._http.get('/api/contents')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ContentService.prototype.delete = function (contentID) {
        return this._http.delete("/api/contents/" + contentID)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ContentService.prototype.getOneContent = function (contentID) {
        return this._http.get("/api/contents/" + contentID)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ContentService.prototype.addContentsub = function (contentsub, contentID) {
        return this._http.post("/api/" + contentID + "/addsub", contentsub)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ContentService.prototype.upCount = function (contentsubID) {
        return this._http.put("/api/" + contentsubID, contentsubID)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    ContentService.prototype.deleteSub = function (contentsubID) {
        return this._http.delete("/api/" + contentsubID, contentsubID)
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return ContentService;
}());
ContentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContentService);

var _a;
//# sourceMappingURL=content.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserService = (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.checkstatus = function () {
        return this._http.get('/api/user/check')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    UserService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this._http.post('/api/user/login', user)
                .map(function (response) { return response.json(); })
                .toPromise()
                .then(function (data) {
                resolve(data);
            })
                .catch(function (err) { return reject(err); });
        });
    };
    UserService.prototype.logout = function () {
        return this._http.get('api/user/logout')
            .map(function (response) { return response.json(); })
            .toPromise();
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/app/view/addsub/addsub.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/addsub/addsub.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Put the contentsub here:</h1>\n    <p *ngIf='error'>{{error}}</p>\n    {{ contents | json }} {{user | json}}\n    <form #form=\"ngForm\" (submit)=\"onSubmit()\">\n        <div>\n            <label for=\"subtitle\">SubTitle:</label>\n            <input\n            type=\"text\"\n            name=\"subtitle\"\n            required\n            minlength=\"3\"\n            [(ngModel)]=\"sub.subtitle\"\n            #subtitle=\"ngModel\"\n            >\n            <div *ngIf=\"sub.subtitle.invalid\">\n                <span *ngIf=\"sub.subtitle.length < 1\">Subtitle is required.</span>\n                <span *ngIf=\"sub.subtitle.length >= 1 && sub.subtitle.length < 3\">Subtitle must be at least 3 characters.</span>\n            </div>\n        </div>\n        <div>\n            <input\n            type=\"submit\"\n            value=\"Create Sub\"\n            [disabled]=\"form.invalid\"\n            > <button [routerLink]=\"['/']\">Go back</button>\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view/addsub/addsub.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_contentsub__ = __webpack_require__("../../../../../src/app/classes/contentsub.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddsubComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AddsubComponent = (function () {
    function AddsubComponent(_cs, _router, _route, _us) {
        this._cs = _cs;
        this._router = _router;
        this._route = _route;
        this._us = _us;
        this.sub = new __WEBPACK_IMPORTED_MODULE_1__classes_contentsub__["a" /* Contentsub */]();
        this.error = "";
    }
    AddsubComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            return _this._cs.getOneContent(params.get('id'));
        })
            .subscribe(function (content) { return _this.contents = content; });
        this._us.checkstatus()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return _this._router.navigateByUrl('/'); });
    };
    AddsubComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    AddsubComponent.prototype.onSubmit = function () {
        var _this = this;
        this.sub._username = this.user.name;
        this.sub._userID = this.user._id;
        this._cs.addContentsub(this.sub, this.contents._id)
            .then(function (response) { console.log(response); _this._router.navigateByUrl("/" + _this.contents._id); })
            .catch(function (error) {
            console.error(error);
            _this.error = error;
        });
    };
    return AddsubComponent;
}());
AddsubComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-addsub',
        template: __webpack_require__("../../../../../src/app/view/addsub/addsub.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view/addsub/addsub.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], AddsubComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=addsub.component.js.map

/***/ }),

/***/ "../../../../../src/app/view/subdash/subdash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/subdash/subdash.component.html":
/***/ (function(module, exports) {

module.exports = "\n<h1>\nsubdash\n</h1>\n<button [routerLink]=\"['/']\">Go Home</button>\n<p *ngIf=\"_content\">{{_content | json}}</p>\n\n<a [routerLink]=\"['add']\">Add subcontent</a>\n\n<div *ngIf=\"_content\">\n<table>\n    <tr>\n        <th>User</th>\n        <th>Subcontent</th>\n        <th>Count</th>\n        <th>Action</th>\n    </tr>\n    <tr *ngFor=\"let content of _content.contentsubs\">\n        <td>{{content._username}}</td>\n        <td>{{content.subtitle}}</td>\n        <td>{{content.count}}</td>\n        <td>\n            <button (click)=\"upCount(content._id)\">Up Count</button>\n            <button *ngIf=\"content._userID == user._id\" (click)=\"deleteSub(content._id)\">Delete</button>\n        </td>\n    </tr>\n</table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/view/subdash/subdash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_content__ = __webpack_require__("../../../../../src/app/classes/content.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubdashComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubdashComponent = (function () {
    function SubdashComponent(_cs, _router) {
        this._cs = _cs;
        this._router = _router;
        this._content = new __WEBPACK_IMPORTED_MODULE_1__classes_content__["a" /* Content */]();
    }
    Object.defineProperty(SubdashComponent.prototype, "contents", {
        set: function (newcontent) {
            console.log(newcontent);
            this._content = newcontent;
        },
        enumerable: true,
        configurable: true
    });
    SubdashComponent.prototype.ngOnInit = function () {
    };
    SubdashComponent.prototype.upCount = function (subid) {
        this._cs.upCount(subid)
            .then(function (response) { console.log(response); })
            .catch(function (error) {
            console.error(error);
        });
    };
    SubdashComponent.prototype.deleteSub = function (subid) {
        this._cs.deleteSub(subid)
            .then(function (response) { console.log(response); })
            .catch(function (error) {
            console.error(error);
        });
    };
    return SubdashComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], SubdashComponent.prototype, "contents", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Object)
], SubdashComponent.prototype, "user", void 0);
SubdashComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-subdash',
        template: __webpack_require__("../../../../../src/app/view/subdash/subdash.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view/subdash/subdash.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_content_service__["a" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object])
], SubdashComponent);

var _a, _b;
//# sourceMappingURL=subdash.component.js.map

/***/ }),

/***/ "../../../../../src/app/view/view.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-subdash *ngIf=\"user\" [contents]=\"contents\" [user]=\"user\"></app-subdash>\n"

/***/ }),

/***/ "../../../../../src/app/view/view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_content_service__ = __webpack_require__("../../../../../src/app/services/content.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ViewComponent = (function () {
    function ViewComponent(_cs, _router, _route, _us) {
        this._cs = _cs;
        this._router = _router;
        this._route = _route;
        this._us = _us;
    }
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this._route.paramMap
            .switchMap(function (params) {
            return _this._cs.getOneContent(params.get('id'));
        })
            .subscribe(function (content) { return _this.contents = content; });
        this._us.checkstatus()
            .then(function (user) { return _this.user = user; })
            .catch(function (err) { return _this._router.navigateByUrl('/'); });
    };
    ViewComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    return ViewComponent;
}());
ViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-view',
        template: __webpack_require__("../../../../../src/app/view/view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/view/view.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_content_service__["a" /* ContentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_content_service__["a" /* ContentService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]) === "function" && _d || Object])
], ViewComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map