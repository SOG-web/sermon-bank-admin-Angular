import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-levels',
  templateUrl: 'levels.component.html',
  styleUrls: ['levels.component.css'],
})
export class Levels {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
