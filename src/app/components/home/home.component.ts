import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit{

  tasks: Task[]=[];

  constructor(private taskService: TaskService){}

  ngOnInit(): void {

    this.taskService.getTask().subscribe(
      data => this.tasks = data
    );
  }



}
