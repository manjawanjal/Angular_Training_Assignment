import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent 
 {
  uid:string = "";
  pwd:string = "";
  result:string = "";

  form: FormGroup = new FormGroup({
    uid: new FormControl('',Validators.required),
    pwd: new FormControl('',Validators.required),
  });

  public login_click():void
  {
       if(this.uid=="admin" && this.pwd=="admin@123")
       {
         //alert("login successfull");
         this.result="Login Successfull..";
       }
 else
 {
   //alert("Invalid user..!!");
   this.result="Invalid User";
 }
}

}

