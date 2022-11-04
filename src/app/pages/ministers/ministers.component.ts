import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ListService } from 'src/app/services/list.service';
import { UploadService } from 'src/app/services/upload.service';
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
  ministers = [];

  constructor(
    private title: Title,
    private uploadService: UploadService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Add New Minister');
    this.ministerFormModel = new MinisterFormModel();
    this.formAttributes = {
      buttonText: 'Add new Minister',
      formType: FormType.MINISTER,
      model: this.ministerFormModel,
    };
    this.listService.get('ministers').subscribe((docs) => {
      // console.log(docs);
      this.ministers = docs;
    });
  }

  submit(formModel: MinisterFormModel) {
    // console.log(formModel.image);
    console.log(formModel);
    const safeNameFull = formModel.image[0].name.replace(/([^a-z0-9.]+)/gi, '');
    const path = `ministers/images/${new Date().getTime()}_${safeNameFull}`;

    this.uploadService.uploadFile(path, formModel.image[0]).then((url) => {
      url.subscribe((url) => {
        this.listService
          .add(
            {
              ...formModel,
              image: url,
              path,
            },
            'ministers'
          )
          .then((res) => {
            console.log('done');
          });
      });
    });
  }

  onDelete(minister) {
    // console.log(banner);
    this.listService
      .delete(minister.image, minister.path, 'image', 'ministers', '==')
      .then((res) => {
        console.log('done');
      });
  }
}
