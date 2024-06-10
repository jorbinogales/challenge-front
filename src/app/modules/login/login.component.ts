import { Component, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { of } from "rxjs";
import { catchError, tap } from "rxjs/operators";

import { ConfirmModalComponent } from "../../components/modals/confirm-modal/confirm-modal.component";
import { LoginService } from "./login.service";

@Component({
    selector: "app-login",
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
    @ViewChild(ConfirmModalComponent) modalComponent: ConfirmModalComponent | undefined;

    loading: boolean = false;
    session: boolean = false;
    form: any = FormGroup;
    error: any;
    success: boolean = false;
    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly loginService: LoginService,
        private readonly cookieService: CookieService,
        private readonly router: Router
    ) {}

    ngOnInit(): void {
        this.buildForm();
    }

    openModal(title?: string, description?: string, confirm_text?: string, cancel_text?: string) {
        this.modalComponent?.openModal(title, description, confirm_text, cancel_text);
    }

    private buildForm() {
        this.form = this.formBuilder.group({
            email: ["", [Validators.required, Validators.email]]
        });
    }

    login(createUser?: boolean) {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        this.success = false;
        this.error = null;
        this.loading = true;
        const form = this.form.getRawValue();
        let service = this.loginService.login(form);
        if (createUser) {
            this.modalComponent?.closeModal();
            service = this.loginService.createUser(form);
        }
        service.pipe(
            tap((resp: any) => {
                this.success = true;
                this.error = null;
                this.form.reset();
                this.cookieService.set("token", resp.data.token);
                this.router.navigate(["/", "dashboard"]);
            }),
            catchError((err) => {
                if (err.error.message === "User not found") {
                    this.openModal(
                        "Create Account?",
                        "The account with the email does not exist. Do you want create account?",
                        "CREATE",
                        "CANCEL"
                    );
                    this.success = false;
                    this.error = err.error.message;
                } else {
                    this.openModal(
                        "ERROR",
                        err.error.message ? err.error.message : "Internal server error",
                        "CONFIRM"
                    );
                }
                return of(null);
            }),
            tap(() => {
                this.loading = false;
            })
        ).subscribe();
    }
}
