import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-ministry',
  templateUrl: 'ministry.component.html',
  styleUrls: ['ministry.component.css'],
})
export class Ministry {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
