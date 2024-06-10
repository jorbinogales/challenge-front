import {
    Component, EventEmitter, Input, OnInit, Output
} from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TaskFormInterface } from "../../../interface/task.form.interface";

@Component({
    selector: "app-create-task-modal-component",
    templateUrl: "./create-task-modal.component.html",
})
export class CreateTaskModalComponent implements OnInit {
    @Output() createTaskConfirm = new EventEmitter<boolean>();
    @Output() updateTaskConfirm = new EventEmitter<boolean>();

    @Input() values: TaskFormInterface | undefined;
    @Input() title: string | undefined;
    @Input() description: string | undefined;
    @Input() confirm_text_button: string | undefined;
    @Input() cancel_text_button: string | undefined;
    isVisible: boolean = false;
    loading: boolean = false;
    form: any = FormGroup;

    constructor(
        private readonly formBuilder: FormBuilder,
    ) {
    }

    ngOnInit(): void {
        this.buildForm(undefined);
    }
    openModal(
        text?: string,
        confirm_text_button?: string,
        cancel_text_button?: string,
        taskFormInterface?: TaskFormInterface
    ) {
        this.title = text;
        this.confirm_text_button = confirm_text_button;
        this.cancel_text_button = cancel_text_button;
        this.isVisible = true;
        this.values = taskFormInterface;
        this.buildForm(taskFormInterface);
    }

    private buildForm(taskFormInterface: TaskFormInterface | undefined) {
        this.form = this.formBuilder.group({
            id: [taskFormInterface?.id] || null,
            title: [taskFormInterface?.title || null, [Validators.required]],
            description: [taskFormInterface?.description || null, [Validators.required]],
        });
    }

    createTask() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        this.createTaskConfirm.emit(this.form.getRawValue());
    }

    updateTask() {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.loading = true;
        this.updateTaskConfirm.emit(this.form.getRawValue());
    }

    closeModal() {
        this.isVisible = false;
    }

    resetForm() {
        this.form.reset();
        this.loading = false;
    }

    protected readonly visualViewport = visualViewport;
    protected readonly FormGroup = FormGroup;
}
