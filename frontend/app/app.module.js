"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./routing/app-routing.module");
var forms_2 = require("@angular/forms");
var angular2_grid_1 = require("angular2-grid");
var auth_module_1 = require("./auth.module");
//added Components
var app_component_1 = require("./app.component");
var tasks_component_1 = require("./components/tasks/tasks.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var authentication_component_1 = require("./components/authentication/authentication.component");
var header_component_1 = require("./components/header/header.component");
var footer_component_1 = require("./components/footer/footer.component");
var login_component_1 = require("./components/authentication/login/login.component");
var signup_component_1 = require("./components/authentication/signup/signup.component");
var logout_component_1 = require("./components/authentication/logout/logout.component");
var videos_component_1 = require("./components/videos/videos.component");
//added Services
var task_service_1 = require("./services/task.service");
var dashboard_service_1 = require("./services/dashboard.service");
var auth_service_1 = require("./services/auth.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, forms_2.ReactiveFormsModule, angular2_grid_1.NgGridModule, auth_module_1.AuthModule],
        declarations: [app_component_1.AppComponent, tasks_component_1.TasksComponent, dashboard_component_1.DashBoardComponent, authentication_component_1.AuthenticationComponent,
            header_component_1.HeaderComponent, footer_component_1.FooterComponent, login_component_1.LoginComponent, signup_component_1.SignUpComponent, logout_component_1.LogoutComponent, videos_component_1.VideosComponent],
        providers: [task_service_1.TaskService, dashboard_service_1.DashBoardService, auth_service_1.AuthService],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map