import { TaskService } from './services/task.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasksCount:number=0;
  constructor(private _taskService:TaskService){}
  title = 'todolist';

  ngOnInit(): void {
      this._taskService.get().subscribe(
        (response:any)=>{
          this.tasksCount=response.Data.length;
        },
        (error)=>{}
      );
  }
}
