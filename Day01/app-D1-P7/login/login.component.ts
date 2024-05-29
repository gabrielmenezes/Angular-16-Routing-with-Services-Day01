import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import * as employeeData from "./../db.json";
//
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
//
export class LoginComponent implements OnInit{
  empId:string = "";
  name:string = "";
  password:string = "";
  pageEdit : number = 0;
  empData : any = employeeData as any;
  //
  constructor(private route:ActivatedRoute, private router:Router ) { };
  ngOnInit(): void {
    this.route.queryParams.subscribe(p => {
      this.empId = p['id' || 0];
      this.pageEdit = p['edit' || 0];
      console.log(this.empId + "-" + this.pageEdit);      
      //this.name = this.empData.employees[p["id"]]?.username;   
      // this.empData.employees.find((empObj : any)=>{
      //   if(empObj.id == p["id"])
      //     this.name = empObj.username;
      // });
    });
    //console.log(this.name);
    
  }

}
