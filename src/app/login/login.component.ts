import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthenticationService } from '../services/authetication.service';

@Component({
  selector: 'app-avm-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  loginErrorMessage: string;
  sendCodeErrorMessage: string;
  isCodeSent: boolean = false;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private sessionService: SessionService,
    private snackBar: MatSnackBar
  ) {
    if (this.sessionService.isUserLoggedIn()) {
      this.redirectToPageByRole();
    }
  }

  login() {
    if (!this.loginForm.valid) {
      return;
    }
    this.loginErrorMessage = null;
    const Email = this.loginForm.get('email').value;
    const Password = this.loginForm.get('password').value;

    this.authenticationService.login({ Email, Password }).subscribe(
      (result) => {
        this.sessionService.startSession(result);
        this.redirectToPageByRole();
      },
      (err) => {
        if (err.status === 401) {
          this.loginErrorMessage = 'Invalid Credentials';
          this.snackBar.open('Invalid Credentials', 'Dismiss', {
            duration: 3000,
          });
        }
      }
    );
  }

  redirectToPageByRole() {
    this.router.navigateByUrl('categories');
  }
}