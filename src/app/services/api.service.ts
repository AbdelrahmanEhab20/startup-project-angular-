import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient,private _userService:UserService) { }
  getHeaders():HttpHeaders {
return new HttpHeaders({
  'token':this._userService.getToken()
});
  }

  get(url:string)
  {
    return this._http.get(`${environment.apiURL}${url}`,{headers:this.getHeaders()} );
  }

  post(url:string,body:any)
  {
    return this._http.post(`${environment.apiURL}${url}`,body,{headers:this.getHeaders()});
  }
  
  put(url:string,body:any)
  {
    return this._http.put(`${environment.apiURL}${url}`,body,{headers:this.getHeaders()});
  }
  
  delete(url:string)
  {
    return this._http.delete(`${environment.apiURL}${url}`,{headers:this.getHeaders()});
  }
}
