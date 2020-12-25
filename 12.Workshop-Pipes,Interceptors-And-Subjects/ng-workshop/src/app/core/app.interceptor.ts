import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Router } from "@angular/router";
import { EMPTY, Observable, of, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { USE_BASE_URL } from "../shared/constants";
import { ErrorService } from "../shared/error.service";

import { environment } from './../../environments/environment';
import { AuthService } from "./auth.service";

@Injectable()
export class AppInterceptor implements HttpInterceptor {
    apiUrl = environment.apiUrl;
    baseUrl = environment.baseUrl;

    constructor(private errorService: ErrorService, private router: Router){}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const withoutApiUrl = req.url.includes(USE_BASE_URL);
        if (withoutApiUrl) {
            req = req.clone({ url: `${this.baseUrl}${req.url.replace(USE_BASE_URL, '')}` });
        };
        if (!withoutApiUrl && !req.url.includes('http')) {
            req = req.clone({ url: `${this.apiUrl}${req.url}`, withCredentials: true });
        }
        return next.handle(req)
            .pipe(catchError((err: HttpErrorResponse) => {
                let type = '';
                if (err.status === 404) {
                    this.router.navigate(['/404']);
                } else if (err.status === 401) {
                    this.errorService.errorInfoMessage = err.message;
                    type = 'info';
                } else {
                    this.errorService.errorStrongMessage = err.message;
                    type = 'strong';
                }
                this.errorService.clearMessage(type);
                return throwError(err);
        }));
    }
}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};