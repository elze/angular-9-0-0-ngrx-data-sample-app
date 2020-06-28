import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  root: 'http://dummy.restapiexample.com/api/v1',
  timeout: 3000, // request timeout
}

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'employees' },
  { path: 'employees', component: EmployeeComponent }
];

@NgModule({
  imports:      
  [ BrowserModule, 
  //EntityDataModule.forRoot(entityConfig),
  FormsModule,
  HttpClientModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [ AppComponent, EmployeeComponent ],
  bootstrap:    [ AppComponent ],
  providers: [
    EmployeeService,
     { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
     ]
})
export class AppModule { }
