import { Component, Input, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;
  username!: String;
  fullname!: String;
  email!: String;
  password!: String;
  confirmPassword!: String;
  regexEmailPattern = /^[a-z0-9._%+-]+@gmail.com$/i;
  constructor(private users: UsersService, private formBuilder: FormBuilder) {
    this.register = this.formBuilder.group({
      username: ['', Validators.required],
      fullname: ['', Validators.required],
      email: [
        '',
        Validators.required,
        Validators.pattern(this.regexEmailPattern),
      ],
      password: ['', Validators.required],
    });
  }
  @Input('appMatch') matchField!: string;
  validate(control: FormControl): ValidationErrors | null {
    const matchValue = control.parent?.get(this.matchField)?.value;
    return matchValue === control.value
      ? null
      : { match: { value: control.value } };
  }
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
