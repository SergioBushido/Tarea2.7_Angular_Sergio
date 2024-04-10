export interface AuthenticationRequest {
    username: string;
    password: string;
  }
  
  export interface AuthenticationResponse {
    access_token: string;
    refresh_token: string;
  }
  
  export interface RegisterRequest {
    username: string;
    email: string;
    password: string;
    role: 'USER' | 'ADMIN'; // Asumiendo que son los únicos roles que manejas
  }
  