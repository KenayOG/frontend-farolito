export interface User {
  id: string;
  fullName: string;
  email: string;
  tarjeta: string | null;
  roles: string[];
  phoneNumber: string | null;
  twoFactorEnabled: boolean;
  phoneNumberConfirmed: boolean;
  accessFailedCount: number;
  urlImage: string | null;
  direccion: string | null;
}
