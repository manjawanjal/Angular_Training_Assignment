import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-emp-component',
  templateUrl: './emp-component.component.html',
  styleUrls: ['./emp-component.component.css']
})



export class EmpComponentComponent implements OnInit {

  id:number = 0;
  empname:string  = "";
  job:string  = "";
  sal:number = 0;
  deptno:number=0;
 
 
    employeesArray:any[] = [];

  constructor(private dataService:DataService) { }


  ngOnInit(): void {

  }
getData_click()
  {
			this.dataService.getAllEmployees().subscribe( (resData:any) =>
			{
        console.log(resData);
        this.employeesArray = resData;
			});
  }


  
  addData_click() {
    let stObj:any = {};
    stObj.id = 0;
    stObj.empname = this.empname;
    stObj.job = this.job;
    stObj.sal = this.sal;
    stObj.deptno = this.deptno;

    console.log(stObj);

    this.dataService.addEmployee(stObj).subscribe( (resData:any) =>
    {
      alert("New Employee details are added to database");
      this.getData_click();
    });
  }
//id,empname,job,sal,deptno
  updateData_click() {
    let stObj:any = {};
    stObj.id = this.id;
    stObj.empname = this.empname;
    stObj.job = this.job;
    stObj.sal = this.sal;
    stObj.deptno = this.deptno;

    console.log(stObj);

    this.dataService.updateEmployee(stObj).subscribe( (resData:any) =>
    {
       alert("Employee details are update to database");
      this.getData_click();
    });
  }

  deleteData_click(id:number) {

    this.dataService.deleteEmployee(id).subscribe( (resData:any) =>
    {
      alert("Employee details are deleted from database");
      this.getData_click();
    });

  }

  selectData_click(id:number) {

    this.id = id;
    
    this.dataService.getEmpoloyeetById(id).subscribe( (resData:any) =>
    {
      //empno, ename, job, sal, deptno
      this.empname = resData.empname;
      this.job = resData.job;
      this.sal = resData.sal;
      this.deptno = resData.deptno;
    });
  }
  clearFields() {
    this.empname= "";
    this.job = "";
    this.sal = 0;
    this.deptno = 0;
  }
}
