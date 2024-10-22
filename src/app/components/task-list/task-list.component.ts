import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/common/task';
import { TaskService } from 'src/app/services/task.service';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit{

  tasks: Task[]=[];

  constructor(private taskService:TaskService){}


  ngOnInit(): void {

    this.listTask();
  }

  listTask(){
    this.taskService.getTask().subscribe(

      data =>{this.tasks =data
        console.log(data);
      }
    );
  }


  deleteTaskById(id:number){

    this.taskService.deleteTaskById(id).subscribe(
      () => this.listTask()
    );
  }
}
