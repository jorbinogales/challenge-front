import { Routes } from "@angular/router";

export const LOGIN_CONTENT: Routes = [
    {
        path: "",
        loadChildren: () => import("../modules/login/login.module").then((m) => m.LoginModule),
    },
];
