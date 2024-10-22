import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../common/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl : string = "http://localhost:9090/api/v1/task";


  constructor(private httpClient:HttpClient  ) { }

  getTask(): Observable<Task[]>{

    return this.httpClient.get<Task[]>(this.apiUrl);
  }

  createTask(formData:any):Observable<any>{

    return this.httpClient.post<Task>(this.apiUrl,formData);
  }

  deleteTaskById(id:number):Observable<any>{
    return this.httpClient.delete(this.apiUrl+"/"+id);
  }

}
