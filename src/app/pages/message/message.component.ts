import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageFormModel } from '../../models/message-form.model';
import { FormAttributes } from '../../models/form-attributes.model';
import { FormType } from '../../models/forms.enum';
import { ListService } from 'src/app/services/list.service';
import { UploadService } from 'src/app/services/upload.service';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css'],
})
export class Message implements OnInit {
  formAttributes: FormAttributes;
  messageFormModel: MessageFormModel;
  messages = [];

  constructor(
    private title: Title,
    private uploadService: UploadService,
    private listService: ListService
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Upload New Message');
    this.messageFormModel = new MessageFormModel();
    this.formAttributes = {
      buttonText: 'Upload',
      formType: FormType.MESSAGE,
      model: this.messageFormModel,
    };
    this.listService.get('messages').subscribe((docs) => {
      // console.log(docs);
      this.messages = docs;
    });
    // console.log(this.messageFormModel);
  }

  submit(formModel: MessageFormModel) {
    const image =
      'https://firebasestorage.googleapis.com/v0/b/sermon-bank.appspot.com/o/sermons%2Fimages%2Faudio%2FEP-Austin-French-Wake-Up-Sleeper-scaled-1.jpg?alt=media&token=625b3886-2e31-404b-b607-0538a4ce8af4';
    const safeNameFull = formModel.message[0].name.replace(
      /([^a-z0-9.]+)/gi,
      ''
    );
    const path = `sermons/audio/${new Date().getTime()}_${safeNameFull}`;
    this.uploadService.uploadFile(path, formModel.message[0]).then((url) => {
      url.subscribe((url) => {
        console.log(url);
        this.listService
          .add(
            {
              category: formModel.category,
              metadata: {
                album: formModel.category,
                'album image': image,
                artist: formModel.minister,
                title: formModel.title,
                url,
              },
              minister: formModel.minister,
              name: formModel.title,
              'related message': formModel.category,
              url,
              path,
            },
            'messages'
          )
          .then((res) => {
            console.log('done');
          });
      });
    });
  }

  onDelete(message) {
    // console.log(banner);
    this.listService
      .delete(message.url, message.path, 'url', 'messages', '==')
      .then((res) => {
        console.log('done');
      });
  }
}
