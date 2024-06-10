import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { SearchIconComponent } from "./search.component";

@NgModule({
    imports: [CommonModule],
    declarations: [SearchIconComponent],
    exports: [SearchIconComponent],
})
export class SearchIconModule {}
