import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, of, tap } from 'rxjs';
import { ListService } from './list.service';

export class Message {
  public static getMessageFormConfig(
    listService: ListService
  ): FormlyFieldConfig[] {
    return [
      {
        focus: true,
        key: 'category',
        props: {
          label: 'Select Category',
          placeholder: 'category',
          required: true,
          multiple: true,
          options: listService.getOptions('category'),
        },
        type: 'select',
        validation: {
          messages: {
            required: `Please select at least one category`,
          },
        },
      },
      {
        key: 'minister',
        props: {
          label: 'Select Minister',
          placeholder: 'minister',
          required: true,
          options: listService.getOptions('ministers'),
        },
        type: 'select',
        validation: {
          messages: {
            required: `Please select a minister`,
          },
        },
      },
      {
        key: 'title',
        props: {
          label: 'message title',
          placeholder: 'enter the message title',
          required: true,
          // type: 'text',
        },
        type: 'input',
        validation: {
          messages: {
            required: 'Please enter the message title',
          },
        },
      },
      {
        key: 'message',
        wrappers: ['file'],
        props: {
          label: 'message',
          placeholder: 'message',
          required: true,
          type: 'audio/*',
          multiple: false,
        },
        type: 'file',
        validation: {
          messages: {
            required: 'Please upload a message',
          },
        },
      },
    ];
  }
}
