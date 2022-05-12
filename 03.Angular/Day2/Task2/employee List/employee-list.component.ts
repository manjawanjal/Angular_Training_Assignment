import { Component, Input, OnInit } from '@angular/core';
import * as Emps from '../Emps';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  @Input() 
  employeefilter:string = "";
  empArrcopy:Emps.Emps[] = [];
  empArr:Emps.Emps[] =[
    {empnumber :1, empname:"suraj",empjob:"Admin", empsal:1000,empdept:10},
    {empnumber :2, empname:"raya",empjob:"Manager", empsal:2000,empdept:20},
    {empnumber :3, empname:"namita",empjob:"hr", empsal:5000,empdept:10}
  ];

  constructor() { }

  ngOnInit(): void {
 
  }


  ngOnChanges(){
    
      this.empArrcopy = this.empArr.sort((a:any,b:any)=>a[this.employeefilter] < b[this.employeefilter] ? -1 : 1);;

      this.empArr = this.empArrcopy;
    

    

  }

}
