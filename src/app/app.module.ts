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
import { SharedModule } from './shared/shared.module';
import { NgxMatFileInputModule } from '@angular-material-components/file-input';
import { FileFieldWrapper } from './components/form/file-field-wrapper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListService } from './services/list.service';

@NgModule({
  declarations: [
    AppComponent,
    // FileValidatorDirective,
    FileFieldWrapper,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    NgxMatFileInputModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: resourceProviderFactory,
    //   deps: [ListService],
    //   multi: true,
    // },
    ListService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// export function resourceProviderFactory(provider: ListService) {
//   return () => provider.getOptions('category');
// }
