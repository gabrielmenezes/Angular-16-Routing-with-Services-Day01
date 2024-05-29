import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
//
export class HomeComponent {
//
constructor(private router:Router, private activatedRoute:ActivatedRoute){};
  goToLogin(){
    //this.router.navigate(['/login']);
    //this.router.navigateByUrl('/login');
    this.router.navigate(['/login'], {relativeTo:this.activatedRoute});
  }
}
