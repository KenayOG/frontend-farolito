import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  showNavBar: boolean = true;
  isAuthenticated: boolean = false;
  private routerEventsSubscription!: Subscription;
  private authSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuthenticated => {
      this.isAuthenticated = isAuthenticated;
      this.updateNavBarVisibility(this.router.url);
    });

    this.routerEventsSubscription = this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.updateNavBarVisibility(event.urlAfterRedirects);
    });
  }

  private updateNavBarVisibility(url: string): void {
    if (url === '/login' || url === '/signup') {
      this.showNavBar = !this.isAuthenticated;
    } else {
      this.showNavBar = true;
    }
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home']);
  }

  ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }
}
