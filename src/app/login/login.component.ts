import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginStatusService } from '../services/login-status.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  users: any;
  getUser: any;
  showPassword = false;
  pass = '';
  loading: boolean = false;
  loginForm!: FormGroup;
  username!: string;
  password!: string;
  constructor(
    private user: UsersService,
    private formBuilder: FormBuilder,
    private loginStatus: LoginStatusService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.user.getUsers().subscribe((res) => {
      this.users = res;
    });
  }
  submitFormLogin(data: any) {
    this.user
      .getUserLogin(data.value.username, data.value.password)
      .subscribe((res) => {
        res.length > 0
          ? this.handleLoading(data)
          : alert('Tài khoản hoặc mật khẩu không chính xác !');
      });
  }
  handleLoading(data: any) {
    let interval;
    if (this.users == undefined) {
      interval = setInterval(() => {
        this.loading = true;
        this.handleLogin(data, this.loading);
        this.handleLoading(data);
      }, 100);
    } else {
      clearInterval(interval);
      this.loading = false;
      this.handleLogin(data, this.loading);
    }
  }
  handleLogin(data: any, isLoad: boolean) {
    this.loginStatus.setStatusLogin(isLoad);
    if (this.users != undefined) {
      for (const u of this.users) {
        if (
          u.username == data.value.username &&
          u.password == data.value.password
        ) {
          this.user.login(u);
          this.loginStatus.setUser(u);
          data.reset();
          break;
        }
      }
    }
  }
  togglePassword(): void {
    this.showPassword = !this.showPassword;

    if (this.showPassword) {
      this.pass = this.passwordField.nativeElement.value;
      this.passwordField.nativeElement.type = 'text';
    } else {
      this.passwordField.nativeElement.type = 'password';
      setTimeout(() => {
        this.passwordField.nativeElement.value = this.pass;
      }, 1);
    }
  }

  @ViewChild('passwordField') passwordField!: ElementRef;
}
