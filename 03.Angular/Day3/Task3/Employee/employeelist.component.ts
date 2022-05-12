import { Component, OnInit } from '@angular/core';
import {Emps } from '../employeelist';
@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  
  value1:string  = "";
 
  value2:string  = "";

  filterMin:string  ="";
  filterMax:string  ="";
  
  empArrcopy:Emps[] = [];
  empArr:Emps[] =[
    {empnumber :1, empname:"smith",empjob:"Admin", empsal:1000,empdept:10},
    {empnumber :2, empname:"ram",empjob:"Manager", empsal:2000,empdept:20},
    {empnumber :3, empname:"ramesh",empjob:"hr", empsal:5000,empdept:10}
  ];

  Filter_Click(){
    
    this.value1 = this.filterMin;
    this.value2 = this.filterMax;

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
