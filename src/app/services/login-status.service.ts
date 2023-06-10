import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginStatusService {
  user: any;
  constructor() {}

  setUser(users: Object): void {
    this.user = users;
  }
  getUser(): Object {
    return this.user;
  }
}
