import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { InputTextModule } from "./inputText/inputText.module";

@NgModule({
    imports: [CommonModule, InputTextModule],
    exports: [InputTextModule],
})
export class FormComponentModule {}
