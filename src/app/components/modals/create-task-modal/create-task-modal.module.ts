import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ButtonModule } from "../../button/button.module";
import { InputTextModule } from "../../form/inputText/inputText.module";
import { LoadingModule } from "../../loading/loading.module";
import { CreateTaskModalComponent } from "./create-task-modal.component";

@NgModule({
    imports: [CommonModule, ButtonModule, InputTextModule, LoadingModule, ReactiveFormsModule],
    declarations: [CreateTaskModalComponent],
    exports: [CreateTaskModalComponent],
})
export class CreateTaskModalModule {}
