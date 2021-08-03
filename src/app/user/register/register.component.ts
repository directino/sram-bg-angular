import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  email: any;
  password: any;
  repeatPassword: any;

  constructor(public authService: UserService) { }

  ngOnInit() {}

  onSubmit(formData: any) {
    if (formData.valid) {
      console.log(formData.value);
      this.authService.emailSignup(
        formData.value.email,
        formData.value.password,
        formData.value.repeatPassword
      );
    }
  }
}