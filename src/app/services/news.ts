import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface NewsItem {
  title: string;
  link: string;
  date: string;
  author: string;
  guid: string;
  image?: string;
  description?: string;
  content?: string;
  categories?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(private http: HttpClient) {}

  getNews() {
    return this.http.get<NewsItem[]>('/api/news');
  }
}
