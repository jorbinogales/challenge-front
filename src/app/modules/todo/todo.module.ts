import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ComponentsModule } from "../../components/components.module";
import { TodoComponent } from "./todo.component";
import { TodoRouting } from "./todo.routing";

@NgModule({
    declarations: [TodoComponent],
    imports: [
        CommonModule,
        TodoRouting,
        FormsModule,
        ComponentsModule
    ],
    exports: [TodoComponent]
})
export class TodoModule {}
