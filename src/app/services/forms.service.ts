import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Form } from '../models/form.model';
import { FormType } from '../models/forms.enum';
import { Banner } from './banner';
import { Category } from './category';
import { ListService } from './list.service';
import { Login } from './login';
import { Message } from './message';
import { Minister } from './minister';

@Injectable({ providedIn: 'root' })
export class FormsService {
  category: any[] = [];
  constructor(public listService: ListService) {}
  getForm(form: FormType, model: any): Observable<Form> {
    switch (form) {
      case FormType.LOGIN:
        return of(new Form(Login.getLoginFormConfig()));
      case FormType.MESSAGE:
        return of(new Form(Message.getMessageFormConfig(this.listService)));
      case FormType.CATEGORY:
        return of(new Form(Category.getCategoryFormConfig()));
      case FormType.MINISTER:
        return of(new Form(Minister.getMinisterFormConfig()));
      case FormType.BANNER:
        return of(new Form(Banner.getBannerFormConfig()));
      default:
        throw new Error(
          'Fields for the given form ' + form + ' does not exist!'
        );
    }
  }
}
