import { SearchService } from './pages/search/services/search.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './pages/search/model/article.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  articles$!: Observable<Article[]>;

  constructor(private readonly searchService: SearchService){}

  onSearch(term: string): void{
     this.articles$ = this.searchService.search(term);
  }
}
