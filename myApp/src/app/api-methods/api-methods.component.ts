import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-methods',
  templateUrl: './api-methods.component.html',
  styleUrls: ['./api-methods.component.css']
})
export class ApiMethodsComponent implements OnInit {
  tooltipGetData = 'Click to FETCH data from API !';
  tooltipAddData = 'Click to POST data to API !';
  constructor() { }

  ngOnInit() {
  }

}
