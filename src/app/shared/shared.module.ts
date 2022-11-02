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

@NgModule({
  declarations: [
    Navbar,
    Header,
    FormComponent,
    FileValueAccessor,
    FormlyFieldFile,
  ],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true, resetFieldOnHide: true },
      types: [{ name: 'file', component: FormlyFieldFile }],
      wrappers: [{ name: 'file', component: FileFieldWrapper }],
    }),
    FormlyMaterialModule,
    // FormlyBootstrapModule,
    CommonModule,
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
  ],
})
export class SharedModule {}
