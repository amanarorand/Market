import {
  Component,
  ComponentFactoryResolver,
  ViewContainerRef, OnInit, ViewChild
} from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { LoaderService } from './loader/loader.service';
import {LoaderComponent}  from './loader/loader.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('loader', { read: ViewContainerRef }) loaderContainer: ViewContainerRef;
  constructor(private httpClient: HttpClient,
    private loaderService: LoaderService,
    private resolver: ComponentFactoryResolver
  ) {

  }
  title = 'Guest';

  onclick() {
    const httpOptions = {
      headers: new HttpHeaders({
        "Authorization": "Basic " + btoa("aman:pwd")
      })
    }
    this.httpClient.get<any>('http://localhost:8080/ApiApp/api/Default/1')
      .subscribe(
        res => {
          alert('s');
        },
        err => {
          alert('f');
        }
      );
  }

  ngOnInit() {
    this.loaderService.on("start").subscribe(() => {
      var factory = this.resolver.resolveComponentFactory(LoaderComponent)
      this.loaderContainer.createComponent(factory);
    });
    this.loaderService.on("end").subscribe(() => { 
      this.loaderContainer.clear()
    });
  }
}
