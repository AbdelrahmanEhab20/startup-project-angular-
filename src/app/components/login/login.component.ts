import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin:FormGroup=new FormGroup({});
  constructor(private _formBuilder:FormBuilder
    ,private _userService:UserService
    ,private _router:Router
    ) { }

  ngOnInit(): void {
    this.formLogin=this._formBuilder.group({
      Email:['mali@roboost.app',[Validators.email,Validators.required,Validators.minLength(4),Validators.maxLength(30)]],
      Password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(20)]]
    });


  }
  login(){
   //alert(JSON.stringify(this.formLogin.value));

   let token="3453454353455353535353535345";
   this._userService.login(token);
   this._router.navigateByUrl('/tasks');
  }

  isValidControl(name:string):boolean
  {
    return this.formLogin.controls[name].valid;
  
  }

  removePasswordValidation(){
    this.formLogin.controls['Password'].setValidators([]);
    this.formLogin.controls['Password'].updateValueAndValidity();
  }

  addPasswordValidation(){
    this.formLogin.controls['Password'].setValidators([Validators.required]);
    this.formLogin.controls['Password'].updateValueAndValidity();
  }

}
