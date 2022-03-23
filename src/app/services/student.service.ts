import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor(private _apiService:ApiService) { }
  get(){
   return this._apiService.get(`/Student/Get`);
  }
  add(student:Student)
  {
    return this._apiService.post(`/Student/POST`,student);

  }
  update(student:Student)
  {
    return this._apiService.post(`/Student/PUT`,student);

  }
  delete(id:number)
  {
    return this._apiService.delete(`/Student/Delete?id=${id}`);
  }
}
