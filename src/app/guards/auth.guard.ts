import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {inject} from "@angular/core";
import {map} from "rxjs/operators";
import {MatSnackBar} from "@angular/material/snack-bar";
import {UsuariosService} from "../services/usuarios.service";

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const userService = inject(UsuariosService);
  const router = inject(Router);
  const snackBar = inject(MatSnackBar);

  return authService.isAuthenticated().pipe(
    map(isLoggedIn => {
      const unauthenticatedRoutes = ['login', 'signup', 'forgot-password', 'reset-password'];
      const isUnauthenticatedRoute = unauthenticatedRoutes.includes(route.routeConfig?.path || '');

      if (isLoggedIn) {
        if (isUnauthenticatedRoute) {
          router.navigate(['/home']);
          return false;
        }

        const role = userService.getRoleFromToken();
        const allowedRoles = route.data['roles'];

        if (!allowedRoles || role && allowedRoles.includes(role)) {
          return true;
        } else {
          snackBar.open('No tienes permiso para acceder a esta página.', 'Cerrar', {
            duration: 3000,
          });
          router.navigate(['/home']);
          return false;
        }
      } else {
        if (isUnauthenticatedRoute) {
          return true;
        }

        snackBar.open('Debes iniciar sesión para acceder a esta página', 'Cerrar', {
          duration: 3000,
        });
        router.navigate(['/login']);
        return false;
      }
    })
  );
};
