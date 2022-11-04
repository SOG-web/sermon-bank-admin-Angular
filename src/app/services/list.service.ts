import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, of, tap } from 'rxjs';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  banner = [];
  category = [];

  constructor(
    private fireStore: AngularFirestore,
    private fireStorage: AngularFireStorage
  ) {}

  getOptions(collection) {
    return this.fireStore
      .collection(collection)
      .valueChanges()
      .pipe(
        map((res) => {
          console.log(res);
          return res.map((value: any) => {
            return { label: value.name, value: value.name };
          });
        })
      );
  }

  get(collection: string) {
    return this.fireStore.collection(collection).valueChanges();
  }

  add(data, collection) {
    return this.fireStore.collection(collection).add(data);
  }

  async delete(
    filed: string,
    path: string,
    firePath: string,
    collection: string,
    condition
  ) {
    const querySnapshot = await this.fireStore
      .collection(collection)
      .ref.where(firePath, condition, filed)
      .get();
    return querySnapshot.forEach((doc) => {
      if (path) {
        this.fireStorage.ref(path).delete();
      }
      return doc.ref.delete();
    });
  }
}
