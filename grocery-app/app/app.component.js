"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_deprecated_1 = require("@angular/router-deprecated");
var login_component_1 = require("./pages/login/login.component");
var list_component_1 = require("./pages/list/list.component");
var router_1 = require("nativescript-angular/router");
var http_1 = require("@angular/http");
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: "main",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [router_1.NS_ROUTER_PROVIDERS, http_1.HTTP_PROVIDERS],
            template: "<page-router-outlet></page-router-outlet>"
        }),
        router_deprecated_1.RouteConfig([
            { path: "/Login", component: login_component_1.LoginPage, name: "Login", useAsDefault: true },
            { path: "/List", component: list_component_1.ListPage, name: "List" }
        ]), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxrQ0FBMEIsNEJBQTRCLENBQUMsQ0FBQTtBQUN2RCxnQ0FBd0IsK0JBQStCLENBQUMsQ0FBQTtBQUN4RCwrQkFBdUIsNkJBQTZCLENBQUMsQ0FBQTtBQUNyRCx1QkFBd0QsNkJBQTZCLENBQUMsQ0FBQTtBQUN0RixxQkFBNkIsZUFBZSxDQUFDLENBQUE7QUFjN0M7SUFBQTtJQUEyQixDQUFDO0lBWjVCO1FBQUMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFVBQVUsRUFBRSxDQUFDLDZCQUFvQixDQUFDO1lBQ2xDLFNBQVMsRUFBRSxDQUFDLDRCQUFtQixFQUFDLHFCQUFjLENBQUM7WUFDL0MsUUFBUSxFQUFFLDJDQUEyQztTQUN0RCxDQUFDO1FBRUQsK0JBQVcsQ0FBQztZQUNYLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsMkJBQVMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUM7WUFDMUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSx5QkFBUSxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUM7U0FDcEQsQ0FBQzs7b0JBQUE7SUFFeUIsbUJBQUM7QUFBRCxDQUFDLEFBQTVCLElBQTRCO0FBQWYsb0JBQVksZUFBRyxDQUFBIn0=