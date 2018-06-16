import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { pathEnum } from '../app-entities/app-enum';
import { Router } from '@angular/router';
import { AuthService } from '../app-common/auth.service';
import { LoaderService } from '../loader/loader.service';
@Injectable({
  providedIn: 'root'
})

export class AppCommonService<I, O> {
  constructor(private http: HttpClient,
    private router: Router,
    private authService: AuthService, private loaderService: LoaderService
  ) { }

  public post(url: string, data: I, httpOptions: any = null): Observable<any> {
    this.loaderService.publish('start');
    let mainUrl = '';
    if (url.indexOf('Token') === -1) {
      mainUrl = pathEnum.basePath + 'api/' + url;
    } else { mainUrl = pathEnum.basePath + url; }
    let _post;
    if (httpOptions) {
      _post = this.http.post<O>(mainUrl, data, httpOptions);
    } else {
      _post = this.http.post<O>(mainUrl, data);
    }

    return _post.pipe(
      map(res => {
        this.loaderService.publish('end');
        return of(res);
      }),
      catchError(err => {
        this.loaderService.publish('end');
        this.handleError(err, this.authService);
        return throwError(err);
      })
    );
  }

  public get(url: string, httpOptions: any = null): Observable<any> {
    this.loaderService.publish('start');
    const mainUrl = pathEnum.basePath + 'api/' + url;
    let _get;
    if (httpOptions) {
      _get = this.http.get<O>(mainUrl, httpOptions);
    } else {
      _get = this.http.get<O>(mainUrl);
    }
    return _get.pipe(
      map(res => {
        this.loaderService.publish('end');
        return of(res);
      }),
      catchError(err => {
        this.loaderService.publish('end');
        this.handleError(err, this.authService);
        return throwError(err);
      })
    );
  }

  private handleError(err: any, authService: AuthService) {
    switch (err.status) {
      case 500:
        alert(err.error.Message);
        break;
      case 400:
        alert(err.error); break;
      case 401:
        alert(err.error.Message);
        authService.Logout();
        break;
    }
  }

  private CreateLoader() {

  }

}
