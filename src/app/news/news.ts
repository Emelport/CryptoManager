import { Component, inject, OnInit } from '@angular/core';
import { NewsService } from '../services/news';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news',
  standalone: true,
  templateUrl: './news.html',
  styleUrls: ['./news.css'],
})
export class News implements OnInit {
  news: any[] = [];
  private readonly _newsService = inject(NewsService);
  private readonly route = inject(ActivatedRoute);

  ngOnInit() {
      this.loadNews();
  }

  loadNews() {
    this._newsService.getNews().subscribe({
      next: (data) => {
        this.news = [...data]; 
      },
      error: (err) => console.error(err),
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