import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private users: UsersService) {}

  ngOnInit(): void {}
  registerSubmit(data: any) {
    let user = {
      username: '',
      password: '',
      fullname: '',
      email: '',
      gender: '',
      birthday: '',
      schoolfee: '',
      marks: '',
    };
    user.username = data.value.username;
    user.fullname = data.value.fullname;
    user.email = data.value.email;
    user.password = data.value.password;

    this.users.postUser(user).subscribe((user) => {
      this.users.logout();
      this.resetForm(data);
    });
  }

  resetForm(form: any) {
    form.reset();
  }
}
