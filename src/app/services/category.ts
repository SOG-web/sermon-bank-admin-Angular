import { FormlyFieldConfig } from '@ngx-formly/core';

export class Category {
  public static getCategoryFormConfig(): FormlyFieldConfig[] {
    return [
      {
        focus: true,
        key: 'name',
        props: {
          label: 'Category Name',
          placeholder: 'name of category',
          required: true,
        },
        type: 'input',
        validation: {
          messages: {
            required: `Please enter the category name`,
          },
        },
      },
      {
        key: 'icon',
        wrappers: ['file'],
        props: {
          label: 'category icon',
          placeholder: 'category icon',
          required: true,
          type: 'image/*',
          multiple: false,
        },
        type: 'file',
        validation: {
          messages: {
            required: 'Please upload an icon',
          },
        },
        // parsers: [
        //   (_) => {
        //     console.log(_);
        //   },
        // ],
      },
    ];
  }
}
