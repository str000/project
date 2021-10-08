import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent {

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
