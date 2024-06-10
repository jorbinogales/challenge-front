import { NgModule } from "@angular/core";

import { ButtonModule } from "./button/button.module";
import { FormComponentModule } from "./form/formComponent.module";
import { IconsModule } from "./icons/icons.module";
import { LoadingModule } from "./loading/loading.module";
import { ModalsModule } from "./modals/modals.module";
import { NavbarModule } from "./navbar/navbar.module";
import { TodoComponentModule } from "./todo/todo.module";

@NgModule({
    imports: [
        IconsModule,
        FormComponentModule,
        TodoComponentModule,
        LoadingModule,
        ModalsModule,
        ButtonModule,
        NavbarModule,
    ],
    exports: [
        IconsModule,
        FormComponentModule,
        TodoComponentModule,
        LoadingModule,
        ModalsModule,
        ButtonModule,
        NavbarModule
    ],
})
export class ComponentsModule {
}
