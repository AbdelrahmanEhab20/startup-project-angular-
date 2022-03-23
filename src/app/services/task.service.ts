import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  constructor(private _apiService:ApiService) { }
  get(){
   return this._apiService.get(`/Task/Get`);
  }
  getDetails(id:string|null){
    return this._apiService.get(`/Task/GetByID?id=${id}`);
   }
  add(task:Task)
  {
    return this._apiService.post(`/Task/POST`,task);

  }
  update(task:Task)
  {
    return this._apiService.post(`/Task/PUT`,task);

  }
  delete(id:number)
  {
    return this._apiService.delete(`/Task/Delete?id=${id}`);
  }
}
