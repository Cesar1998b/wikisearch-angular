import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Response } from '../model/response.model';
import { Article } from './../model/article.model';
import { pluck } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<Article[]>{
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
      utf8: '1',
      origin: '*'
    }

    return this.http.get<Response>(environment.api,{ params })
    .pipe(
      pluck('query', 'search')
    )
  }
}
