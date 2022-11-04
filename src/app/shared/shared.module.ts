import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormComponent } from '../components/form/form.component';
import { Header } from '../components/header/header.component';
import { Navbar } from '../components/navbar/navbar.component';
import { FormlyFieldFile } from '../components/form/file-type.component';
import { FileFieldWrapper } from '../components/form/file-field-wrapper.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FileValueAccessor } from '../directives/file-value-accessor';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { FormlyFieldCountry } from '../components/form/country-picker-type.component';

@NgModule({
  declarations: [
    Navbar,
    Header,
    FormComponent,
    FileValueAccessor,
    FormlyFieldFile,
    FormlyFieldCountry,
  ],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true, resetFieldOnHide: true },
      types: [
        { name: 'file', component: FormlyFieldFile },
        { name: 'country', component: FormlyFieldCountry },
      ],
      wrappers: [{ name: 'file', component: FileFieldWrapper }],
    }),
    FormlyMaterialModule,
    // FormlyBootstrapModule,
    CommonModule,
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule,
  ],
  exports: [
    FormlyModule,
    FormlyMaterialModule,
    // FormlyBootstrapModule,
    ReactiveFormsModule,
    Navbar,
    Header,
    FormComponent,
    FormlyFieldFile,
    FileValueAccessor,
    MatSelectCountryModule,
    HttpClientModule,
  ],
})
export class SharedModule {}
