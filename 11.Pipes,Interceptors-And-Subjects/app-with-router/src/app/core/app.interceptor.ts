import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { EMPTY, Observable, of } from "rxjs";
import { catchError, filter, map } from "rxjs/operators";
import { environment } from '../../environments/environment';

const apiUrl = environment.apiUrl;

@Injectable()
export class AppInterceptor implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!req.url.includes('http')) {
            req = req.clone({
                url: `${apiUrl}${req.url}`
            });
        }
        if (req.url.includes(apiUrl)) {
            const setHeaders: any = {};
            if (req.body) {
                setHeaders['content-type'] = 'application/json';
                setHeaders['content-length'] = JSON.stringify(req.body).length;
            }
            req = req.clone({ withCredentials: true, setHeaders });
        }
        // if (req.url.includes(apiUrl)) { req = req.clone({ withCredentials: true, setHeaders: {'authentication': 'token'} });}
        return next.handle(req).pipe(
            // filter(x => x instanceof HttpResponse)
            map(x => {
                if (x instanceof HttpResponse && x.url?.includes('login')) {
                    const authToken = x.headers.get('Authentication');
                }
                return x;
            }), catchError(x => {
                console.error(x);
                // return of(x);
                return EMPTY;
            })
            );
    }

}

export const appInterceptorProvider: Provider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AppInterceptor,
    multi: true
};