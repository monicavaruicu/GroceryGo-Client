import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
  });

  imagePreview: string;
  base64Image: string;

  constructor(private userService: UserService, private router: Router){}

  register() {
    var registerModel = {
      email: this.registerForm.get('email').value,
      password: this.registerForm.get('password').value,
      firstName: this.registerForm.get('firstName').value,
      lastName: this.registerForm.get('lastName').value,
  };

    this.userService.register(registerModel).subscribe(
      () => {
        const redirectTo = `login`;
        this.router.navigate([redirectTo]);
      }
    );
  }
}
