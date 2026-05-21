import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { of } from 'rxjs';

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
  private readonly http = inject(HttpClient);

  getNews(): Observable<NewsItem[]> {
    return this.http.get<NewsItem[]>('/api/news').pipe(
      catchError(() => of([])),
    );
  }
}
