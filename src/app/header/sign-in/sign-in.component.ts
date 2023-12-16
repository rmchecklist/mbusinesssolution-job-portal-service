import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent {

  buttonText!: string;

  constructor(private router: Router, private authService: AuthService) {
    this.buttonText = this.router.url.includes('sign-in') ? 'Login' : 'Join';
  }

  user = {
    email: '',
    password: ''
  };

  onSubmit() {
    if (this.buttonText === 'Login') {
      // Call login API
      this.authService.login().subscribe(response => {
        // Handle login response
      });
    } else {
      // Call join API
      this.authService.join().subscribe(response => {
        // Handle join response
      });
    }
  }
}
