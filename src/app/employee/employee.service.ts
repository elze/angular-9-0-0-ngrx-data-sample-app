import { Injectable } from '@angular/core';
import {
  EntityCollectionServiceBase,
  EntityCollectionServiceElementsFactory
} from '@ngrx/data';
import { Employee } from './employee';

@Injectable({ providedIn: 'root' })
export class EmployeeService extends EntityCollectionServiceBase<Employee> {
  constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
    super('Employee', serviceElementsFactory);
  }
}