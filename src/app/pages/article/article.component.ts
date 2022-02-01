import { Component, Input } from '@angular/core';
import { Article } from '../search/model/article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {

  @Input() article!: Article;
}
