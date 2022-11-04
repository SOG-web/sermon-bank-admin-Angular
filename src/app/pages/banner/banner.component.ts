import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BannerFormModel } from 'src/app/models/banner-form.model';
import { FormAttributes } from 'src/app/models/form-attributes.model';
import { FormType } from 'src/app/models/forms.enum';
import { ListService } from 'src/app/services/list.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css'],
})
export class Banner implements OnInit {
  formAttributes: FormAttributes;
  bannerFormModel: BannerFormModel;
  banners = [];

  constructor(
    private title: Title,
    private uploadService: UploadService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Add new Banner');
    this.bannerFormModel = new BannerFormModel();
    this.formAttributes = {
      buttonText: 'Add new Banner',
      formType: FormType.BANNER,
      model: this.bannerFormModel,
    };
    this.listService.get('banners').subscribe((docs) => {
      // console.log(docs);
      this.banners = docs;
    });
  }

  submit(formModel: BannerFormModel) {
    // console.log(formModel);
    let safeNameFull = formModel.image[0].name.replace(/([^a-z0-9.]+)/gi, '');
    const path = `banners/audiotab/${new Date().getTime()}_${safeNameFull}`;
    this.uploadService.uploadFile(path, formModel.image[0]).then((url) => {
      url.subscribe((url) => {
        // console.log(url);
        this.listService
          .add({ image: url, path, url: formModel.url }, 'banners')
          .then((res) => {
            console.log('done');
          });
      });
    });
  }

  onDelete(banner) {
    // console.log(banner);
    this.listService
      .delete(banner.image, banner.path, 'image', 'banners', '==')
      .then((res) => {
        console.log('done');
      });
  }
}
