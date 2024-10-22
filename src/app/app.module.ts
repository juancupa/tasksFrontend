import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskAddComponent } from './components/task-add/task-add.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { TaskListComponent } from './components/task-list/task-list.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routers :Routes=[
  {path:'task/listTask', component:TaskListComponent},
  {path:'task/addTask', component:TaskAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TaskAddComponent,
    HomeComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routers),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
