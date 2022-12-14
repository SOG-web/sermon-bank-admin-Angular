import { FormControl } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { EmailValidator } from './custom-validator.service';

export class Login {
  public static getLoginFormConfig(): FormlyFieldConfig[] {
    return [
      {
        // className: 'input-email',
        focus: true,
        key: 'email',
        props: {
          label: 'Email',
          placeholder: 'you@company.com',
          required: true,
          type: 'email',
        },
        type: 'input',
        validation: {
          messages: {
            required: `Please enter an email address.`,
          },
        },
        validators: {
          email: {
            expression: (c: FormControl) => EmailValidator(c),
            message: 'Please enter a valid email address.',
          },
        },
      },
      {
        // className: 'input-password',
        key: 'password',
        props: {
          label: 'Password',
          minLength: 5,
          placeholder: 'password',
          required: true,
          type: 'password',
        },
        type: 'input',
        validation: {
          messages: {
            minlength: `The password has to be longer.`,
            required: `Please enter a password.`,
          },
        },
      },
    ];
  }
}
