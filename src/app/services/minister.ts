import { FormlyFieldConfig } from '@ngx-formly/core';

export class Minister {
  public static getMinisterFormConfig(): FormlyFieldConfig[] {
    return [
      {
        key: 'image',
        wrappers: ['file'],
        props: {
          label: 'Minister Image',
          placeholder: 'select an image',
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
        // parsers: [
        //   (_) => {
        //     console.log(_);
        //   },
        // ],
      },
      {
        focus: true,
        key: 'name',
        props: {
          label: 'Minister Name',
          placeholder: 'name of the minister',
          required: true,
        },
        type: 'input',
        validation: {
          messages: {
            required: `Please there is no minister without a name`,
          },
        },
      },
      {
        key: 'dob',
        props: {
          label: 'Date of Birth',
          required: true,
          type: 'date',
        },
        type: 'input',
        validation: {
          messages: {
            required: `Please select a date`,
          },
        },
      },
      {
        key: 'country',
        // wrappers: ['country'],
        props: {
          label: 'Select Country',
          placeholder: 'NG',
          required: true,
        },
        type: 'country',
        validation: {
          messages: {
            required: 'Please upload select a country',
          },
        },
        // parsers: [
        //   (_) => {
        //     console.log(_);
        //   },
        // ],
      },
      {
        key: 'about',
        props: {
          label: 'About',
          placeholder: 'enter a short bio',
          required: true,
        },
        type: 'textarea',
        validation: {
          messages: {
            required: 'Please enter a shot bio',
          },
        },
      },
    ];
  }
}
