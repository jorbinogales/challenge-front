import { Routes } from "@angular/router";

export const TODO_CONTENT: Routes = [
    {
        path: "",
        loadChildren: () => import("../modules/todo/todo.module").then((m) => m.TodoModule),
    },
];
