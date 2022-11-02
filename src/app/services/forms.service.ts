import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Form } from '../models/form.model';
import { FormType } from '../models/forms.enum';
import { Category } from './category';
import { Login } from './login';
import { Message } from './message';

@Injectable({ providedIn: 'root' })
export class FormsService {
  getForm(form: FormType, model: any): Observable<Form> {
    switch (form) {
      case FormType.LOGIN:
        return of(new Form(Login.getLoginFormConfig()));
      case FormType.MESSAGE:
        return of(new Form(Message.getMessageFormConfig()));
      case FormType.CATEGORY:
        return of(new Form(Category.getCategoryFormConfig()));
      default:
        throw new Error(
          'Fields for the given form ' + form + ' does not exist!'
        );
    }
  }
}
