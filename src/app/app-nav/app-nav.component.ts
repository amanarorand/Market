import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router,Route}  from '@angular/router'
@Component({
  selector: 'app-app-nav',
  templateUrl: './app-nav.component.html',
  styleUrls: ['./app-nav.component.css']
})
export class AppNavComponent implements OnInit {

  constructor(public activatedRoute: Router) { }

  ngOnInit() {
  }

}
