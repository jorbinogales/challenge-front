import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { ButtonModule } from "../../button/button.module";
import { ConfirmModalComponent } from "./confirm-modal.component";

@NgModule({
    imports: [CommonModule, ButtonModule],
    declarations: [ConfirmModalComponent],
    exports: [ConfirmModalComponent],
})
export class ConfirmModalModule {}
