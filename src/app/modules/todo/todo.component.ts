import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Subscription } from "rxjs";

import { CreateTaskModalComponent } from "../../components/modals/create-task-modal/create-task-modal.component";
import { TaskFormInterface } from "../../interface/task.form.interface";
import { TaskInterface } from "../../interface/task.interface";
import { TodoService } from "./todo.service";

@Component({
    selector: "app-todo",
    templateUrl: "./todo.component.html",
    styleUrls: ["./todo.component.scss"],
})
export class TodoComponent implements OnInit {
    @ViewChild(CreateTaskModalComponent) modalComponent: CreateTaskModalComponent | undefined;
    private taskListSubscription: Subscription | undefined;
    tasks: TaskInterface[] = [];
    form: any = FormGroup;
    error: any;
    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly todoService: TodoService,
    ) {}

    ngOnInit(): void {
        this.loadTasks();
        this.taskListSubscription = this.todoService.getTaskListSubject().subscribe(() => {
            this.loadTasks();
        });
    }

    ngOnDestroy(): void {
        this.taskListSubscription?.unsubscribe();
    }

    loadTasks(): void {
        this.todoService.getTask().subscribe((tasks) => {
            this.tasks = tasks.data;
        });
    }

    handleUpdateStatus(task: any) {
        this.todoService.changeStatus(task.id, task.status).subscribe(
            (resp) => {
                this.error = false;
            },
        );
    }

    openModal(title?: string, confirm_text?: string, cancel_text?: string, taskFormInterface?: TaskFormInterface) {
        this.modalComponent?.openModal(title, confirm_text, cancel_text, taskFormInterface);
    }

    createTaskModal() {
        this.openModal(
            "CREATE TASK",
            "CREATE",
            "CANCEL",
            undefined
        );
    }

    updateTaskModal(task_data:TaskFormInterface) {
        this.openModal(
            "UPDATE TASK",
            "UPDATE",
            "CANCEL",
            task_data
        );
    }

    handleUpdateTask(form: any) {
        this.todoService.updateTask(form).subscribe(
            () => {
                this.loadTasks();
                this.error = false;
                this.modalComponent?.resetForm();
                this.modalComponent?.closeModal();
            },
        );
    }

    handleCreateTask(form:any) {
        this.todoService.createTask(form).subscribe(
            () => {
                this.loadTasks();
                this.error = false;
                this.modalComponent?.resetForm();
                this.modalComponent?.closeModal();
            },
        );
    }

    handleRemoveTask(id:string) {
        this.todoService.removeTask(id).subscribe(
            () => {
                this.loadTasks();
                this.error = false;
            },
        );
    }

    protected readonly Date = Date;
}
