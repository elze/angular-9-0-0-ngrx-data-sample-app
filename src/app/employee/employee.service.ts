import { Injectable } from "@angular/core";
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from "@ngrx/data";
import { Employee } from "./employee";
import { User } from "../user";

@Injectable({ providedIn: "root" })
export class EmployeeService extends EntityCollectionServiceBase<User> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    //super('Employee', serviceElementsFactory);
    super("User", serviceElementsFactory);
  }
}
