import { Component } from '@angular/core';
import { tap } from 'rxjs';
import { ListService } from './services/list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Sermon Bank Admin';

  constructor(private list: ListService) {
    // list.get('category').pipe(
    //   tap((doc) => {
    //     const lists = doc.map((res: any) => {
    //       // console.log(res);
    //       return { label: res.name, value: res.name };
    //     });
    //     console.log(lists);
    //     return list.setCategory(lists);
    //   })
    // );
  }
}
