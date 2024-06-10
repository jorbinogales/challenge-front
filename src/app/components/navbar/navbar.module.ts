import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";

import { ButtonModule } from "../button/button.module";
import { NavbarComponent } from "./navbar.component";

@NgModule({
    imports: [CommonModule, ReactiveFormsModule, ButtonModule],
    declarations: [NavbarComponent],
    exports: [NavbarComponent],
})
export class NavbarModule {}
