import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { ComponentsModule } from "../../components/components.module";
import { LoginComponent } from "./login.component";
import { LoginRouting } from "./login.routing";

@NgModule({
    declarations: [LoginComponent],
    imports: [
        CommonModule,
        LoginRouting,
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
    ],
    exports: [LoginComponent]
})
export class LoginModule {}
