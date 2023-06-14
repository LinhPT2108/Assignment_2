import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';
import { LoginStatusService } from '../services/login-status.service';
import { UsersService } from '../services/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public isLoggedIn$: Observable<boolean> = new Observable<boolean>();
  public isLoggedOut$: Observable<boolean> = new Observable<boolean>();
  public userLogin: any;

  languages: string[] = ['English', 'Tiếng Việt', 'Indian'];

  constructor(
    public userStatus: LoginStatusService,
    public auth: UsersService,
    private renderer: Renderer2,
    private elementRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.auth.isLogIn();
    this.isLoggedOut$ = this.auth.isLogOut();
  }

  public logoutWebsite(): void {
    this.auth.logout();
  }
}
