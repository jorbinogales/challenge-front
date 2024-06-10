import {
    Component, EventEmitter, Input, Output
} from "@angular/core";

@Component({
    selector: "app-confirm-modal-component",
    templateUrl: "./confirm-modal.component.html",
})
export class ConfirmModalComponent {
    @Output() confirmSelected = new EventEmitter<boolean>();
    @Input() title: string | undefined;
    @Input() description: string | undefined;
    @Input() confirm_text_button: string | undefined;
    @Input() cancel_text_button: string | undefined;
    isVisible = false;

    openModal(text?: string, description?:string, confirm_text_button?: string, cancel_text_button?: string) {
        this.title = text;
        this.description = description;
        this.confirm_text_button = confirm_text_button;
        this.cancel_text_button = cancel_text_button;
        this.isVisible = true;
    }

    closeModal() {
        this.isVisible = false;
    }

    selectConfirm() {
        this.confirmSelected.emit(true);
    }

    protected readonly visualViewport = visualViewport;
}
