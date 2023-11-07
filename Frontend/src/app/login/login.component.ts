import { Component } from '@angular/core';
import { UserService } from '../user.service'; // Update with the correct path

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  userData: any = {}; // Data from the login form

  constructor(private userService: UserService) {}

  loginUser() {
    this.userService.loginUser(this.userData).subscribe(
      (response) => {
        console.log('User logged in successfully', response);
        // Handle success, e.g., set user session and redirect to another page
      },
      (error) => {
        console.error('Error logging in', error);
        // Handle login error, display error message, etc.
      }
    );
  }
}
