import { Component, OnInit } from '@angular/core';
import { NewsItem, NewsService } from '../services/news';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.html',
  styleUrl: './news.css',
})
export class News implements OnInit {

  public news: any[] = [];

  constructor(
    private _newsService: NewsService
  ) {}

  ngOnInit() {
    this._newsService.getNews().subscribe({
        next: (data) => {
          this.news = data;
        },
        error: (err) => {
          console.error('Error loading news', err);
        }
      });  
  }

  findImageContent(item: any) {
    if (Array.isArray(item['media:content'])) {
      const imageMedia = item['media:content'].find((media: any) => media.medium === 'image');
      if (imageMedia) {
        return imageMedia.url;
      }
    }
    if (item['media:content'] && item['media:content'].url) {
      return item['media:content'].url;
    }
    return null;
  }
}


