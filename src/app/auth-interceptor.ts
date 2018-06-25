import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private router: Router) {

    }
    public intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<HttpEvent<any>> {
        if (req.url.indexOf('Token') === -1) {
            if (localStorage.getItem('token') != null) {
                const authRequest = req.clone({
                    headers : req.headers.set('Authorization', 'Bearer ' + localStorage.getItem('token'))
                });
                return next.handle(authRequest);
                // req.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
            } else {
                this.router.navigate(['/login']);
            }
        }
        return next.handle(req);
    }
}


