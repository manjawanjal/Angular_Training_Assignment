import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp',
  templateUrl: './emp.component.html',
  styleUrls: ['./emp.component.css']
})
export class EmpComponent {

  public emp_id:number = 101;
  public emp_name:string = "Manjiri";
  public emp_job:string = "Software Developer";
  public emp_salary:number = 40000;
  public dept_id:number = 122;

}