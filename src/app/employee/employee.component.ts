import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { User } from "../user";
import { Employee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  //employees$: Observable<Employee[]>;
  employees$: Observable<User[]>;
  users: User[];
  loading: boolean;
  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees() {
    this.employeeService.getAll().subscribe((res: any) => {
      this.users = res;
    })
  }
}
