import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html',
  styleUrls: ['message.component.css'],
})
export class Message {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
