import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { TaskFormInterface } from "../../interface/task.form.interface";
import { TaskInterface } from "../../interface/task.interface";

@Injectable({
    providedIn: "root",
})
export class TodoService {
    private taskListSubject: Subject<void> = new Subject<void>();

    constructor(private readonly http: HttpClient) {}

    getTaskListSubject(): Observable<void> {
        return this.taskListSubject.asObservable();
    }

    getTask(): Observable<any> {
        return this.http
            .get<any>(`${environment.API}/tasks`)
            .pipe(
                tap((response:any) => response)
            );
    }

    changeStatus(id: string, status: string): Observable<TaskInterface> {
        const formData = {
            status
        };
        return this.http.put<TaskInterface>(`${environment.API}/tasks/status/${id}`, formData).pipe(
            tap((response) => response)
        );
    }

    createTask(form: any): Observable<TaskInterface> {
        const formData = {
            title: form.title,
            description: form.description,
        };
        return this.http.post<TaskInterface>(`${environment.API}/tasks`, formData).pipe(
            tap(() => {
                this.taskListSubject.next();
            })
        );
    }

    updateTask(form: TaskFormInterface): Observable<TaskInterface> {
        const { id } = form;
        const formData = {
            title: form.title,
            description: form.description,
        };
        return this.http.put<TaskInterface>(`${environment.API}/tasks/${id}`, formData).pipe(
            tap(() => {
                this.taskListSubject.next();
            })
        );
    }

    removeTask(id: string): Observable<TaskInterface> {
        return this.http.delete<TaskInterface>(`${environment.API}/tasks/${id}`).pipe(
            tap(() => {
                this.taskListSubject.next();
            })
        );
    }
}
