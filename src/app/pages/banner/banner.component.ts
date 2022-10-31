import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-banner',
  templateUrl: 'banner.component.html',
  styleUrls: ['banner.component.css'],
})
export class Banner {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
