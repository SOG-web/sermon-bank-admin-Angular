import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';
import { FormAttributes } from '../../models/form-attributes.model';
import { FormType } from '../../models/forms.enum';
import { LoginFormModel } from '../../models/login-form.model';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  formAttributes: FormAttributes;
  loginFormModel: LoginFormModel;
  authType: String = 'Login';

  constructor(
    private title: Title,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit() {
    this.title.setTitle('Login');
    this.loginFormModel = new LoginFormModel();
    this.formAttributes = {
      buttonText: 'Login',
      formType: FormType.LOGIN,
      model: this.loginFormModel,
    };
  }

  submit(formModel: LoginFormModel) {
    this.authService
      .login({
        email: formModel.email,
        password: formModel.password,
      })
      .then(() => {
        this.route.navigate(['/']);
      });
  }
}
