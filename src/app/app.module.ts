import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarModule } from "./components/navbar/navbar.module";
import { AuthInterceptor } from "./interceptors/auth.interceptor";
import { ErrorInterceptorService } from "./interceptors/error.interceptor";
import { LoginLayoutComponent } from "./layout/login/login-layout.component";
import { TodoLayoutComponent } from "./layout/todo/todo-layout.component";

@NgModule({
    declarations: [
        AppComponent,
        LoginLayoutComponent,
        TodoLayoutComponent,
    ],
    imports: [
        NavbarModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        LoginLayoutComponent,
        TodoLayoutComponent,
    ],
    providers: [HttpClient, CookieService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptorService,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
