import {
    Component, forwardRef, Input
} from "@angular/core";
import { FormGroup, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: "app-input-text-component",
    templateUrl: "./inputText.component.html",
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})
export class InputTextComponent {
    @Input() label_name: string | undefined;
    @Input() for: string | undefined;
    @Input() type: string | undefined;
    @Input() name: string | undefined;
    @Input() id: string | undefined;
    @Input() required: string | undefined;
    @Input() autocomplete: string | undefined;
    @Input() class: string | undefined;
    @Input() formControlName: string | number | null = null;
    @Input() parentForm!: FormGroup;
    @Input() placeholder: string | undefined;
    @Input() join_value: string | undefined;

    value: any;
    onChange: any = () => {};
    onTouch: any = () => {};

    constructor() {
        this.parentForm = new FormGroup({});
    }

    writeValue(value: any) {
        this.value = value;
    }

    registerOnChange(fn: any) {
        this.onChange = fn;
    }

    registerOnTouched(fn: any) {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean) {
        // Implementar según sea necesario
    }
}
