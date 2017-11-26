import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = 'Add a task';
  taskText: string = 'My first task';
  
  constructor() { }

  ngOnInit() {
  }

}
