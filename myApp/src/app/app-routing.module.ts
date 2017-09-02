import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ApiMethodsComponent } from './api-methods/api-methods.component';
import { DummyTempComponent } from './dummy-temp/dummy-temp.component';

const routes: Routes = [
    {path: '', redirectTo: 'apimethods', pathMatch: 'full'},
    {path: 'apimethods', component: ApiMethodsComponent},
    {path: 'dummy', component: DummyTempComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
