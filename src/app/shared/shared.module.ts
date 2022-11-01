import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
// import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormComponent } from '../components/form/form.component';
import { Header } from '../components/header/header.component';
import { Navbar } from '../components/navbar/navbar.component';

@NgModule({
  declarations: [Navbar, Header, FormComponent],
  imports: [
    ReactiveFormsModule,
    FormlyModule.forRoot({
      extras: { lazyRender: true, resetFieldOnHide: true },
    }),
    // FormlyMaterialModule,
    FormlyBootstrapModule,
    CommonModule,
  ],
  exports: [
    FormlyModule,
    // FormlyMaterialModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    Navbar,
    Header,
    FormComponent,
  ],
})
export class SharedModule {}
