import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { LoginStatusService } from './services/login-status.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'LinhptPC04737_Assignment_2';
  isLogin = false;
  listUser: any;
  isLoading$: Observable<boolean> = new Observable<boolean>();
  constructor(
    private users: UsersService,
    private loading: LoginStatusService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.users.getUsers().subscribe((res: any) => {
      this.listUser = res;
      this.isLoading$ = this.loading.getStatusLogin();
      this.isLogin = this.users.isLoggedIn();

      if (this.isLogin) {
        this.router.navigate(['']);
        this.users.LoginReload(localStorage.getItem('user'), res);
      }
    });
  }
}
