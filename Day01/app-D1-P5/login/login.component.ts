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
  empData : any = employeeData;
  //
  constructor(private route:ActivatedRoute, private router:Router ) { };
  ngOnInit(): void {
    this.route.params.subscribe(p => {
      this.name = this.empData.employees[p["id"]]?.username;      
    });
    console.log(this.name);
    
  }

}
