import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UpdateUserprofile, User } from '../interfaces/user';
import { jwtDecode } from 'jwt-decode';
import { ResponsePosts } from '../interfaces/response-posts';
import { ChangePass } from '../interfaces/change-pass-user';
import { AuthResponse } from '../interfaces/auth-response';

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

  // Metodo para editar un usuario desde su perfil
  editarUser(data: UpdateUserprofile): Observable<ResponsePosts> {
    return this._http.put<ResponsePosts>(`${this.apiUrl}/update`, data);
  }

  // Metodo para editar el password
  changePass(data: ChangePass): Observable<ResponsePosts> {
    return this._http.post<ResponsePosts>(`${this.apiUrl}/ChangePass`, data);
  }

  // Metodo para actualizar la tarjeta de credito desde el perfil del usuario
  updateCreditCard(cardNumber: string): Observable<any> {
    const payload = { cardNumber };
    return this._http.patch<void>(`${this.apiUrl}/add-credit-card`, payload, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  uploadImage(image: File): Observable<AuthResponse> {
    const formData = new FormData();
    formData.append('Imagen', image, image.name);
    return this._http.patch<AuthResponse>(
      `${this.apiUrl}/upload-image`,
      formData
    );
  }
}
