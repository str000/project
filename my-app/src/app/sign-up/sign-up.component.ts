import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(public authService: AuthService) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required]);
  getErrorEmail() {
    if (this.email.hasError('required')) {
      return 'Pole wymagane';
    }
    return this.email.hasError('email') ? 'Nie prawidłowy adres email' : '';
  }

  getErrorPassword() {
    if (this.password.hasError('required')) {
      return 'Pole wymagane';
    }
  }

}
