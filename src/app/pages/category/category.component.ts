import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormType } from 'src/app/models/forms.enum';
import { CategoryFormModel } from '../../models/category-form.modle';
import { FormAttributes } from '../../models/form-attributes.model';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
})
export class Category implements OnInit {
  formAttributes: FormAttributes;
  categoryFormModel: CategoryFormModel;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Add New Category');
    this.categoryFormModel = new CategoryFormModel();
    this.formAttributes = {
      buttonText: 'Add Category',
      formType: FormType.CATEGORY,
      model: this.categoryFormModel,
    };
  }

  submit(formModel: CategoryFormModel) {
    console.log(formModel);
  }
}
