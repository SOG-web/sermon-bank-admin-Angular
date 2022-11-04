import { Country } from '@angular-material-extensions/select-country';
import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-country',
  template: `
    <mat-select-country
      appearance="outline"
      label="Country"
      [formControl]="formControl"
      [formlyAttributes]="field"
      (onCountrySelected)="onCountrySelected($event)"
    >
    </mat-select-country>
  `,
  styleUrls: ['./file-type.component.css'],
})
export class FormlyFieldCountry extends FieldType {
  onCountrySelected($event: Country) {
    console.log($event);
  }
}
