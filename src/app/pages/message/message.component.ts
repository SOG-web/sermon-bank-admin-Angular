import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MessageFormModel } from '../../models/message-form.model';
import { FormAttributes } from '../../models/form-attributes.model';
import { FormType } from '../../models/forms.enum';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css'],
})
export class Message implements OnInit {
  formAttributes: FormAttributes;
  messageFormModel: MessageFormModel;

  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Upload New Message');
    this.messageFormModel = new MessageFormModel();
    this.formAttributes = {
      buttonText: 'Upload',
      formType: FormType.MESSAGE,
      model: this.messageFormModel,
    };
  }

  submit(formModel: MessageFormModel) {
    console.log(formModel.message);
    console.log(formModel);
  }
}
