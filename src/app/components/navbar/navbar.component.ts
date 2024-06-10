import {
    Component,
} from "@angular/core";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
    selector: "app-navbar-component",
    templateUrl: "./navbar.component.html",
})
export class NavbarComponent {
    constructor(
        private readonly cookieService: CookieService,
        private readonly router: Router
    ) {
    }

    logout() {
        this.cookieService.delete("token");
        this.router.navigate(["/"]);
    }
}
