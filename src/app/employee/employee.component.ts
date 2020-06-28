import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  heroes$: Observable<Employee[]>;
  loading: boolean;
  constructor() { }

  ngOnInit() {
  }

}