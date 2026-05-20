import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoingeckoService {
  private http = inject(HttpClient);

  private baseUrl = '/api/coingecko';

  getPrice(
    ids: string[],
    currencies: string[] = ['usd', 'eur', 'mxn']
  ): Observable<any> {
    const params = new HttpParams()
      .set('ids', ids.join(','))
      .set('vs_currencies', currencies.join(','));

    return this.http.get(
      `${this.baseUrl}/simple/price`,
      { params }
    );
  }
}