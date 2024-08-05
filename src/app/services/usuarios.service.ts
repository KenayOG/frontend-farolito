import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user';
import { jwtDecode } from 'jwt-decode';
import { ResponsePosts } from '../interfaces/response-posts';
import { ChangePass } from '../interfaces/change-pass-user';

@Injectable({
  providedIn: 'root',
})
export class UsuariosService {
  private _endPoint: string = environment.endPoint;
  private apiUrl: string = this._endPoint + 'Usuario';
  constructor(private _http: HttpClient) {}

  // Metodo para invocar el endPoint GET de usuarios.
  getUsuarios(): Observable<User[]> {
    return this._http.get<User[]>(`${this.apiUrl}`);
  }

  // Método para obtener el usuario desde el token JWT
  getUserFromToken(): any {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return {
          email: decodedToken.email,
          name: decodedToken.name,
          role: decodedToken.role,
        };
      } catch (e) {
        console.error('Error al decodificar el token', e);
      }
    }
    return null;
  }

  getRoleFromToken(): string | null {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        return decodedToken.role;
      } catch (e) {
        console.error('Error al decodificar el token', e);
      }
    }
    return null;
  }

  // Metodo para obtener el detalle del usaurio
  getUserDetail(): Observable<User> {
    return this._http.get<User>(`${this.apiUrl}/detail`);
  }

  // Metodo para editar un usuario empleado
  editUser(data: User): Observable<ResponsePosts> {
    return this._http.put<ResponsePosts>(`${this.apiUrl}/update`, data);
  }

  // Metodo para editar un usuario empleado
  changePass(data: ChangePass): Observable<ResponsePosts> {
    return this._http.put<ResponsePosts>(`${this.apiUrl}/ChangePass`, data);
  }
}
