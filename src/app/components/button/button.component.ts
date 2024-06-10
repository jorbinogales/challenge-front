import {
    Component, Input
} from "@angular/core";

@Component({
    selector: "app-button-component",
    templateUrl: "./button.component.html",
})
export class ButtonComponent {
    @Input() text_button: string | undefined;
    @Input() class_button: string | undefined;
    @Input() type_button: string | undefined;
    @Input() icon: string | undefined;
    @Input() disable: any = false;
}
