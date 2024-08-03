export interface Customer {
  email: string,
  fullName: string,
  password: string,
  roles: [
    "Cliente"
  ]
}

export interface CustomerEmployee {
  email: string,
  fullName: string,
  password: string,
  roles: string[]
}

export interface CustomerForgotten {
  email: string;
}

export interface CustomerReset {
  email: string;
  token: string;
  newPassword: string;
}

export interface CustomerChanger {
  email: string;
  currentPassword: string;
  newPassword: string;
}