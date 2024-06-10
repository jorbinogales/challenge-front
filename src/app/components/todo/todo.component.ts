import {
    Component, EventEmitter, Input, OnInit, Output
} from "@angular/core";

import { TaskFormInterface } from "../../interface/task.form.interface";

@Component({
    selector: "app-todo-components-component",
    templateUrl: "./todo.component.html",
})
export class TodoComponentsComponent implements OnInit {
    @Output() updateStatusTask = new EventEmitter<object>();
    @Output() removeTask = new EventEmitter<string>();
    @Output() updateTask = new EventEmitter<TaskFormInterface>();

    @Input() title: string | undefined;
    @Input() description: string | undefined;
    @Input() date: string | undefined;
    @Input() status: string | undefined;
    @Input() id: string | undefined;

    checked: boolean = false;

    updateStatus() {
        this.status = this.checked ? "DONE" : "PENDING";
        this.updateStatusTask.emit({
            id: this.id,
            status: this.status
        });
    }

    sendRemoveTask() {
        this.removeTask.emit(this.id);
    }

    sendUpdateTask() {
        this.updateTask.emit({
            id: this.id,
            title: this.title,
            description: this.description
        });
    }

    ngOnInit(): void {
        this.checked = this.status === "DONE";
    }
}
