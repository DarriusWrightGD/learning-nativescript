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
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var router_deprecated_1 = require("@angular/router-deprecated");
var page_1 = require("ui/page");
var color_1 = require("color");
var hint_util_1 = require("../../utils/hint-util");
var LoginPage = (function () {
    function LoginPage(_userService, _router, page) {
        this._userService = _userService;
        this._router = _router;
        this.page = page;
        this.isLoggingIn = true;
        this.user = new user_1.User();
        this.user.email = "darriuswrightgd@gmail.com";
        this.user.password = "password";
    }
    LoginPage.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = this.page.ios ? "res://bg_login.jpg" : "res://bg_login";
    };
    LoginPage.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        if (this.isLoggingIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this._userService.login(this.user)
            .subscribe(function () { return _this._router.navigate(["List"]); }, function (error) { return alert("Unfortunately we could not find your account."); });
    };
    LoginPage.prototype.signUp = function () {
        var _this = this;
        this._userService.register(this.user)
            .subscribe(function () {
            alert("Your account was successfully created.");
            _this.toggleDisplay();
        }, function () { return alert("Sorry we were unable to create your account."); });
    };
    LoginPage.prototype.toggleDisplay = function () {
        this.isLoggingIn = !this.isLoggingIn;
        this.setTextFieldColors();
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggingIn ? new color_1.Color("white") : new color_1.Color("#301217"),
            duration: 200
        });
    };
    LoginPage.prototype.setTextFieldColors = function () {
        var emailTextField = this.email.nativeElement;
        var passwordTextField = this.password.nativeElement;
        var mainTextColor = new color_1.Color(this.isLoggingIn ? "black" : "#C4AFB4");
        emailTextField.color = mainTextColor;
        passwordTextField.color = mainTextColor;
        var hintColor = new color_1.Color(this.isLoggingIn ? "#ACA647" : "#C4AFB4");
        hint_util_1.setHintColor({ view: emailTextField, color: hintColor });
        hint_util_1.setHintColor({ view: passwordTextField, color: hintColor });
    };
    __decorate([
        core_1.ViewChild("container"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "container", void 0);
    __decorate([
        core_1.ViewChild("email"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        core_1.ViewChild("password"), 
        __metadata('design:type', core_1.ElementRef)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        core_1.Component({
            selector: "login",
            providers: [user_service_1.UserService],
            templateUrl: "./pages/login//login.html",
            styleUrls: ["./pages/login/login-common.css", "./pages/login/login.css"]
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService, router_deprecated_1.Router, page_1.Page])
    ], LoginPage);
    return LoginPage;
}());
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxxQkFBdUQsZUFBZSxDQUFDLENBQUE7QUFDdkUscUJBQW1CLHdCQUF3QixDQUFDLENBQUE7QUFDNUMsNkJBQTBCLGdDQUFnQyxDQUFDLENBQUE7QUFDM0Qsa0NBQXFCLDRCQUE0QixDQUFDLENBQUE7QUFDbEQscUJBQW1CLFNBQVMsQ0FBQyxDQUFBO0FBQzdCLHNCQUFvQixPQUFPLENBQUMsQ0FBQTtBQUU1QiwwQkFBMkIsdUJBQXVCLENBQUMsQ0FBQTtBQVduRDtJQVFFLG1CQUFvQixZQUF5QixFQUFVLE9BQWUsRUFBVSxJQUFVO1FBQXRFLGlCQUFZLEdBQVosWUFBWSxDQUFhO1FBQVUsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQU07UUFOMUYsZ0JBQVcsR0FBWSxJQUFJLENBQUM7UUFPMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLDJCQUEyQixDQUFDO1FBQzlDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNEJBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxvQkFBb0IsR0FBRyxnQkFBZ0IsQ0FBQztJQUN0RixDQUFDO0lBRUQsMEJBQU0sR0FBTjtRQUNFLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDN0IsS0FBSyxDQUFDLDhCQUE4QixDQUFD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