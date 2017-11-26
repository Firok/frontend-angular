import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class TaskService {

  private tasks = new BehaviorSubject<any>(['My first task', 'Learn Angular 5', 'Interpolation']);
  task = this.tasks.asObservable();

  constructor() { }

  changeTask(task) {
    this.tasks.next(task);
  }
}
