import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { APIService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private user: any;
  private loginStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  private unNavStatus: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  constructor(
    private http: HttpClient,
    private router: Router,
    private api: APIService
  ) {}

  getUsers(): Observable<any> {
    return this.http.get<any>(this.api.getAPI() + 'student');
  }
  postUser(data: Object): Observable<any> {
    return this.http.post<Object>(this.api.getAPI() + 'student', data);
  }

  getUserLogin(username: string, password: any): Observable<any> {
    return this.http.get<any>(
      this.api.getAPI() +
        'student/?username=' +
        username +
        '&password=' +
        password
    );
  }

  public logout(): void {
    this.loginStatus.next(false);
    this.unNavStatus.next(true);
    this.router.navigate(['/dang-nhap']);
    localStorage.removeItem('user');
  }
  public login(users: any): void {
    if (users != undefined) {
      let username = users.username;
      let password = users.password;
      this.user = users;
      this.loginStatus.next(true);
      this.unNavStatus.next(false);
      localStorage.setItem('user', JSON.stringify({ username, password }));
      this.router.navigate(['']);
      this.isLoggedIn();
    }
  }
  public isLogIn(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }

  public isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }
  public isLogOut(): Observable<boolean> {
    return this.unNavStatus.asObservable();
  }
  public getUser(): any {
    return this.user;
  }

  public LoginReload(data: any, listUser: any): void {
    let dataLocal = JSON.parse(data);

    for (const u of listUser) {
      console.log(
        u.username == dataLocal.username && u.password == dataLocal.password
      );
      if (
        u.username == dataLocal.username &&
        u.password == dataLocal.password
      ) {
        this.login(u);
        break;
      }
    }
  }
}
