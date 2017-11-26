import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  tasks: any;

  constructor(private route: ActivatedRoute, private router: Router, private _taskService: TaskService) {
    this.route.params.subscribe(res => console.log(res.id));
  }

  ngOnInit() {
    this._taskService.task.subscribe(res => this.tasks = res);
  }

  sendMeHome() {
    this.router.navigate(['']);
  }
}
