import { Article } from './article.model';

export interface Response{
  query:{
    search: Article[]
  }
}
