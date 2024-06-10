import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { environment } from "src/environments/environment";

import { UserInterface } from "../../interface/user.interface";

@Injectable({
    providedIn: "root",
})
export class LoginService {
    public user: BehaviorSubject<UserInterface | null> = new BehaviorSubject<UserInterface | null>(null);

    constructor(private readonly http: HttpClient) {}

    get user$(): Observable<UserInterface | null> {
        return this.user.asObservable();
    }

    login(form: any): Observable<UserInterface> {
        const formData = {
            email: form.email,
        };
        return this.http
            .get<UserInterface>(`${environment.API}/users/${formData.email}`)
            .pipe(
                tap((response) => response)
            );
    }

    createUser(form:any): Observable<UserInterface> {
        const formData = {
            email: form.email
        };
        return this.http.post<UserInterface>(`${environment.API}/users`, formData).pipe(
            tap((response) => response)
        );
    }
}
