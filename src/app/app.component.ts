import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from './services/auth.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { UsuariosService } from './services/usuarios.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  showNavBar: boolean = true;
  isAuthenticated: boolean = false;
  role: string | null = null;
  username: string = '';
  private routerEventsSubscription!: Subscription;
  private authSubscription!: Subscription;

  constructor(
    private router: Router,
    private authService: AuthService,
    private usuariosService: UsuariosService,
    private matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        this.isAuthenticated = isAuthenticated;
        this.updateNavBarVisibility(this.router.url);
        if (isAuthenticated) {
          this.role = this.usuariosService.getRoleFromToken();
          let user = this.usuariosService.getUserFromToken();
          this.username = user.name;
        } else {
          this.role = null;
          this.username = '';
        }
      }
    );

    this.routerEventsSubscription = this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd => event instanceof NavigationEnd
        )
      )
      .subscribe((event: NavigationEnd) => {
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
    try {
      this.authService.logout();
      this.router.navigate(['/home']);
      this.matSnackBar.open('Nos vemos pronto', 'Cerrar', {
        duration: 5000,
        horizontalPosition: 'center',
      });
    } catch (e) {
      this.matSnackBar.open(
        'Ocurrió un problema: ' + (e || 'Desconocido'),
        'Cerrar',
        {
          duration: 5000,
          horizontalPosition: 'center',
        }
      );
    }
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
