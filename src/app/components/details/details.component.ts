import { TaskService } from './../../services/task.service';
import { ApiService } from './../../services/api.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from 'src/app/models/task';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private _taskService:TaskService,private _ativatedRoute:ActivatedRoute) {
    alert("constructor");
   }
 task:Task=new Task();
  ngOnInit(): void {
    alert("ngOnInit");
    this._ativatedRoute.paramMap.subscribe(params=>{

      alert("_ativatedRoute");
     this._taskService.getDetails(params.get('id')).subscribe(
       (response:any)=>{
              this.task=response.Data;        
     });

    });
  }



}
