import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginLayoutComponent } from "./layout/login/login-layout.component";
import { TodoLayoutComponent } from "./layout/todo/todo-layout.component";
import { LOGIN_CONTENT } from "./router/login.router";
import { TODO_CONTENT } from "./router/todo.router";

const routes: Routes = [

    {
        path: "",
        component: LoginLayoutComponent,
        children: LOGIN_CONTENT,
    },
    {
        path: "dashboard",
        component: TodoLayoutComponent,
        children: TODO_CONTENT,
    },
    {
        path: "**",
        redirectTo: "",
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
