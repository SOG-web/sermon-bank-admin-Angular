import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'i-phone141',
  templateUrl: 'i-phone141.component.html',
  styleUrls: ['i-phone141.component.css'],
})
export class IPhone141 {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
