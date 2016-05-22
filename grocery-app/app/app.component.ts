import {Component} from "@angular/core";
import {RouteConfig} from "@angular/router-deprecated";
import {LoginPage} from "./pages/login/login.component";
import {ListPage} from "./pages/list/list.component";
import {NS_ROUTER_DIRECTIVES, NS_ROUTER_PROVIDERS} from "nativescript-angular/router";
import {HTTP_PROVIDERS} from "@angular/http";

@Component({
  selector: "main",
  directives: [NS_ROUTER_DIRECTIVES],
  providers: [NS_ROUTER_PROVIDERS,HTTP_PROVIDERS],
  template: "<page-router-outlet></page-router-outlet>"
})

@RouteConfig([
  { path: "/Login", component: LoginPage, name: "Login", useAsDefault: true},
  { path: "/List", component: ListPage, name: "List"}
])

export class AppComponent {}