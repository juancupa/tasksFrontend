import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit{

  id:number =0;
  title:string ='';
  description:string ='';

  constructor(private taskService:TaskService,
              private router:Router
  ){}

  ngOnInit(): void {

  }

  addTask(){
    const formData =new FormData();

    formData.append('id',this.id.toString());
    formData.append('title',this.title);
    formData.append('description',this.description);

    console.log(formData);

    this.taskService.createTask(formData).subscribe(
      data => console.log(data)
    );
    this.router.navigate(['task/listTask'])
  }

}
