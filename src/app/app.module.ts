import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
// import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth.service';
import { AppRoutingModule } from './app-routing.module';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { FileFieldWrapper } from './components/form/file-field-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListService } from './services/list.service';
import { Navbar } from './components/navbar/navbar.component';
import { Header } from './components/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { FormlyFieldCountry } from './components/form/country-picker-type.component';
import { FormlyFieldFile } from './components/form/file-type.component';
import { MatSelectCountryModule } from '@angular-material-extensions/select-country';
import { HttpClientModule } from '@angular/common/http';
import { FileValueAccessor } from './directives/file-value-accessor';
import { FormComponent } from './components/form/form.component';
import { Message } from './pages/message/message.component';
import { Levels } from './pages/levels/levels.component';
import { Banner } from './pages/banner/banner.component';
import { Ministers } from './pages/ministers/ministers.component';
import { AuthComponent } from './pages/auth/auth.component';
import { Home } from './pages/home/home.component';
import { Category } from './pages/category/category.component';
import { CommonModule } from '@angular/common';
import { UploadService } from './services/upload.service';

@NgModule({
  declarations: [
    AppComponent,
    // FileValidatorDirective,
    FileFieldWrapper,
    Navbar,
    Header,
    FileValueAccessor,
    FormlyFieldFile,
    FormlyFieldCountry,
    Navbar,
    Header,
    FormComponent,
    Message,
    Levels,
    Banner,
    Ministers,
    AuthComponent,
    Home,
    Category,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
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
    MatSelectCountryModule.forRoot('en'),
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgxMatFileInputModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthService, ListService, UploadService],
  bootstrap: [AppComponent],
})
export class AppModule {}
