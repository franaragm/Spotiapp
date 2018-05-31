import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styles: []
})
export class DemoComponent implements OnInit {

  paises: any[] = [];

  constructor(private http: HttpClient) {
    this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe( (resp: any) => {
        this.paises = resp;
      })
  }

  ngOnInit() {
  }

}
