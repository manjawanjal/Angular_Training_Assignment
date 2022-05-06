import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-vehicle-registration-form',
  templateUrl: './vehicle-registration-form.component.html',
  styleUrls: ['./vehicle-registration-form.component.css']
})


export class VehicleRegistrationFormComponent implements OnInit {

  
  
  constructor() { }
  ngOnInit(): void {
    // ajax call to send data to server
   
  }


  VehicleRegistrationForm:FormGroup = new FormGroup({
    Owner_Name : new FormControl("", Validators.required),
    Contact_Number : new FormControl("", [Validators.required,Validators.pattern('[789]{1}\\d{9}')]),
    Vehicle_Registration_Number : new FormControl("",[Validators.required,Validators.pattern('^[A-Z]{2}[0-9]{1,2}[A-Z]{1,2}[0-9]{1,4}$')]),
    Address : new FormControl("", Validators.required),
    Model : new FormControl ("",[Validators.required,Validators.minLength(10)]),
    Year : new FormControl("",[Validators.required,Validators.min(2012),Validators.max(2022)]),

  });

  submit_click(){
    alert("Vehicle registration  Details are stored.");
    let vehicleObj = this.VehicleRegistrationForm.value;
    console.log(vehicleObj);
  }


  
}
