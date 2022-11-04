import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormType } from 'src/app/models/forms.enum';
import { ListService } from 'src/app/services/list.service';
import { UploadService } from 'src/app/services/upload.service';
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
  category = [];

  constructor(
    private title: Title,
    private uploadService: UploadService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Add New Category');
    this.categoryFormModel = new CategoryFormModel();
    this.formAttributes = {
      buttonText: 'Add Category',
      formType: FormType.CATEGORY,
      model: this.categoryFormModel,
    };
    this.listService.get('category').subscribe((doc) => {
      this.category = doc;
    });
  }

  submit(formModel: CategoryFormModel) {
    let safeNameFull = formModel.icon[0].name.replace(/([^a-z0-9.]+)/gi, '');
    const path = `category/${new Date().getTime()}_${safeNameFull}`;
    this.uploadService.uploadFile(path, formModel.icon[0]).then((url) => {
      url.subscribe((url) => {
        // console.log(url);
        this.listService
          .add({ icon: url, path, name: formModel.name }, 'category')
          .then((res) => {
            console.log('done');
          });
      });
    });
  }

  onDelete(category) {
    // console.log(banner);
    this.listService
      .delete(category.icon, category.path, 'icon', 'category', '==')
      .then((res) => {
        console.log('done');
      });
  }
}
