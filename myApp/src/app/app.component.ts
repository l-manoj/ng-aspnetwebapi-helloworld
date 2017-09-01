import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Sample Angular 2 with Web Api';
  tooltipGetData = 'Click to FETCH data from API !';
  tooltipAddData = 'Click to POST data to API !';
}
