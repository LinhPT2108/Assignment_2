import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder } from '@angular/forms';
import { LoginStatusService } from '../services/login-status.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  users: any;
  getUser: any;
  constructor(
    private user: UsersService,
    private formBuilder: FormBuilder,
    private loginStatus: LoginStatusService
  ) {}

  ngOnInit(): void {
    this.user.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  submitFormLogin(data: any) {
    Array.from(this.users).find((e) => {
      this.getUser = e;
      if (
        this.getUser.username == data.username &&
        this.getUser.password == data.password
      ) {
        this.user.login(this.getUser);
        this.loginStatus.setUser(this.getUser);
        return;
      }
    });
  }
  showLoginSuccess(userLogin: any) {}
}
