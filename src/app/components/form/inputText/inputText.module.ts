import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { InputTextComponent } from "./inputText.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule],
    declarations: [InputTextComponent],
    exports: [InputTextComponent],
})
export class InputTextModule {}
