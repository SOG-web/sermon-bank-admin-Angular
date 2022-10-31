import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class Header {
  @Input()
  heading1: string = 'Add New message'
  @Input()
  heading: string = 'Add New message'
  @Input()
  rootClassName: string = ''

  constructor() {}
}
