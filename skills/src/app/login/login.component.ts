import { Component } from '@angular/core';
import * as employeeData from './../db.json';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private route: ActivatedRoute, private router: Router) {}
  empID: string = '';
  name: string = '';
  empData: any = employeeData as any;
  pageEdit: number = 0;
  ngOnInit(): void {
    this.route.queryParams.subscribe((p) => {
      this.empID = p['id'] || 0;
      this.pageEdit = +p['edit'] || 0;
    });
  }
}
