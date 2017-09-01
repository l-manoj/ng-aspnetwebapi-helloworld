import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tooltipGetData = 'Click to FETCH data from API !';
  tooltipAddData = 'Click to POST data to API !';
}
