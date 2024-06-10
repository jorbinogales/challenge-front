import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ConfirmModalModule } from "./confirm-modal/confirm-modal.module";
import { CreateTaskModalModule } from "./create-task-modal/create-task-modal.module";

@NgModule({
    imports: [CommonModule, ConfirmModalModule, CreateTaskModalModule],
    exports: [ConfirmModalModule, CreateTaskModalModule],
})
export class ModalsModule {}
