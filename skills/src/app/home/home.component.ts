import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
  ngOnInit(): void {}
  goToLogin() {
    // this.router.navigate(['/login']);
    // this.router.navigateByUrl('/login');
    this.router.navigate(['/login'], { queryParams: { id: 2, edit: 0 } });
  }
}
