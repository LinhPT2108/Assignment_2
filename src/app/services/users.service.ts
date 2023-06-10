import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, catchError } from 'rxjs';

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
  constructor(private http: HttpClient, private router: Router) {}

  getUsers(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/student');
  }
  postUser(data: Object): Observable<any> {
    return this.http.post<Object>('http://localhost:3000/student', data);
  }

  public logout(): void {
    this.loginStatus.next(false);
    this.unNavStatus.next(true);
    this.router.navigate(['/dang-nhap']);
  }
  public login(user: any): void {
    if (user != undefined) {
      this.user = user;
      this.loginStatus.next(true);
      this.unNavStatus.next(false);
      this.router.navigate(['']);
    }
  }
  public isLogIn(): Observable<boolean> {
    return this.loginStatus.asObservable();
  }
  public isLogOut(): Observable<boolean> {
    return this.unNavStatus.asObservable();
  }
  public getUser(): any {
    return this.user;
  }
}
