import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SearchIconModule } from "./search/search.module";

@NgModule({
    imports: [CommonModule, SearchIconModule],
    exports: [SearchIconModule],
})
export class IconsModule {}
