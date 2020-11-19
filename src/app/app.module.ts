import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EntityDataModule, DefaultDataServiceConfig } from "@ngrx/data";
import { EffectsModule } from "@ngrx/effects";
import { entityMetadata } from "./entity-metadata";

import { StoreModule } from "@ngrx/store";

import { AppComponent } from "./app.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeService } from "./employee/employee.service";

const defaultDataServiceConfig: DefaultDataServiceConfig = {
  //root: 'http://dummy.restapiexample.com/api/v1',
  root: "https://jsonplaceholder.typicode.com/",
  timeout: 3000 // request timeout
};

export const entityConfig = {
  entityMetadata
};

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "employees" },
  { path: "employees", component: EmployeeComponent }
];

@NgModule({
  imports: [
    BrowserModule,
    EffectsModule.forRoot([]),
    EntityDataModule.forRoot(entityConfig),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot({})
  ],
  declarations: [AppComponent, EmployeeComponent],
  bootstrap: [AppComponent],
  providers: [
    EmployeeService,
    { provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }
  ]
})
export class AppModule {}
