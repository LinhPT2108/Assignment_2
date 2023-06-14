import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginStatusService {
  user: any;
  public isLogined$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  );
  constructor() {}

  setUser(users: Object): void {
    this.user = users;
  }
  getUser(): Object {
    return this.user;
  }
  setStatusLogin(isLogin: boolean): void {
    this.isLogined$.next(isLogin);
  }
  getStatusLogin(): Observable<boolean> {
    return this.isLogined$.asObservable();
  }
}
