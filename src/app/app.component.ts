import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showNavBar: boolean = true;
  isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.updateNavBarVisibility(val.url);
      }
    });
    this.authService.isAuthenticated().subscribe(authStatus => {
      this.isAuthenticated = authStatus;
      this.updateNavBarVisibility(this.router.url);
    });
  }

  private updateNavBarVisibility(url: string): void {
    if (url === '/login' || url === '/signup') {
      this.showNavBar = !this.isAuthenticated;
    } else {
      this.showNavBar = true;
    }
  }
}