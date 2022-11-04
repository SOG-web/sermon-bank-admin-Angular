import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormAttributes } from '../../models/form-attributes.model';
import { FormType } from '../../models/forms.enum';
import { MinisterFormModel } from '../../models/minister-form.model';

@Component({
  selector: 'app-ministers',
  templateUrl: 'ministers.component.html',
  styleUrls: ['ministers.component.css'],
})
export class Ministers implements OnInit {
  ministerFormModel: MinisterFormModel;
  formAttributes: FormAttributes;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Add New Minister');
    this.ministerFormModel = new MinisterFormModel();
    this.formAttributes = {
      buttonText: 'Add new Minister',
      formType: FormType.MINISTER,
      model: this.ministerFormModel,
    };
  }

  submit(formModel: MinisterFormModel) {
    // console.log(formModel.image);
    console.log(formModel);
  }
}
