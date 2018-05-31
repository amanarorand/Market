import { Component } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {

  }
  title = 'Ramesh';

  onclick() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa("aman:pwd")
      })
    }
    this.httpClient.get<any>('http://localhost:60725/api/Default/1',httpOptions)
      .subscribe(
        res => {
          alert('s');
        },
        err => {
          alert('f');
        }
      );
  }
}
