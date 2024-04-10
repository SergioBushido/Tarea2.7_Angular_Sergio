import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.services';
import { RegisterRequest, AuthenticationRequest } from '../../models/auth.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: []
})
export class AuthComponent {
  constructor(private authService: AuthService) {}

  register(user: RegisterRequest): void {
    this.authService.register(user).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.error(error);
      }
    );
  }

  login(credentials: AuthenticationRequest): void {
    this.authService.login(credentials).subscribe(
      response => {
        localStorage.setItem('access_token', response.access_token);
        localStorage.setItem('refresh_token', response.refresh_token);
      },
      error => {
        console.error(error);
      }
    );
  }

  // Puedes añadir métodos para refreshToken y otros según sea necesario
}
