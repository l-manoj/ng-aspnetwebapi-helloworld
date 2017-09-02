import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MdTooltipModule, MdButtonModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { ApiMethodsComponent } from './api-methods/api-methods.component';
import { DummyTempComponent } from './dummy-temp/dummy-temp.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppFooterComponent,
    ApiMethodsComponent,
    DummyTempComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdTooltipModule, MdButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
