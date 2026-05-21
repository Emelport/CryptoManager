import { Component, inject, OnInit } from '@angular/core';
import { CoingeckoService } from '../services/coingecko';
import { Observable } from 'rxjs';

interface HoldingAsset {
  symbol: string;
  name: string;
  balance: string;
  price: string;
  value: string;
  change: string;
  trend: 'up' | 'down';
}

@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.html',
  styleUrls: ['./portfolio.css'],
})
export class Portfolio implements OnInit {
  private readonly coingecko = inject(CoingeckoService);
  protected prices: any[] = [];
  protected coins: any[] = [];

  protected totalValue = '$1,245,678.90';
  protected totalChange = '+5.24%';
  protected profitLoss = '+$12,450.00';
  protected bestPerformer = 'SOL';
  protected bestPerformerChange = '+12.4%';

  protected holdingAssets: HoldingAsset[] = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      balance: '12.4500',
      price: '$64,230.12',
      value: '$799,664.99',
      change: '+2.4%',
      trend: 'up',
    },
    {
      symbol: 'ETH',
      name: 'Ethereum',
      balance: '84.2000',
      price: '$3,450.80',
      value: '$290,557.36',
      change: '-1.2%',
      trend: 'down',
    },
    {
      symbol: 'SOL',
      name: 'Solana',
      balance: '1,250.00',
      price: '$145.20',
      value: '$181,500.00',
      change: '+12.4%',
      trend: 'up',
    },
  ];

  coinOptions: Observable<any> = this.coingecko.getCoinsList();

  ngOnInit(): void {
    this.getPrices('bitcoin,ethereum,solana,ripple', 'usd,mxn,yen');
    this.getCoins('usd', '1', '10');
  }

  getPrices(coin: string, currency: string) {
    this.coingecko.getPrice(currency, coin).subscribe({
      next: (data) => {
        this.prices = Array.isArray(data) ? [...data] : [data];
        this.updateHoldingPrices(data);
      },
      error: (err) => console.error(err),
    });
  }

  getCoins(currency: string, page: string, perPage: string) {
    this.coingecko.getCoins(currency, page, perPage).subscribe({
      next: (data) => {
        this.coins = Array.isArray(data) ? [...data] : [data];
      },
      error: (err) => console.error(err),
    });
  }

  private updateHoldingPrices(data: any) {
    if (!data || typeof data !== 'object') {
      return;
    }

    this.holdingAssets = this.holdingAssets.map((asset) => {
      const key = asset.name.toLowerCase();
      const marketData = data[key] ?? data[asset.symbol.toLowerCase()];
      const usdPrice = marketData?.usd || marketData?.USD;

      if (usdPrice == null || Number.isNaN(Number(usdPrice))) {
        return asset;
      }

      const price = this.formatCurrency(Number(usdPrice));
      const value = this.formatCurrency(Number(asset.balance) * Number(usdPrice));

      return {
        ...asset,
        price,
        value,
      };
    });
  }

  private formatCurrency(value: number) {
    return `$${value.toLocaleString('en-US', { maximumFractionDigits: 2 })}`;
  }

  // get totalValue {
  //   const total = this.holdingAssets.reduce((sum, asset) => {
  //     const value = parseFloat(asset.value.replace(/[$,]/g, ''));
  //     return sum + (isNaN(value) ? 0 : value);
  //   }, 0);

  //   return this.formatCurrency(total);
  // }
}
