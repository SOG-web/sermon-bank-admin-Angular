import { Component } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.css'],
})
export class Category {
  constructor(private title: Title) {
    this.title.setTitle('exported project')
  }
}
