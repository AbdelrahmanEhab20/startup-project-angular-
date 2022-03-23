import { TaskService } from './../../services/task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks:Task[]=[];
  name:string="Mohamed Ali";
  isPageLoaded=false;
  constructor(private _taskService:TaskService
     , private _userService:UserService
     ,private _router:Router
     ) { }

  ngOnInit(): void {
    if(!this._userService.isLoggedIn())
    {
      this._router.navigateByUrl('/login');     
    }


    this._taskService.get().subscribe(
      (resposne:any)=>{
        //alert(1);
        this.tasks=resposne.Data;
        this.isPageLoaded=true;
      }
      ,
      (error)=>{
        alert("error");
      }
    );

    //alert("2");
  }

  add(title:string):void{
    let task=new Task();
    task.Title=title;
    
    this._taskService.add(task).subscribe(
      (response:any)=>{
        this.tasks.push(task);
      },
      (error)=>{}
    );
  }

  update(task:Task):void
  {
    // if(task.IsDone==true)
    // {
    //   task.IsDone=false;
    // }
    // else
    // {
    //   task.IsDone=true;
    // }
    task.IsDone=!task.IsDone;
    this._taskService.update(task).subscribe();
  }

  delete(index:number):void
  {
    let task=this.tasks[index];
    //${task.ID}
    task.IsDeleting=true;
    this._taskService.delete(task.ID).subscribe(
      (resposne:any)=>{
        if(resposne.Success)
        {
          this.tasks.splice(index,1);
        }
        else{
          alert(resposne.Message);
        }
        
      }
      ,
      (error)=>{
        alert("error");
      }
    );

  }

  getPendingTasksCount():number{
    return this.tasks.filter(task=>!task.IsDone).length;
  }

}
