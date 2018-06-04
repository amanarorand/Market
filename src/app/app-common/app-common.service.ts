import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { pathEnum } from '../app-entities/app-enum';
@Injectable({
  providedIn: 'root'
})
export class AppCommonService<I, O> {

  constructor(private http: HttpClient) {

  }

  public post(url: string, data: I): Observable<any> {
    const mainUrl = pathEnum.basePath + url;
    return this.http.post<O>(mainUrl, data).pipe(
      map(res => {
        return of(res);
      }),
      catchError(err => {
        if ([500, 400].indexOf(err.status) > -1) {
          alert(err.error);
        }
        return Observable.throw(err);
      })
    );
  }

}
