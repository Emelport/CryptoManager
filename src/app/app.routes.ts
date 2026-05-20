import { Routes } from "@angular/router";
import { Dashboard } from "./dashboard/dashboard";
import { Portfolio } from "./portfolio/portfolio";
import { News } from "./news/news";


export const routes: Routes = [
  { path: '', redirectTo: 'news', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard },
  { path: 'portfolio', component: Portfolio },
  { path: 'news', component: News },
  { path: '**', redirectTo: 'news' }
];
