import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-ministers',
  templateUrl: 'ministers.component.html',
  styleUrls: ['ministers.component.css'],
})
export class Ministers {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
