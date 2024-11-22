import { Component } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { RouterOutlet } from '@angular/router';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'GroceryGo';

  constructor(private sessionService: SessionService) {}

  isAuthenticated(): boolean {
    return this.sessionService.isUserLoggedIn();
  }
}
