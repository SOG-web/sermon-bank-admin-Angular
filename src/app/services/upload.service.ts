import { Injectable } from '@angular/core';
import {
  AngularFireStorage,
  AngularFireUploadTask,
} from '@angular/fire/compat/storage';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  task!: AngularFireUploadTask;

  constructor(private fireStorage: AngularFireStorage) {}

  async uploadFile(path: string, file: File): Promise<Observable<string>> {
    const ref = this.fireStorage.ref(path);
    await this.fireStorage.upload(path, file);

    return ref.getDownloadURL();
  }
}
