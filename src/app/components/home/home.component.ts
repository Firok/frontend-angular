import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { TaskService } from '../../services/task.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    animations: [

        trigger('tasks', [
            transition('* => *', [
                query(':enter', style({ opacity: 0 }), { optional: true}),

                query(':enter', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({ opacity: 0, transform: 'translateY(-75%)', offset: 0}),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
                        style({ opacity: 1, transform: 'translateY(0)', offset: 1}),
                    ]))]), { optional: true}),

                query(':leave', stagger('300ms', [
                    animate('.6s ease-in', keyframes([
                        style({ opacity: 1, transform: 'translateY(0)', offset: 0}),
                        style({ opacity: .5, transform: 'translateY(35px)', offset: .3}),
                        style({ opacity: 0, transform: 'translateY(-75%)', offset: 1}),
                    ]))]), { optional: true})
            ])
        ])
    ]
})
export class HomeComponent implements OnInit {

    itemCount: number;
    btnText: string = 'Add a task';
    taskText: string = 'My first task';
    tasks = [];

    constructor(private _taskService: TaskService) {}

    ngOnInit() {
        this._taskService.task.subscribe(res => this.tasks = res);
        this.itemCount = this.tasks.length;
        this._taskService.changeTask(this.tasks);
    }

    addTask() {
        this.tasks.push(this.taskText);
        this.taskText = '';
        this.itemCount = this.tasks.length;
        this._taskService.changeTask(this.tasks);
    }

    removeTask(i) {
        this.tasks.splice(i, 1);
        this.itemCount = this.tasks.length;
        this._taskService.changeTask(this.tasks);
    }


}
