import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  private http = inject(HttpClient);

  getPrice(vs: string, ids: string): Observable<any> {
    return this.http.get('/api/actual-price', {
      params: {
        ids,
        vs
      }
    });
  }

  getCoins(currency: string, page: string, perPage: string): Observable<any> {
    return this.http.get('/api/coins', {
      params: {
        currency,
        page,
        perPage
      }
    });
  }

  getCoinsList() {
    return this.http.get('/api/coins-list');
  }
}