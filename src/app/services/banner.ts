import { FormlyFieldConfig } from '@ngx-formly/core';

export class Banner {
  public static getBannerFormConfig(): FormlyFieldConfig[] {
    return [
      {
        key: 'image',
        wrappers: ['file'],
        props: {
          label: 'Banner Image',
          required: true,
          type: 'image/*',
          multiple: false,
        },
        type: 'file',
        validation: {
          messages: {
            required: 'Please upload an image',
          },
        },
      },
      {
        key: 'url',
        type: 'input',
        props: {
          label: 'Banner forward address(url)',
          placeholder: 'https://',
          required: true,
        },
        validation: {
          messages: {
            required: 'please every banner needs a url',
          },
        },
      },
    ];
  }
}
