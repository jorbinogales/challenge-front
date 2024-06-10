import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { ButtonModule } from "../button/button.module";
import { TodoComponentsComponent } from "./todo.component";

@NgModule({
    imports: [CommonModule, FormsModule, ButtonModule],
    declarations: [TodoComponentsComponent],
    exports: [TodoComponentsComponent]
})
export class TodoComponentModule {}
